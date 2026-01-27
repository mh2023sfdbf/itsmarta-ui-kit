# Iframe Preview Loading - Critical Implementation Guide

## 🚨 **PROBLEM: Blank Previews on First Load**

### **Symptoms:**
- Templates preview area appears blank/white on first page load
- User must refresh the page to see previews
- Only happens on fresh browser sessions or hard refreshes
- Works fine after first load (cached)

---

## 🔍 **ROOT CAUSE**

When rendering React components inside an isolated iframe:

1. **Styles must be copied** from parent document to iframe
2. **External stylesheets** (fonts, Tailwind CDN) take time to load
3. **Fonts** must be downloaded and ready
4. **React rendering** happens asynchronously
5. If iframe becomes visible **before** styles are ready → blank/broken preview

---

## ✅ **SOLUTION: Multi-Stage Loading Strategy**

### **Location:** `components/showcase/IframePreview.tsx`

### **Key Implementation (Lines ~174-220):**

```typescript
// CRITICAL: Wait for ALL these conditions before showing iframe

Promise.all([
  // 1. External stylesheets (Google Fonts, etc.)
  ...stylesheetPromises,
  
  // 2. Iframe document fully loaded
  documentReadyPromise,
  
  // 3. Fonts downloaded and ready
  fontsReadyPromise
  
]).then(() => {
  // 4. Buffer delay (150ms) for style computation
  setTimeout(() => setIsReady(true), 150);
});
```

### **Why Each Step Matters:**

1. **Stylesheet Promises** - Ensures Google Fonts links are loaded
   - Without this: fonts not available → wrong font rendering
   
2. **Document Ready** - Ensures iframe DOM is complete
   - Without this: elements might not exist yet
   
3. **Fonts Ready** - Ensures font files downloaded
   - Without this: text renders in fallback font, then shifts
   
4. **Buffer Delay (150ms)** - Critical!
   - Browser needs time to **compute styles** after fonts load
   - Without this: styles might not be applied yet

---

## ⚠️ **COMMON MISTAKES TO AVOID**

### ❌ **DON'T: Simple timeout**
```typescript
setTimeout(() => setIsReady(true), 100); // TOO FRAGILE!
```
**Problem:** Works sometimes, fails on slow connections

### ❌ **DON'T: Only wait for iframe load**
```typescript
iframe.addEventListener('load', () => setIsReady(true));
```
**Problem:** Load event fires before fonts are ready

### ❌ **DON'T: Only wait for fonts.ready**
```typescript
iframeDoc.fonts.ready.then(() => setIsReady(true));
```
**Problem:** Fonts.ready can resolve before external stylesheets load

### ✅ **DO: Wait for EVERYTHING + buffer**
```typescript
Promise.all([stylesheets, document, fonts])
  .then(() => setTimeout(..., 150));
```

---

## 🔧 **TIMEOUT VALUES**

| Purpose | Timeout | Reason |
|---------|---------|--------|
| Stylesheet load | 2000ms | Slow connections |
| Document ready | 3000ms | Large components |
| Fonts ready | 2000ms | Font file download |
| **Final buffer** | **150ms** | **Style computation** ⭐ |
| Fallback | 500ms | Safety net |

**The 150ms buffer is CRITICAL** - this is the minimum time browsers need to compute final styles after all resources load.

---

## 🧪 **HOW TO TEST**

### **Test Scenario 1: Fresh Load**
1. Open incognito/private window
2. Clear cache
3. Navigate to homepage
4. Check if previews appear **immediately**
5. ✅ Should see previews without refresh

### **Test Scenario 2: Slow Connection**
1. Open DevTools → Network tab
2. Set throttling to "Slow 3G"
3. Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
4. ✅ Previews should still appear (just slower)

### **Test Scenario 3: Font Loading**
1. Block Google Fonts temporarily
2. ✅ Should fall back after 2s timeout and show preview

---

## 📝 **DEPENDENCIES TO WATCH**

If you update any of these, **retest preview loading**:

- `components/showcase/IframePreview.tsx` - Main loading logic
- `components/showcase/TemplatePreview.tsx` - Viewport controls
- Font imports in iframe head
- External stylesheet URLs (Google Fonts)
- Tailwind CSS updates

---

## 🎯 **useEffect DEPENDENCIES**

**CRITICAL:** The loading useEffect must include:

```typescript
useEffect(() => {
  // ... loading logic ...
}, [project, fixedViewport, width]); // ← ALL viewport props!
```

**Why:**
- `width` changes when switching mobile/tablet/desktop
- Without it, iframe won't reload with new viewport
- **Symptoms if missing:** Responsive breakpoints don't work

---

## 🚀 **PERFORMANCE NOTES**

- Total delay: ~150-500ms (acceptable for UX)
- Caching helps: second load is instant
- Consider preloading fonts in main app
- Iframe isolation required for style isolation

---

## 📚 **RELATED ISSUES**

- **Issue #1:** Responsive breakpoints not working
  - **Fix:** Add `width` to useEffect dependencies
  - **Commit:** `093cb42`

- **Issue #2:** Blank previews on first load
  - **Fix:** Comprehensive Promise.all loading strategy
  - **Commit:** Previous fix

- **Issue #3:** Testimonial cards wrong width on tablet
  - **Fix:** Viewport meta tag must use actual width, not device-width
  - **Commit:** `d352e74`

---

## 🎓 **KEY LEARNINGS**

1. **Iframe rendering is async** - never assume instant readiness
2. **Fonts load separately** from stylesheets
3. **Style computation takes time** after resources load
4. **Always test in incognito** - caching hides issues
5. **150ms buffer is magic number** - browsers need it

---

## 🔮 **FUTURE IMPROVEMENTS**

- [ ] Preload Google Fonts in main document
- [ ] Consider font-display: swap for faster initial render
- [ ] Add loading spinner instead of opacity:0
- [ ] Implement progressive enhancement (show basic styles first)

---

**Last Updated:** January 2026  
**Maintainer:** Senior Dev Team  
**Priority:** CRITICAL - affects first impressions

---

## 💡 **QUICK CHECKLIST**

Before deploying preview changes:

- [ ] Wait for external stylesheets
- [ ] Wait for document ready
- [ ] Wait for fonts ready
- [ ] Add 150ms buffer delay
- [ ] Include fallback timeout
- [ ] Test in incognito mode
- [ ] Test with slow 3G
- [ ] Verify viewport switching works
- [ ] Check all breakpoints (mobile/tablet/desktop)

**Remember:** If previews don't load on first visit, users bounce! 🎯
