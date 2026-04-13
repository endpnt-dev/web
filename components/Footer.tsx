import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const navigation = {
  main: [
    { name: "APIs", href: "/apis" },
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/endpnt-dev",
      icon: Github,
    },
  ],
  apis: [
    { name: "Screenshot API", href: "https://screenshot.endpnt.dev" },
    { name: "QR Code API", href: "https://qr.endpnt.dev" },
    { name: "URL Preview API", href: "https://preview.endpnt.dev" },
    { name: "Image Conversion API", href: "https://convert.endpnt.dev" },
    { name: "Validation API", href: "https://validate.endpnt.dev" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Logo and description */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold font-mono">
                  endpnt<span className="text-muted">.dev</span>
                </span>
              </Link>
              <p className="mt-4 text-sm text-muted max-w-xs">
                Developer APIs that just work. No AI dependencies. No bloat. Just clean, fast endpoints.
              </p>
              <div className="mt-6 flex space-x-6">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>

            {/* APIs */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">APIs</h3>
              <ul className="mt-6 space-y-4">
                {navigation.apis.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      {item.name}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Platform</h3>
              <ul className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status and legal */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    href="https://status.endpnt.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 text-muted hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    Status
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm leading-6 text-muted hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm leading-6 text-muted hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-muted">
              &copy; 2026 endpnt.dev. All rights reserved.
            </p>
            <p className="text-xs leading-5 text-muted mt-4 sm:mt-0">
              Built by JK in San Diego
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}