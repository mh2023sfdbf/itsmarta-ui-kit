# Cloudflare Pages Deployment Guide

This guide covers deploying your Next.js App Router project to Cloudflare Pages with API routes and edge runtime support.

## 🌐 Why Cloudflare Pages?

- **Edge Runtime**: API routes run globally on Cloudflare's edge network
- **Zero Config**: Next.js automatically adapts to Cloudflare's platform
- **R2 Integration**: Native integration with Cloudflare R2 storage
- **Fast & Secure**: Built-in DDoS protection, CDN, and edge caching
- **Free Tier**: Generous free tier for small to medium projects

---

## 📦 Prerequisites

- Next.js 15+ with App Router
- Git repository (GitHub, GitLab, or Bitbucket)
- Cloudflare account

---

## 🚀 Deployment Methods

### Method 1: Automatic Git Deployment (Recommended)

1. **Connect Repository**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
   - Click "Create a project" → "Connect to Git"
   - Authorize and select your repository

2. **Configure Build Settings**:
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .vercel/output/static
   Root directory: / (or leave empty)
   ```

3. **Advanced Settings**:
   - Node version: `20` (automatically detected from `.node-version` file)
   - Environment variables: Add after initial deployment

4. **Deploy**:
   - Click "Save and Deploy"
   - Cloudflare will build and deploy automatically
   - Future commits trigger automatic deployments

5. **Add Environment Variables**:
   - After deployment, go to: Settings → Environment Variables
   - Add production and preview environment variables (see `env.example`)

### Method 2: CLI Deployment (Wrangler)

1. **Install Wrangler**:
   ```bash
   npm install -g wrangler
   ```

2. **Login**:
   ```bash
   wrangler login
   ```

3. **Build Your Project**:
   ```bash
   npm run build
   ```

4. **Deploy**:
   ```bash
   npx wrangler pages deploy .vercel/output/static --project-name=itsmarta-ui-kit
   ```

5. **Set Environment Variables** (via CLI):
   ```bash
   wrangler pages secret put STRIPE_SECRET_KEY --project-name=itsmarta-ui-kit
   wrangler pages secret put R2_ENDPOINT --project-name=itsmarta-ui-kit
   # ... repeat for all secrets
   ```

---

## ⚙️ Configuration Files

### `.node-version`
Specifies Node.js version for Cloudflare Pages:
```
20
```

### `wrangler.toml`
Optional configuration file for Cloudflare Pages:
```toml
name = "itsmarta-ui-kit"
compatibility_date = "2024-01-01"
pages_build_output_dir = ".vercel/output/static"
```

### `next.config.ts`
Must **NOT** have `output: 'export'` for API routes:
```typescript
const nextConfig: NextConfig = {
  // No static export - we need server/edge runtime for API routes
  images: {
    unoptimized: true,
  },
};
```

---

## 🔧 Environment Variables

### Required for Download Flow:

Set these in: Cloudflare Dashboard → Pages → Your Project → Settings → Environment Variables

#### Production Environment:
```bash
STRIPE_SECRET_KEY=sk_live_...
R2_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
R2_ACCESS_KEY=<your-access-key>
R2_SECRET_KEY=<your-secret-key>
R2_BUCKET=<bucket-name>
R2_KEY=ui-kit-ver1.zip
```

#### Preview Environment (Optional):
Use test Stripe keys for preview deployments:
```bash
STRIPE_SECRET_KEY=sk_test_...
# Same R2 config or separate test bucket
```

---

## 🐛 Troubleshooting

### Build Fails

**Error**: `Module not found: Can't resolve '@/lib/...'`
- **Fix**: Ensure `tsconfig.json` has proper path aliases:
  ```json
  {
    "compilerOptions": {
      "paths": {
        "@/*": ["./*"]
      }
    }
  }
  ```

**Error**: `output: 'export' is not compatible with API Routes`
- **Fix**: Remove `output: 'export'` from `next.config.ts`

### Runtime Errors

