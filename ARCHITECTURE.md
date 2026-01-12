# Architecture & Data Flow

This document explains the technical architecture and data flow of the digital download system.

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CLOUDFLARE EDGE NETWORK                      │
│                                                                       │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │                    Cloudflare Pages                         │    │
│  │                                                              │    │
│  │  ┌─────────────────┐         ┌──────────────────────┐     │    │
│  │  │  /download      │         │  /api/download-link  │     │    │
│  │  │  (Client Page)  │────────▶│  (API Route)         │     │    │
│  │  │                 │  Fetch  │  [Edge Runtime]      │     │    │
│  │  │  - Shows UI     │         │                      │     │    │
│  │  │  - Handles UX   │         │  - Validates payment │     │    │
│  │  │  - Auto-download│         │  - Generates URL     │     │    │
│  │  └─────────────────┘         └──────┬───────────────┘     │    │
│  │                                      │                      │    │
│  └──────────────────────────────────────┼──────────────────────┘    │
│                                         │                            │
└─────────────────────────────────────────┼────────────────────────────┘
                                          │
                    ┌─────────────────────┼─────────────────────┐
                    │                     │                     │
                    ▼                     ▼                     ▼
         ┌──────────────────┐  ┌──────────────────┐  ┌─────────────────┐
         │   Stripe API     │  │  Cloudflare R2   │  │   Customer      │
         │                  │  │                  │  │   Browser       │
         │ - Verify session │  │ - Store files    │  │                 │
         │ - Check payment  │  │ - Sign URLs      │  │ - Download file │
         └──────────────────┘  └──────────────────┘  └─────────────────┘
```

## 🔄 Complete Data Flow

### Step-by-Step Process

```
1. CUSTOMER INITIATES PURCHASE
   ┌──────────┐
   │ Customer │ Clicks Stripe Payment Link
   └────┬─────┘
        │
        ↓
   ┌──────────────────┐
   │ Stripe Checkout  │ Hosted by Stripe
   │ (stripe.com)     │ Customer enters card details
   └────┬─────────────┘
        │
        ↓ Payment processed
        │
        
2. STRIPE REDIRECTS TO SUCCESS URL
        │
        ↓
   https://yourdomain.com/download?session_id=cs_test_abc123
        │
        ↓
   ┌──────────────────┐
   │ /download Page   │ Next.js page component
   │ (Client-side)    │ Reads searchParams
   └────┬─────────────┘
        │
        │ useEffect runs
        ↓
        
3. DOWNLOAD PAGE FETCHES SIGNED URL
        │
        ↓ fetch('/api/download-link?session_id=cs_test_abc123')
        │
   ┌────▼────────────────────┐
   │ /api/download-link      │
   │ Route Handler           │
   │                         │
   │ 1. Extract session_id   │
   │ 2. Validate not empty   │
   └────┬────────────────────┘
        │
        ↓
        
4. API VERIFIES WITH STRIPE
        │
        ↓ stripe.checkout.sessions.retrieve(sessionId)
        │
   ┌────▼───────────────────┐
   │ Stripe API             │
   │                        │
   │ Returns session data:  │
   │ - payment_status       │
   │ - mode                 │
   │ - customer info        │
   └────┬───────────────────┘
        │
        ↓ session data
        │
   ┌────▼────────────────────┐
   │ Validation Logic        │
   │                         │
   │ ✓ payment_status=paid?  │
   │ ✓ mode=payment?         │
   │ ✗ subscription/setup?   │
   └────┬────────────────────┘
        │
        ↓ Valid ✓
        
5. API GENERATES SIGNED R2 URL
        │
        ↓ createSignedDownloadUrl('ui-kit-ver1.zip', 600)
        │
   ┌────▼────────────────────┐
   │ R2 Client               │
   │ (@aws-sdk/client-s3)    │
   │                         │
   │ 1. Create GetObject cmd │
   │ 2. Sign with credentials│
   │ 3. Set expiry: 10min    │
   └────┬────────────────────┘
        │
        ↓ signed URL
        │
   ┌────▼────────────────────┐
   │ API Response            │
   │                         │
   │ { url: "https://..." }  │
   └────┬────────────────────┘
        │
        ↓ JSON response
        
6. CLIENT INITIATES DOWNLOAD
        │
        ↓ Response received
        │
   ┌────▼──────────────────┐
   │ /download Page        │
   │                       │
   │ 1. Set state=success  │
   │ 2. Store URL          │
   │ 3. Show UI            │
   │ 4. window.location    │
   └────┬──────────────────┘
        │
        ↓ Browser navigates to signed URL
        │
   ┌────▼──────────────────┐
   │ Cloudflare R2         │
   │                       │
   │ 1. Verify signature   │
   │ 2. Check expiry       │
   │ 3. Stream file        │
   └────┬──────────────────┘
        │
        ↓ File download
        │
   ┌────▼──────────────────┐
   │ Customer Browser      │
   │                       │
   │ ✓ File downloads      │
   │ ✓ Save to disk        │
   └───────────────────────┘
