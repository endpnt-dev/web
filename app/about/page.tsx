import { Metadata } from "next";
import Link from "next/link";
import { Mail, Github, ExternalLink, Heart, Zap, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About - Built for developers, by developers | endpnt.dev",
  description: "Learn about endpnt.dev, why we built 5 essential developer APIs without AI dependencies, and how to get in touch.",
  openGraph: {
    title: "About - Built for developers, by developers | endpnt.dev",
    description: "Learn about endpnt.dev, why we built 5 essential developer APIs without AI dependencies.",
  },
};

export default function AboutPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About endpnt
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Built for developers who need reliable, no-nonsense APIs that just work.
            No AI dependencies. No bloat. Just clean, fast endpoints.
          </p>
        </div>

        {/* Story */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why we built endpnt</h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted text-lg leading-8 mb-6">
              As a developer, I was tired of unreliable APIs that break without warning, AI services with
              unpredictable costs, and platforms that disappear overnight. Every project needed the same
              basic functionality: screenshots, QR codes, link previews, image processing, and data validation.
            </p>

            <p className="text-muted text-lg leading-8 mb-6">
              Instead of cobbling together different services from different vendors with different authentication
              schemes and inconsistent reliability, I decided to build the platform I wished existed.
            </p>

            <p className="text-muted text-lg leading-8 mb-8">
              endpnt.dev is the result: 5 essential APIs that developers actually need, built with deterministic
              processing (no AI), predictable pricing, and obsessive attention to reliability. One platform,
              one API key, one bill.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No AI Dependencies</h3>
              <p className="text-sm text-muted">Deterministic results, predictable costs, no black boxes</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Built for Speed</h3>
              <p className="text-sm text-muted">Optimized infrastructure, < 2s response times</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Developer First</h3>
              <p className="text-sm text-muted">Clean docs, consistent APIs, helpful error messages</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community Driven</h3>
              <p className="text-sm text-muted">Built based on real developer needs and feedback</p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-6">How it's built</h2>

          <p className="text-muted text-lg leading-8 mb-8">
            We believe in transparency. Here's the tech stack powering endpnt.dev:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-muted">
                <li>• <strong className="text-foreground">Vercel</strong> - Global edge deployment</li>
                <li>• <strong className="text-foreground">Upstash</strong> - Redis for rate limiting</li>
                <li>• <strong className="text-foreground">Cloudflare</strong> - CDN and DDoS protection</li>
                <li>• <strong className="text-foreground">AWS S3</strong> - File storage and delivery</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Development</h3>
              <ul className="space-y-2 text-muted">
                <li>• <strong className="text-foreground">Next.js</strong> - Full-stack framework</li>
                <li>• <strong className="text-foreground">TypeScript</strong> - Type safety</li>
                <li>• <strong className="text-foreground">Tailwind CSS</strong> - Styling</li>
                <li>• <strong className="text-foreground">Sharp</strong> - Image processing</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-secondary/50 rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-2">Open Source</h4>
            <p className="text-muted mb-4">
              While the APIs themselves are commercial services, many of our tools and libraries are open source.
              Check out our GitHub for examples, SDKs, and contributions.
            </p>
            <Link
              href="https://github.com/endpnt-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <Github className="h-4 w-4" />
              View on GitHub
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted text-lg leading-8 mb-6">
                Have questions, feedback, or just want to chat about APIs? I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:jk@endpnt.dev"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    jk@endpnt.dev
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/endpnt-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    github.com/endpnt-dev
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Looking for support?</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• <strong className="text-foreground">Technical issues:</strong> Check the docs or email us</li>
                <li>• <strong className="text-foreground">Billing questions:</strong> We'll sort it out quickly</li>
                <li>• <strong className="text-foreground">Feature requests:</strong> We love hearing your ideas</li>
                <li>• <strong className="text-foreground">Enterprise needs:</strong> Let's talk custom solutions</li>
              </ul>

              <div className="mt-4">
                <a
                  href="mailto:hello@endpnt.dev"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <div className="mt-24 text-center p-8 bg-secondary/30 rounded-lg border border-border">
          <p className="text-sm text-muted">
            <Heart className="inline h-4 w-4 text-red-500 mx-1" />
            Built with care in San Diego, CA
          </p>
          <p className="text-xs text-muted mt-2">
            © 2026 endpnt.dev - Making developer tools that actually work
          </p>
        </div>
      </div>
    </div>
  );
}