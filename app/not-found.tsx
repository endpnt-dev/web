import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-muted">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Go back home
          </Link>
          <Link
            href="/docs"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <Search className="h-4 w-4" />
            Browse documentation
          </Link>
        </div>

        {/* Helpful links */}
        <div className="mt-16">
          <h2 className="text-sm font-semibold text-foreground mb-4">Popular pages</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/apis"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              All APIs
            </Link>
            <Link
              href="/pricing"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}