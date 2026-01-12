# Getting Started with Digital Downloads

Welcome! This guide will get you up and running with the UI Kit download flow in **under 10 minutes**.

## 🎯 What You're Building

A complete e-commerce flow where customers:
1. Click your Stripe payment link
2. Pay for the UI Kit
3. Get instantly redirected to download the file
4. File is securely delivered from Cloudflare R2

**No authentication, no servers to maintain, scales automatically.**

---

## 🚦 Step-by-Step Setup

### 1️⃣ Install Dependencies (2 minutes)

```bash
cd /Users/marta/Code/itsmarta-ui-kit
npm install
```

This installs:
- `stripe` - Payment processing
- `@aws-sdk/client-s3` - R2 storage client
- `@aws-sdk/s3-request-presigner` - Signed URL generation

---

### 2️⃣ Get Your Stripe API Key (2 minutes)

1. Go to: https://dashboard.stripe.com/test/apikeys
2. Copy your **Secret key** (starts with `sk_test_`)
3. Keep this tab open - you'll need it soon

**💡 Tip**: Use test mode for setup, switch to live mode when ready to launch

---

### 3️⃣ Set Up Cloudflare R2 (3 minutes)

#### Create R2 Bucket:
1. Go to: https://dash.cloudflare.com → R2
2. Click "Create bucket"
3. Name it: `ui-kit-downloads` (or your choice)
4. Keep it **private** (no public access)

#### Upload Your Product File:
1. Open your new bucket
2. Click "Upload"
3. Upload your file: `ui-kit-ver1.zip` (or rename it)
4. Note the exact filename - you'll need it

#### Create API Token:
1. Click "Manage R2 API Tokens" (top right)
2. Click "Create API Token"
3. Permissions: **Read & Write**
4. Click "Create API Token"
5. **IMPORTANT**: Copy these values (you'll only see them once):
   - Access Key ID
   - Secret Access Key
   - Endpoint URL

---

### 4️⃣ Configure Environment Variables (2 minutes)

```bash
# Copy the example file
cp env.example .env.local
```

Edit `.env.local` with your actual values:

```bash
# Stripe (from Step 2)
STRIPE_SECRET_KEY=sk_test_YOUR_ACTUAL_KEY_HERE

# R2 (from Step 3)
R2_ENDPOINT=https://1a531e9424d86cf3777881db10396824.r2.cloudflarestorage.com
R2_ACCESS_KEY=469fd64d6098adc8111b868b512c8774
R2_SECRET_KEY=8f3ae97d6b05242d8cdd52d810ca922af19575dc413102603ec4b047b695a520
R2_BUCKET=ui-kit-downloads
R2_KEY=QUICK-START-DOWNLOADS.md
```

**⚠️ Security**: Never commit `.env.local` to Git (it's already in `.gitignore`)

---

### 5️⃣ Test Locally (1 minute)

```bash
npm run dev
```

Open: http://localhost:3000

**Server should start successfully!** ✅

---

### 6️⃣ Create Stripe Payment Link (2 minutes)

1. Go to: https://dashboard.stripe.com/test/products
2. Click "Add product"
3. Fill in:
   - Name: "UI Kit Ver 1"
   - Description: "Premium Tailwind CSS UI Components"
   - Pricing: One-time payment
   - Amount: $49 (or your price)
4. Click "Save product"
5. Click "Create payment link"
6. **CRITICAL**: Set Success URL to:
   ```
   http://localhost:3000/download?session_id={CHECKOUT_SESSION_ID}
   ```
7. Click "Create link"
8. Copy the payment link URL

---

### 7️⃣ Test the Complete Flow (2 minutes)

1. **Open your payment link** (from Step 6)
2. **Use Stripe test card**:
   - Card: `4242 4242 4242 4242`
   - Expiry: `12/34` (any future date)
   - CVC: `123` (any 3 digits)
   - ZIP: `12345` (any 5 digits)
3. **Complete payment**
4. **You should be redirected** to: http://localhost:3000/download
5. **Page should show**: "Preparing your download..."
6. **File should download automatically!** 🎉

---

## ✅ Success Checklist

If everything worked, you should see:
- ✅ Payment completed in Stripe
- ✅ Redirected to `/download` page
- ✅ "Preparing your download..." message
- ✅ File started downloading automatically
- ✅ Manual download button appeared as fallback

---

## ❌ Troubleshooting

### "Missing session_id parameter"
**Fix**: Check your Stripe payment link success URL has `{CHECKOUT_SESSION_ID}` placeholder

### "Payment not completed"
**Fix**: Complete a fresh payment - don't reuse old checkout sessions

### "STRIPE_SECRET_KEY is not defined"
**Fix**: Make sure `.env.local` exists and has your Stripe key

### "R2_ENDPOINT is not defined"
**Fix**: Add all R2 credentials to `.env.local`

### Download doesn't start
**Fix**: Check browser console (F12) for errors

---

## 🚀 Next Steps

### Ready to Go Live?

1. **Switch to Stripe Live Mode**:
   - Get live API key: https://dashboard.stripe.com/apikeys
   - Update `.env.local` with live key (`sk_live_...`)

2. **Update Payment Link**:
   - Create new payment link with production URL
   - Success URL: `https://yourdomain.com/download?session_id={CHECKOUT_SESSION_ID}`

3. **Deploy to Cloudflare Pages**:
   - See: `CLOUDFLARE-DEPLOYMENT.md`
   - Add environment variables in Cloudflare dashboard

4. **Launch Checklist**:
   - See: `PRODUCTION-CHECKLIST.md`

---

## 📚 Documentation

Now that you're set up, explore the detailed docs:

| Document | Purpose |
|----------|---------|
| `QUICK-START-DOWNLOADS.md` | Fast reference guide |
| `DOWNLOAD-FLOW-SETUP.md` | Complete setup & testing |
| `CLOUDFLARE-DEPLOYMENT.md` | Deployment instructions |
| `PRODUCTION-CHECKLIST.md` | Pre-launch checklist |
| `IMPLEMENTATION-SUMMARY.md` | Technical overview |

---

## 🎉 You're Done!

Your digital download flow is working! You can now:

- ✅ Accept payments via Stripe
- ✅ Deliver instant downloads
- ✅ Store files securely in R2
- ✅ Scale automatically

**Total setup time**: ~10 minutes  
**Cost**: Nearly free (R2 free tier + Stripe fees)  
**Maintenance**: Zero (serverless)

---

## 💡 Pro Tips

1. **Test thoroughly** before going live (use test mode)
2. **Monitor your first 10 sales** closely
3. **Set up email delivery** as backup (see docs)
4. **Add product validation** (see TODO in code)
5. **Use live chat** for customer support during launch

---

## 📞 Need Help?

- **Stripe Issues**: Check `DOWNLOAD-FLOW-SETUP.md` → Troubleshooting
- **R2 Issues**: Verify credentials in Cloudflare dashboard
- **Deployment Issues**: See `CLOUDFLARE-DEPLOYMENT.md`
- **Code Issues**: Check browser console and terminal logs

---

## 🎊 Congratulations!

You've successfully set up a production-grade digital download system!

**What's next?**
- Deploy to production
- Launch your product
- Start making sales! 💰

Happy selling! 🚀

---

**Last Updated**: 2026-01-12  
**Framework**: Next.js 15 + Cloudflare Pages  
**Support**: See documentation files for detailed help

