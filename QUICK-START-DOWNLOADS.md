# Quick Start: Digital Downloads

Get your digital download flow running in 5 minutes.

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Environment Variables

Copy `env.example` to `.env.local`:
```bash
cp env.example .env.local
```

Edit `.env.local` with your credentials:
```bash
# Stripe (get from https://dashboard.stripe.com/test/apikeys)
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE

# R2 (get from Cloudflare Dashboard > R2)
R2_ENDPOINT=https://1a531e9424d86cf3777881db10396824.r2.cloudflarestorage.com
R2_ACCESS_KEY=469fd64d6098adc8111b868b512c8774
R2_SECRET_KEY=8f3ae97d6b05242d8cdd52d810ca922af19575dc413102603ec4b047b695a520
R2_BUCKET=ui-kit-downloads
R2_KEY=QUICK-START-DOWNLOADS.md
```

### 3. Configure Stripe Payment Link

In Stripe Dashboard:
1. Create a product
2. Create a payment link
3. Set success URL to:
   ```
   http://localhost:3000/download?session_id={CHECKOUT_SESSION_ID}
   ```
   (For production: `https://yourdomain.com/download?session_id={CHECKOUT_SESSION_ID}`)

### 4. Upload File to R2

1. Create R2 bucket in Cloudflare Dashboard
2. Upload your product file (e.g., `ui-kit-ver1.zip`)
3. Ensure bucket is **private** (no public access)

### 5. Test Locally

```bash
npm run dev
```

1. Visit your Stripe payment link
2. Use test card: `4242 4242 4242 4242`
3. Complete payment
4. Redirected to `/download` → file downloads automatically

## 🔥 Deploy to Production

### Option 1: Cloudflare Pages (Recommended)

```bash
# Connect GitHub repo in Cloudflare Dashboard
# Or use CLI:
npm run build
npx wrangler pages deploy .vercel/output/static --project-name=itsmarta-ui-kit
```

### Option 2: Vercel/Netlify
Standard Next.js deployment works fine.

## 📖 Full Documentation

- **Complete Setup Guide**: `DOWNLOAD-FLOW-SETUP.md`
- **Cloudflare Deployment**: `CLOUDFLARE-DEPLOYMENT.md`

## ❓ Common Issues

| Issue | Solution |
|-------|----------|
| "Missing session_id" | Check Stripe payment link success URL has `{CHECKOUT_SESSION_ID}` |
| "Payment not completed" | Complete a fresh payment, don't reuse old links |
| R2 connection error | Verify R2 credentials in `.env.local` |
| 500 error | Check terminal logs for specific error message |

## 🎉 That's It!

Your download flow is ready. Customers can now:
1. Pay via Stripe
2. Get instant download
3. Secure, time-limited links

**Need help?** Check `DOWNLOAD-FLOW-SETUP.md` for detailed troubleshooting.

