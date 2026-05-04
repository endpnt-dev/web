import {
  Camera,
  QrCode,
  Link,
  Image,
  ShieldCheck,
  Barcode,
  KeyRound,
  Palette,
  FileText,
  type LucideIcon
} from "lucide-react";

export interface API {
  name: string;
  slug: string;
  url: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: LucideIcon;
  color: string;
  codeExample: {
    title: string;
    code: string;
    language: string;
  };
}

export const APIS: API[] = [
  {
    name: "Screenshot API",
    slug: "screenshot",
    url: "https://screenshot.endpnt.dev",
    description: "Capture any webpage as an image",
    longDescription: "Send a URL, get back a pixel-perfect screenshot. Supports full-page capture, device emulation, dark mode, element targeting, and multiple output formats.",
    features: ["Full-page capture", "Device emulation", "Dark mode", "CSS selector targeting", "PNG/JPEG/WebP/PDF"],
    icon: Camera,
    color: "#0F6E56",
    codeExample: {
      title: "Capture a screenshot",
      code: `curl -X POST "https://screenshot.endpnt.dev/api/v1/capture" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com",
    "fullPage": true,
    "format": "png"
  }'`,
      language: "bash"
    }
  },
  {
    name: "QR Code API",
    slug: "qr",
    url: "https://qr.endpnt.dev",
    description: "Generate styled QR codes instantly",
    longDescription: "Create QR codes with custom colors, embedded logos, configurable error correction, and multiple output formats. Perfect for marketing materials, tickets, and product packaging.",
    features: ["Custom colors", "Logo embedding", "SVG output", "Error correction levels", "Bulk generation"],
    icon: QrCode,
    color: "#534AB7",
    codeExample: {
      title: "Generate a QR code",
      code: `curl -X POST "https://qr.endpnt.dev/api/v1/generate" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "https://endpnt.dev",
    "foregroundColor": "#000000",
    "backgroundColor": "#FFFFFF",
    "format": "svg"
  }'`,
      language: "bash"
    }
  },
  {
    name: "URL Preview API",
    slug: "preview",
    url: "https://preview.endpnt.dev",
    description: "Extract rich link previews from any URL",
    longDescription: "Fetch Open Graph tags, Twitter Cards, favicons, titles, and descriptions from any URL. Build link previews like Slack, Discord, and iMessage.",
    features: ["OG tag extraction", "Twitter Cards", "Favicon detection", "Redirect following", "< 500ms response"],
    icon: Link,
    color: "#D85A30",
    codeExample: {
      title: "Get URL metadata",
      code: `curl -X POST "https://preview.endpnt.dev/api/v1/unfurl" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://github.com/vercel/next.js"
  }'`,
      language: "bash"
    }
  },
  {
    name: "Image Conversion API",
    slug: "convert",
    url: "https://convert.endpnt.dev",
    description: "Convert, resize, and optimize images",
    longDescription: "Upload an image or provide a URL. Convert between formats, resize with smart cropping, compress for web, add watermarks, and strip metadata. Powered by Sharp.",
    features: ["Format conversion", "Smart resize", "Compression", "Watermarking", "Metadata stripping"],
    icon: Image,
    color: "#1D9E75",
    codeExample: {
      title: "Convert and resize image",
      code: `curl -X POST "https://convert.endpnt.dev/api/v1/convert" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/image.jpg",
    "format": "webp",
    "width": 800,
    "quality": 80
  }'`,
      language: "bash"
    }
  },
  {
    name: "Validation API",
    slug: "validate",
    url: "https://validate.endpnt.dev",
    description: "Verify emails, phones, and domains",
    longDescription: "Validate email addresses with MX record checks, detect disposable domains, verify phone number formats, and check domain DNS health. Batch support for up to 50 items.",
    features: ["Email validation", "Phone formatting", "Domain DNS checks", "Disposable detection", "Batch processing"],
    icon: ShieldCheck,
    color: "#378ADD",
    codeExample: {
      title: "Validate an email",
      code: `curl -X POST "https://validate.endpnt.dev/api/v1/validate/email" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "checkMx": true,
    "checkDisposable": true
  }'`,
      language: "bash"
    }
  },
  {
    name: "Barcode API",
    slug: "barcode",
    url: "https://barcode.endpnt.dev",
    description: "Generate and decode 1D barcodes in 9 formats",
    longDescription: "Generate print-ready barcode images or decode barcodes from uploaded images and URLs. Supports Code128, EAN-13, EAN-8, UPC-A, UPC-E, Code39, ITF, Codabar, and MSI. Output as PNG, SVG, or PDF with custom colors and dimensions.",
    features: ["9 barcode formats", "PNG/SVG/PDF output", "Custom colors & dimensions", "Decode from image/URL", "Format validation"],
    icon: Barcode,
    color: "#B45309",
    codeExample: {
      title: "Generate a barcode",
      code: `curl -X POST "https://barcode.endpnt.dev/api/v1/generate" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "data": "012345678905",
    "format": "ean13",
    "output_format": "svg"
  }'`,
      language: "bash"
    }
  },
  {
    name: "Cipher API",
    slug: "cipher",
    url: "https://cipher.endpnt.dev",
    description: "Cryptographic primitives and JWT operations",
    longDescription: "Hash data with SHA-256/SHA-512/MD5, compute and verify HMACs, sign and verify JWTs, hash and verify passwords with bcrypt, encode/decode base64 and hex, and generate cryptographically secure random strings and UUIDs.",
    features: ["SHA/MD5/SHA3 hashing", "HMAC compute & verify", "JWT sign/verify/decode", "bcrypt password hashing", "Secure random & UUID"],
    icon: KeyRound,
    color: "#0E7490",
    codeExample: {
      title: "Hash a string",
      code: `curl -X POST "https://cipher.endpnt.dev/api/v1/hash" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "data": "hello world",
    "algorithm": "sha256"
  }'`,
      language: "bash"
    }
  },
  {
    name: "Color API",
    slug: "color",
    url: "https://color.endpnt.dev",
    description: "Color conversion, contrast checking, and palette generation",
    longDescription: "Convert colors between hex, RGB, HSL, HSV, CMYK, and LAB. Check WCAG and APCA contrast ratios with accessibility ratings, generate harmonic color schemes, and algorithmically generate palettes from a single seed color using tints, shades, tones, or monochromatic algorithms.",
    features: ["6-format color conversion", "WCAG/APCA contrast check", "Harmonic scheme generation", "Algorithmic palette from seed color", "Color-blindness simulation"],
    icon: Palette,
    color: "#7C3AED",
    codeExample: {
      title: "Generate a color palette",
      code: `curl -X POST "https://color.endpnt.dev/api/v1/palette" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": "#3B82F6",
    "algorithm": "tints",
    "count": 5
  }'`,
      language: "bash"
    }
  },
  {
    name: "PDF API",
    slug: "pdf",
    url: "https://pdf.endpnt.dev",
    description: "Merge, split, compress, encrypt, and extract from PDFs",
    longDescription: "Server-side PDF manipulation covering merge, split, rotate, reorder, compress, encrypt, decrypt, watermark, text/image/metadata/form extraction, OCR for scanned documents, and page rendering to images. Accepts file uploads or URLs up to 25MB.",
    features: ["Merge & split", "Encrypt & decrypt", "Text/image/form extraction", "OCR for scanned PDFs", "Page render to PNG/JPEG"],
    icon: FileText,
    color: "#DC2626",
    codeExample: {
      title: "Extract text from a PDF",
      code: `curl -X POST "https://pdf.endpnt.dev/api/v1/extract/text" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "file_url": "https://example.com/document.pdf"
  }'`,
      language: "bash"
    }
  }
];