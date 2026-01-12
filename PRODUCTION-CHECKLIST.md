# Production Launch Checklist

Use this checklist before going live with your digital download flow.

## 🔐 Security

- [ ] All secrets stored in environment variables (never in code)
- [ ] `.env.local` is in `.gitignore` (never committed)
- [ ] R2 bucket is **private** (no public access enabled)
- [ ] Stripe webhook signature verification enabled (if using webhooks)
- [ ] HTTPS/SSL enabled on custom domain
- [ ] API routes use edge runtime (`export const runtime = 'edge'`)

## 💳 Stripe Configuration

- [ ] Switched to **Live Mode** (not test mode)
- [ ] Live API keys added to production environment variables
- [ ] Payment Link success URL points to production domain:
  ```
  https://yourdomain.com/download?session_id={CHECKOUT_SESSION_ID}
  ```
- [ ] Test purchase completed successfully with real card (small amount)
- [ ] Pricing is correct
- [ ] Product name and description are accurate
- [ ] Receipt email configured in Stripe

## 📦 Cloudflare R2

- [ ] R2 bucket created in production account
- [ ] Product file uploaded to R2 (verify filename matches `R2_KEY`)
- [ ] R2 API token created with correct permissions (Read & Write)
- [ ] R2 credentials added to Cloudflare Pages environment variables:
  - `R2_ENDPOINT`
  - `R2_ACCESS_KEY`
  - `R2_SECRET_KEY`
  - `R2_BUCKET`
  - `R2_KEY`
- [ ] Test download with production credentials

## 🚀 Deployment

- [ ] Build succeeds locally: `npm run build`
- [ ] No TypeScript errors: `npm run lint`
- [ ] All environment variables set in Cloudflare Pages Dashboard
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active and valid
- [ ] DNS records propagated (check with `dig` or `nslookup`)

## 🧪 Testing

- [ ] **Test 1**: Complete payment flow start to finish
  - Use real card (small amount like $1 test product)
  - Verify redirect to `/download` page
  - Confirm download starts automatically
  - Check file downloads correctly and is not corrupted

- [ ] **Test 2**: Invalid session handling
  - Try accessing `/download` without `session_id` parameter
  - Verify error message displays correctly

- [ ] **Test 3**: Expired session
  - Complete payment
  - Wait 24 hours
  - Try using old `session_id` from URL
  - Verify appropriate error (payment may still work if within Stripe's limits)

- [ ] **Test 4**: Link expiration
  - Complete payment
  - Copy the generated R2 signed URL from browser network tab
  - Wait 10+ minutes
  - Try accessing the URL directly
  - Verify 403 Forbidden error

- [ ] **Test 5**: Multiple browsers
  - Test on Chrome, Safari, Firefox
  - Test on mobile devices (iOS Safari, Android Chrome)

- [ ] **Test 6**: Network issues
  - Test with slow 3G connection
  - Verify loading states display correctly
  - Verify manual download button works

## 📊 Monitoring

- [ ] Cloudflare Pages analytics enabled
- [ ] Error tracking configured (optional: Sentry, LogRocket)
- [ ] Stripe Dashboard notifications enabled:
  - Failed payments
  - Disputes/chargebacks
  - Successful payments
- [ ] Set up alerts for:
  - API route errors (500s)
  - R2 access failures
  - Spike in failed downloads

## 📧 Customer Support

- [ ] Support email address configured
- [ ] FAQ page created (common issues)
- [ ] Download instructions page (optional)
- [ ] Refund policy clearly stated
- [ ] Contact form working

## 🎯 Optional Enhancements

- [ ] Product validation added (verify correct product purchased)
  - See TODO in `app/api/download-link/route.ts`
  - Add `STRIPE_PRICE_ID` to environment variables
  - Uncomment validation code

- [ ] Email delivery of download link (backup)
  - Set up Stripe webhook
  - Send email with download link via SendGrid/Resend

- [ ] Download tracking
  - Log successful downloads
  - Prevent duplicate downloads (if desired)
  - Analytics on download completion rate

- [ ] Rate limiting
  - Prevent abuse of download endpoint
  - Cloudflare automatically provides DDoS protection

## 🔄 Post-Launch

- [ ] Monitor first 10 transactions closely
- [ ] Check error rates in Cloudflare Pages dashboard
- [ ] Review customer feedback
- [ ] Document any issues and solutions
- [ ] Set up automated backups for R2 bucket

## 🆘 Emergency Procedures

### If Download Link Generation Fails:
1. Check Cloudflare Pages function logs
2. Verify environment variables are set correctly
3. Test R2 connection manually with AWS CLI
4. Verify Stripe API key is valid and not rate-limited

### If Customers Can't Download:
1. Check R2 bucket is accessible
2. Verify signed URL generation is working
3. Check browser console for CORS errors
4. Verify download URL hasn't expired (10 min limit)

### If Fraudulent Purchases Detected:
1. Stripe Dashboard → Radar → Review transactions
2. Refund via Stripe Dashboard
3. Block customer if needed
4. Consider adding more verification steps

## 📞 Support Contacts

- **Stripe Support**: https://support.stripe.com
- **Cloudflare Support**: https://support.cloudflare.com
- **Your Hosting**: [Add your contact]

## ✅ Final Launch Checklist

Right before going live:

- [ ] All tests passed
- [ ] Environment variables verified
- [ ] Custom domain working
- [ ] SSL certificate active
- [ ] First test purchase completed successfully
- [ ] Support email working
- [ ] Monitoring/analytics active
- [ ] Team briefed on support procedures

## 🎉 Launch Day

- [ ] Announce launch
- [ ] Monitor error logs closely (first 24 hours)
- [ ] Be available for customer support
- [ ] Track first few sales carefully
- [ ] Celebrate! 🎊

---

## 📝 Notes

Use this space to track any custom configurations or important details specific to your setup:

```
[Add your notes here]
```

---

**Last Updated**: [Date]
**Reviewed By**: [Name]
**Next Review**: [Date]

