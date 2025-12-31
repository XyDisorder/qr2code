# Security Measures

## Environment Variables

All sensitive configuration should be stored in environment variables, not hardcoded in the source code.

### Required Environment Variables

Create a `.env.local` file in the root directory with:

```env
VITE_GOOGLE_ANALYTICS_ID=G-R9XD0D5HV0
VITE_SITE_URL=https://qr2code.fr
```

**Important:** Never commit `.env.local` to version control. It's already in `.gitignore`.

## Security Features Implemented

### 1. Input Validation & Sanitization
- All user inputs are sanitized to prevent XSS attacks
- URL validation ensures only valid HTTP/HTTPS URLs are accepted
- Image URL validation checks for valid image extensions
- Maximum length limits on all text inputs

### 2. XSS Protection
- HTML sanitization for SVG content
- Removal of dangerous HTML tags (`<script>`, `<iframe>`, etc.)
- Removal of event handlers (`onclick`, `onerror`, etc.)
- Sanitization of `dangerouslySetInnerHTML` content

### 3. Content Security Policy (CSP)
- Strict CSP headers configured in `netlify.toml`
- Only allows scripts from trusted sources (self, Google Analytics)
- Prevents inline scripts and eval()
- Restricts image sources to prevent data exfiltration

### 4. Security Headers
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
- `Strict-Transport-Security` - Forces HTTPS

### 5. CORS Protection
- Images loaded with `crossOrigin="anonymous"` for proper CORS handling
- URL validation prevents loading from untrusted sources

### 6. Privacy (Google Analytics)
- IP anonymization enabled
- Google signals disabled
- Ad personalization disabled

## Security Checklist

- ✅ No secrets hardcoded in source code
- ✅ Environment variables used for sensitive data
- ✅ Input validation on all user inputs
- ✅ XSS protection with HTML sanitization
- ✅ CSP headers configured
- ✅ Security headers set
- ✅ URL validation implemented
- ✅ CORS protection enabled
- ✅ Privacy-focused Google Analytics configuration

## Reporting Security Issues

If you discover a security vulnerability, please email xydisorder@gmail.com instead of using the issue tracker.

