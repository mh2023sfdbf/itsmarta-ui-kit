import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

/**
 * Get S3Client configured for Cloudflare R2
 * Factory function to avoid initializing at module scope (build-time safe)
 * 
 * @throws Error if R2 environment variables are not set
 */
export function getR2Client(): S3Client {
  const endpoint = process.env.R2_ENDPOINT;
  const accessKeyId = process.env.R2_ACCESS_KEY;
  const secretAccessKey = process.env.R2_SECRET_KEY;

  if (!endpoint || !accessKeyId || !secretAccessKey) {
    throw new Error('R2 environment variables (R2_ENDPOINT, R2_ACCESS_KEY, R2_SECRET_KEY) are not set');
  }

  return new S3Client({
    region: 'auto',
    endpoint,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

/**
 * Creates a short-lived signed URL for downloading a private R2 object
 * 
 * @param key - The R2 object key (e.g., "ui-kit-ver1.zip")
 * @param expiresInSeconds - URL expiration time in seconds (default: 600 = 10 minutes)
 * @returns Signed download URL
 * @throws Error if R2_BUCKET environment variable is not set
 */
export async function createSignedDownloadUrl(
  key: string,
  expiresInSeconds: number = 600
): Promise<string> {
  const bucket = process.env.R2_BUCKET;
  
  if (!bucket) {
    throw new Error('R2_BUCKET environment variable is not set');
  }

  // Get R2 client at runtime
  const r2Client = getR2Client();

  // Extract filename from key (e.g., "folder/file.zip" -> "file.zip")
  const filename = key.split('/').pop() || key;
  
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
    // Force download instead of opening in browser
    ResponseContentDisposition: `attachment; filename="${filename}"`,
  });

  const signedUrl = await getSignedUrl(r2Client, command, {
    expiresIn: expiresInSeconds,
  });

  return signedUrl;
}

