import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// Validate required environment variables
if (!process.env.R2_ENDPOINT) {
  throw new Error('R2_ENDPOINT is not defined in environment variables');
}
if (!process.env.R2_ACCESS_KEY) {
  throw new Error('R2_ACCESS_KEY is not defined in environment variables');
}
if (!process.env.R2_SECRET_KEY) {
  throw new Error('R2_SECRET_KEY is not defined in environment variables');
}
if (!process.env.R2_BUCKET) {
  throw new Error('R2_BUCKET is not defined in environment variables');
}

/**
 * S3Client configured for Cloudflare R2
 * Compatible with Cloudflare Pages Functions edge runtime
 */
export const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_KEY,
  },
});

/**
 * Creates a short-lived signed URL for downloading a private R2 object
 * 
 * @param key - The R2 object key (e.g., "ui-kit-ver1.zip")
 * @param expiresInSeconds - URL expiration time in seconds (default: 600 = 10 minutes)
 * @returns Signed download URL
 */
export async function createSignedDownloadUrl(
  key: string,
  expiresInSeconds: number = 600
): Promise<string> {
  // Extract filename from key (e.g., "folder/file.zip" -> "file.zip")
  const filename = key.split('/').pop() || key;
  
  const command = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET,
    Key: key,
    // Force download instead of opening in browser
    ResponseContentDisposition: `attachment; filename="${filename}"`,
  });

  const signedUrl = await getSignedUrl(r2Client, command, {
    expiresIn: expiresInSeconds,
  });

  return signedUrl;
}