```

## 🔐 Security Flow

### Authentication Chain

```
Customer Payment
      ↓
Stripe Session ID
      ↓
[Validate with Stripe API]
      ↓
Payment Confirmed
      ↓
[Generate signed URL]
      ↓
Time-limited Access
      ↓
File Download
      ↓
URL Expires (10 min)
```

### Security Layers

1. **Stripe Verification**
   - Session ID validated with Stripe API
   - Payment status checked server-side
   - No client-side payment validation

2. **Server-Side Only**
   - All secrets in environment variables
   - No secrets exposed to client
   - Edge runtime for security

3. **Time-Limited URLs**
   - Signed URLs expire in 10 minutes
   - Cannot be extended or renewed without new payment
   - HMAC signature validation by R2

4. **Private Storage**
   - R2 bucket has no public access
   - Files only accessible via signed URLs
   - No directory listing enabled

## 📊 Component Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│                                                              │
│  app/download/page.tsx (Client Component)                   │
│  ┌────────────────────────────────────────────────┐        │
│  │ State Management                                │        │
│  │ - loading/success/error                         │        │
│  │ - downloadUrl                                   │        │
│  │ - errorMessage                                  │        │
│  └────────────────────────────────────────────────┘        │
│                                                              │
│  ┌────────────────────────────────────────────────┐        │
│  │ UI Components                                   │        │
│  │ - Loading spinner                               │        │
│  │ - Success message + button                      │        │
│  │ - Error message + retry                         │        │
│  └────────────────────────────────────────────────┘        │
│                                                              │
│  ┌────────────────────────────────────────────────┐        │
│  │ Effects                                         │        │
│  │ - useEffect: fetch on mount                     │        │
│  │ - Auto-download via window.location             │        │
│  └────────────────────────────────────────────────┘        │
└──────────────────┬───────────────────────────────────────────┘
                   │
                   │ HTTP GET
                   ↓
┌─────────────────────────────────────────────────────────────┐
│                        BACKEND                               │
│                                                              │
│  app/api/download-link/route.ts (API Route)                │
│  ┌────────────────────────────────────────────────┐        │
│  │ Request Handler (GET)                           │        │
│  │ 1. Parse query params                           │        │
│  │ 2. Validate session_id                          │        │
│  │ 3. Call Stripe API                              │        │
│  │ 4. Validate payment                             │        │
│  │ 5. Generate R2 URL                              │        │
│  │ 6. Return JSON                                  │        │
│  └────────────────────────────────────────────────┘        │
│                                                              │
│  ┌────────────────────────────────────────────────┐        │
│  │ Error Handling                                  │        │
│  │ - 400: Missing params                           │        │
│  │ - 403: Invalid/unpaid                           │        │
│  │ - 500: Server error                             │        │
│  └────────────────────────────────────────────────┘        │
│                                                              │
│  runtime: 'edge' (Cloudflare Edge Runtime)                 │
└──────────────────┬──────────────────┬────────────────────────┘
                   │                  │
          ┌────────┘                  └────────┐
          │                                    │
          ↓                                    ↓
┌──────────────────────┐          ┌─────────────────────┐
│   STRIPE CLIENT      │          │   R2 CLIENT         │
│   (lib/stripe.ts)    │          │   (lib/r2.ts)       │
│                      │          │                     │
│ - API key config     │          │ - S3Client setup    │
│ - API version        │          │ - Credentials       │
│ - TypeScript types   │          │ - Sign URLs         │
└──────────────────────┘          └─────────────────────┘
```

## 🌐 Network Flow

### Request/Response Lifecycle

```
Browser                  Edge Function               External APIs
   │                          │                          │
   │  1. GET /download        │                          │
   │  ?session_id=cs_...      │                          │
   │─────────────────────────▶│                          │
   │                          │                          │
   │  2. Page HTML            │                          │
   │◀─────────────────────────│                          │
   │                          │                          │
   │  3. Execute React        │                          │
   │     useEffect            │                          │
   │                          │                          │
   │  4. GET /api/download-link                          │
   │     ?session_id=cs_...   │                          │
   │─────────────────────────▶│                          │
   │                          │                          │
   │                          │  5. Retrieve session     │
   │                          │─────────────────────────▶│
   │                          │     (Stripe API)         │
   │                          │                          │
   │                          │  6. Session data         │
   │                          │◀─────────────────────────│
   │                          │     {payment_status:...} │
   │                          │                          │
   │                          │  7. Generate signed URL  │
   │                          │─────────────────────────▶│
   │                          │     (R2 presigner)       │
   │                          │                          │
   │                          │  8. Signed URL           │
   │                          │◀─────────────────────────│
   │                          │                          │
   │  9. JSON {url: "..."}    │                          │
   │◀─────────────────────────│                          │
   │                          │                          │
   │  10. Redirect to signed URL                         │
   │────────────────────────────────────────────────────▶│
   │                              (R2 bucket)            │
   │                                                     │
   │  11. File stream                                    │
   │◀────────────────────────────────────────────────────│
   │                                                     │
   │  12. Download complete   │                          │
   │                          │                          │
```