**Error**: `Environment variable not defined`
- **Fix**: Add missing environment variables in Cloudflare Pages settings
- **Note**: Changes require redeployment (trigger with empty commit or manual redeploy)

**Error**: `fetch is not defined` or `crypto is not available`
- **Fix**: Use `export const runtime = 'edge'` in API route files
- **Note**: Already configured in `app/api/download-link/route.ts`

### R2 Connection Issues

**Error**: `NetworkingError` or `Connection refused`
- **Fix**: Verify R2_ENDPOINT format: `https://<account-id>.r2.cloudflarestorage.com`
- **Check**: R2 API token has correct permissions (Read & Write)

**Error**: `AccessDenied` (403)
- **Fix**: Verify R2_ACCESS_KEY and R2_SECRET_KEY are correct
- **Check**: Bucket name matches R2_BUCKET value

---

## 🔄 Deployment Workflow

### Development:
```bash
npm run dev         # Local development
```

### Preview (Git Branch):
```bash
git checkout -b feature/new-feature
git push origin feature/new-feature
# Cloudflare automatically deploys preview
```

### Production (Main Branch):
```bash
git checkout main
git merge feature/new-feature
git push origin main
# Cloudflare automatically deploys to production
```

---

## 📊 Monitoring & Logs

### View Deployment Logs:
1. Cloudflare Dashboard → Pages → Your Project
2. Click on a deployment
3. View build logs and runtime logs

### Function Logs (API Routes):
1. Go to: Pages → Your Project → Functions
2. View real-time logs for edge functions
3. Filter by endpoint (e.g., `/api/download-link`)

### Analytics:
- Cloudflare Dashboard → Pages → Analytics
- View: Requests, bandwidth, errors, and performance

---

## 🔐 Security Best Practices

1. **Never commit secrets**: Use `.env.local` locally (in `.gitignore`)
2. **Use environment variables**: All secrets via Cloudflare Pages env vars
3. **Edge runtime**: API routes default to edge runtime for security
4. **R2 private buckets**: Ensure R2 buckets have no public access
5. **Signed URLs**: Always use short-lived signed URLs (10 minutes)

---

## 🚦 Custom Domains

### Add Custom Domain:

1. Go to: Pages → Your Project → Custom domains
2. Click "Set up a custom domain"
3. Enter your domain: `yourdomain.com`
4. Cloudflare provides DNS records to add:
   - If domain is on Cloudflare: Automatic setup
   - If domain elsewhere: Add CNAME record manually

### SSL/HTTPS:
- Automatic SSL certificate provisioning
- Enforced HTTPS by default
- No configuration needed

---

## ⚡ Performance Optimization

### Caching:
- Static assets automatically cached on Cloudflare CDN
- API routes run on edge (no caching by default)
- Configure cache headers if needed:
  ```typescript
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, max-age=60, s-maxage=60',
    },
  });
  ```

### Bundle Size:
- Cloudflare Pages has no bundle size limits
- Optimize images: Use `next/image` with `unoptimized: true`
- Code splitting: Automatic with Next.js App Router

---

## 📝 Additional Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Cloudflare R2 Docs](https://developers.cloudflare.com/r2/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)

---

## ✅ Deployment Checklist

Before going live:

- [ ] Next.js build succeeds locally (`npm run build`)
- [ ] Environment variables added in Cloudflare Pages
- [ ] R2 bucket created and file uploaded
- [ ] Stripe Payment Link configured with correct success URL
- [ ] Test deployment with preview environment
- [ ] Custom domain configured (optional)
- [ ] Analytics and monitoring set up
- [ ] Error tracking configured (optional: Sentry, etc.)

---

## 🎉 You're Live!

Your Next.js app is now running on Cloudflare's global edge network with:
- ✅ Instant deploys from Git
- ✅ Edge API routes
- ✅ R2 storage integration
- ✅ Automatic SSL
- ✅ DDoS protection
- ✅ Global CDN

**Happy deploying!** 🚀

