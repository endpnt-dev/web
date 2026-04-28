import {
  Camera,
  QrCode,
  Link,
  Image,
  ShieldCheck,
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
  }
];