## 💾 Data Models

### Stripe Session (Relevant Fields)

```typescript
{
  id: "cs_test_abc123...",
  payment_status: "paid" | "unpaid" | "no_payment_required",
  mode: "payment" | "subscription" | "setup",
  customer: "cus_...",
  amount_total: 4900,
  currency: "usd",
  created: 1673500000,
  expires_at: 1673586400
}
```

### API Response

```typescript
// Success (200)
{
  url: "https://<account>.r2.cloudflarestorage.com/ui-kit-ver1.zip?X-Amz-..."
}

// Error (400, 403, 500)
{
  error: "Payment not completed"
}
```

### R2 Signed URL Structure

```
https://<account>.r2.cloudflarestorage.com/<object-key>
  ?X-Amz-Algorithm=AWS4-HMAC-SHA256
  &X-Amz-Credential=<access-key>/20260112/auto/s3/aws4_request
  &X-Amz-Date=20260112T120000Z
  &X-Amz-Expires=600
  &X-Amz-SignedHeaders=host
  &X-Amz-Signature=<signature-hash>
```

## 🔧 Environment Configuration

### Runtime: Cloudflare Workers (Edge)

- **Language**: JavaScript (compiled from TypeScript)
- **Memory**: 128MB
- **CPU**: 50ms CPU time limit
- **Timeout**: 30 seconds
- **Concurrency**: Unlimited (auto-scales)

### Dependencies

```json
{
  "stripe": "^17.5.0",              // ~500KB
  "@aws-sdk/client-s3": "^3.709.0",  // ~300KB
  "@aws-sdk/s3-request-presigner": "^3.709.0" // ~50KB
}
```

### Build Output

```
.vercel/output/static/
├── _next/
│   ├── static/
│   └── ...
├── api/
│   └── download-link/
│       └── route.func/  (Edge function)
└── download/
    └── index.html       (Prerendered page)
```

## 📈 Performance Metrics

### Typical Response Times

| Operation | Time | Notes |
|-----------|------|-------|
| Page load | 100-300ms | Initial HTML delivery |
| API call | 200-500ms | Includes Stripe + R2 |
| Stripe verify | 100-200ms | API call to Stripe |
| R2 presign | 10-50ms | Local computation |
| Download start | <1s | After API response |
| Total (payment→download) | 2-5s | Full user journey |

### Scalability

- **Concurrent users**: Unlimited (edge auto-scales)
- **Files/month**: Unlimited (R2 scales)
- **Bandwidth**: Unlimited (no egress fees)
- **Cold start**: 200-500ms (edge function)
- **Warm requests**: 50-150ms (edge function)

## 🎯 Error Handling

### Error Flow

```
Error Occurs
     ↓
[Catch in try/catch]
     ↓
[Log to console]
     ↓
[Return appropriate HTTP status]
     ↓
[Client displays error message]
     ↓
[User sees fallback UI]
```

### Error States

1. **Client-side errors**
   - Network timeout
   - JSON parse error
   - Missing session_id

2. **Server-side errors**
   - Stripe API failure
   - R2 connection error
   - Invalid credentials

3. **Business logic errors**
   - Unpaid session
   - Expired session
   - Wrong product

## 🔄 State Management

### Client State (React)

```typescript
type DownloadState = 'loading' | 'success' | 'error';

useState<DownloadState>('loading')
useState<string | null>(null)  // downloadUrl
useState<string>('')            // errorMessage
```

### State Transitions

```
Initial State: loading
     │
     ├─→ Success: API returns URL
     │        ↓
     │   State: success
     │   downloadUrl: set
     │   Auto-download: triggered
     │
     └─→ Error: API fails
              ↓
         State: error
         errorMessage: set
         Retry UI: shown
```

## 📝 Summary

This architecture provides:

- ✅ **Scalability**: Edge functions auto-scale globally
- ✅ **Security**: Server-side validation, private storage
- ✅ **Performance**: <5s from payment to download
- ✅ **Reliability**: Cloudflare's 99.99% uptime SLA
- ✅ **Cost-Effective**: Pay only for storage + requests
- ✅ **Developer-Friendly**: TypeScript, clean separation of concerns

**Result**: Production-grade e-commerce download system with zero servers to manage.

---

**Last Updated**: 2026-01-12  
**Architecture Version**: 1.0  
**Compatible With**: Next.js 15, Cloudflare Pages, Stripe API 2024-12-18

