# Digital Download Flow - Setup & Test Guide

This guide walks you through setting up and testing the Cloudflare-native digital download flow for the UI Kit.

## 🏗️ Architecture Overview

- **Payment**: Stripe Checkout (Payment Link)
- **Storage**: Cloudflare R2 (private bucket)
- **Hosting**: Cloudflare Pages (Edge runtime)
- **Download Flow**: Stripe → `/download` page → API verification → Signed R2 URL

---

## 📋 Prerequisites

1. **Stripe Account**: [Create one](https://dashboard.stripe.com/register)
2. **Cloudflare Account**: [Sign up](https://dash.cloudflare.com/sign-up)
3. **R2 Enabled**: Activate R2 in your Cloudflare account
4. **Product File**: Your downloadable product (e.g., `ui-kit-ver1.zip`)

---

## 🔧 Setup Instructions

### Step 1: Install Dependencies

```bash
npm install
```

This installs:
- `stripe` - Stripe API client
- `@aws-sdk/client-s3` - S3-compatible client for R2
- `@aws-sdk/s3-request-presigner` - Generate signed URLs

### Step 2: Configure Cloudflare R2

1. **Create R2 Bucket**:
   - Go to: Cloudflare Dashboard → R2 → Create Bucket
   - Name: e.g., `ui-kit-downloads` (private, no public access)

2. **Upload Your Product File**:
   - In your bucket, upload your file: `ui-kit-ver1.zip`
   - Note the exact object key (filename)

3. **Create R2 API Token**:
   - Go to: R2 → Manage R2 API Tokens → Create API Token
   - Permissions: Object Read & Write
   - Save the following values:
     - Access Key ID
     - Secret Access Key
     - Endpoint URL (format: `https://<account-id>.r2.cloudflarestorage.com`)

### Step 3: Configure Stripe

1. **Create a Product**:
   - Go to: [Stripe Dashboard → Products](https://dashboard.stripe.com/products)
   - Click "Add Product"
   - Name: "UI Kit Ver 1"
   - Pricing: One-time payment (e.g., $49)
   - Save the product

2. **Create Payment Link**:
   - In your product, click "Create payment link"
   - **Success URL** (CRITICAL): 
     ```
     https://your-domain.com/download?session_id={CHECKOUT_SESSION_ID}
     ```
   - For local testing use: `http://localhost:3000/download?session_id={CHECKOUT_SESSION_ID}`
   - Note: The `{CHECKOUT_SESSION_ID}` placeholder is automatically replaced by Stripe

3. **Get API Keys**:
   - Go to: [Stripe Dashboard → Developers → API Keys](https://dashboard.stripe.com/test/apikeys)
   - Copy your **Secret Key** (starts with `sk_test_` or `sk_live_`)

### Step 4: Configure Environment Variables

#### For Local Development:

Copy `env.example` to `.env.local`:

```bash
cp env.example .env.local
```

Edit `.env.local` with your actual values:

```bash
# Stripe
STRIPE_SECRET_KEY=sk_test_YOUR_ACTUAL_KEY_HERE

# R2
R2_ENDPOINT=https://1a531e9424d86cf3777881db10396824.r2.cloudflarestorage.com
R2_ACCESS_KEY=469fd64d6098adc8111b868b512c8774
R2_SECRET_KEY=8f3ae97d6b05242d8cdd52d810ca922af19575dc413102603ec4b047b695a520
R2_BUCKET=ui-kit-downloads
R2_KEY=QUICK-START-DOWNLOADS.md
```

#### For Cloudflare Pages Production:

1. Go to: Cloudflare Dashboard → Pages → Your Project → Settings → Environment Variables
2. Add each variable for Production (and Preview if needed):
   - `STRIPE_SECRET_KEY`
   - `R2_ENDPOINT`
   - `R2_ACCESS_KEY`
   - `R2_SECRET_KEY`
   - `R2_BUCKET`
   - `R2_KEY`

### Step 5: Deploy to Cloudflare Pages

#### Option A: Automatic Deployment (Recommended)

1. **Connect GitHub/GitLab**:
   - Go to: Cloudflare Dashboard → Pages → Create a project
   - Connect your repository

2. **Build Configuration**:
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `.vercel/output/static`
   - Node version: `20` (set in `.node-version` file)

3. **Deploy**:
   - Cloudflare Pages will automatically build and deploy
   - Add environment variables after first deployment

#### Option B: Manual Deployment (CLI)

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy .vercel/output/static --project-name=itsmarta-ui-kit
```

---

## 🧪 Test Plan

### Test Mode Setup (Use Stripe Test Keys)

#### 1. **Start Local Development Server**:

```bash
npm run dev
```

Visit: http://localhost:3000

#### 2. **Complete Test Purchase**:

- Open your Stripe Payment Link
- Use a [Stripe test card](https://stripe.com/docs/testing):
  - Card Number: `4242 4242 4242 4242`
  - Expiry: Any future date (e.g., `12/34`)
  - CVC: Any 3 digits (e.g., `123`)
  - ZIP: Any 5 digits (e.g., `12345`)

#### 3. **Verify Download Flow**:

✅ **Expected behavior:**

1. After payment, redirected to: `/download?session_id=cs_test_...`
2. Page shows: "Preparing Your Download..."
3. API verifies payment with Stripe
4. Download starts automatically (browser downloads the file)
5. Manual download button appears as fallback

❌ **Common Issues:**

| Issue | Cause | Solution |
|-------|-------|----------|
| "Missing session_id" | Payment Link success URL incorrect | Verify `{CHECKOUT_SESSION_ID}` placeholder in Stripe |
| "Payment not completed" | Session not paid or expired | Use fresh payment link, complete payment |
| "Invalid session_id" | Wrong Stripe API key environment | Check test key matches test payment |
| R2 connection error | Wrong R2 credentials | Verify R2 environment variables |

#### 4. **Verify Link Expiration**:

1. Complete a test purchase
2. On the `/download` page, copy the download URL from browser dev tools (Network tab)
3. Wait 10+ minutes
4. Try to access the URL again
5. **Expected**: R2 returns 403 Forbidden (link expired)

#### 5. **Security Tests**:

❌ **Should FAIL (expected):**

- Accessing `/download` without `session_id`
- Accessing `/api/download-link` without `session_id`
- Reusing an old/expired `session_id`
- Using a valid session_id from an unpaid/cancelled session

✅ **Should SUCCEED:**

- Fresh paid session_id within 10 minutes
- Download completes successfully
- Link expires after 10 minutes

---

## 🔒 Security Notes

1. **Never commit `.env.local`** - Already in `.gitignore`
2. **Use environment variables** - Secrets never exposed to client
3. **Short-lived URLs** - R2 signed URLs expire in 10 minutes
4. **Server-side verification** - All Stripe verification happens server-side
5. **Edge runtime** - API routes run on Cloudflare Edge for security & speed

---

## 🚀 Going Live (Production)

### Before Launch Checklist:

- [ ] Switch to Stripe **Live Mode** API keys
- [ ] Update Payment Link success URL to production domain
- [ ] Set production environment variables in Cloudflare Pages
- [ ] Test with real card (small amount)
- [ ] Verify R2 bucket is **private** (no public access)
- [ ] Set up Stripe webhook for order tracking (optional but recommended)
- [ ] Monitor error logs in Cloudflare Pages dashboard

### Recommended Enhancements:

1. **Product Validation** (see TODO in `app/api/download-link/route.ts`):
   ```typescript
   // Validate specific price/product purchased
   const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);
   const expectedPriceId = process.env.STRIPE_PRICE_ID;
   // Verify purchasedPriceId matches expectedPriceId
   ```

2. **Download Tracking**:
   - Log successful downloads to database
   - Prevent multiple downloads per session (if desired)

3. **Email Receipt**:
   - Send download link via email as backup
   - Use Stripe webhooks + email service

4. **Analytics**:
   - Track conversion rates
   - Monitor failed download attempts

---

## 📞 Support

If you encounter issues:

1. Check environment variables are set correctly
2. Verify Stripe is in correct mode (test vs live)
3. Check Cloudflare Pages build logs
4. Review API error logs in browser console
5. Test R2 credentials with AWS CLI:
   ```bash
   aws s3 ls s3://your-bucket --endpoint-url=https://<account-id>.r2.cloudflarestorage.com
   ```

---

## 📁 File Structure

```
itsmarta-ui-kit/
├── app/
│   ├── api/
│   │   └── download-link/
│   │       └── route.ts          # API endpoint (Stripe verification → R2 URL)
│   └── download/
│       └── page.tsx               # Download page (auto-download UI)
├── lib/
│   ├── stripe.ts                  # Stripe client configuration
│   └── r2.ts                      # R2 client + signed URL generator
├── env.example                    # Environment variables template
└── wrangler.toml                  # Cloudflare Pages configuration
```

---

## 🎉 Success!

Your digital download flow is now set up! Customers can purchase your UI Kit via Stripe and receive instant, secure downloads from Cloudflare R2.

**Test Mode**: Always test thoroughly before going live.
**Production**: Switch to live keys and monitor closely after launch.

