import { Metadata } from "next";
import ApiCard from "@/components/ApiCard";
import CodeBlock from "@/components/CodeBlock";
import { APIS } from "@/lib/apis";

export const metadata: Metadata = {
  title: "APIs - Developer APIs that just work | endpnt.dev",
  description: "Browse all 5 developer APIs: Screenshot, QR Code, URL Preview, Image Conversion, and Validation. No AI dependencies, just clean, fast endpoints.",
  openGraph: {
    title: "APIs - Developer APIs that just work | endpnt.dev",
    description: "Browse all 5 developer APIs: Screenshot, QR Code, URL Preview, Image Conversion, and Validation.",
  },
};

export default function APIsPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            All APIs
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            5 essential developer APIs with consistent authentication, predictable responses,
            and no AI dependencies. One API key unlocks them all.
          </p>
        </div>

        {/* Auth Example */}
        <div className="mx-auto max-w-3xl mt-16">
          <h2 className="text-xl font-semibold text-foreground mb-4">Authentication</h2>
          <p className="text-muted mb-6">
            All APIs use the same authentication method. Include your API key in the <code>x-api-key</code> header:
          </p>
          <CodeBlock
            title="Authentication Example"
            code={`curl -X POST "https://[api].endpnt.dev/api/[endpoint]" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"param": "value"}'`}
            language="bash"
          />
        </div>

        {/* API List */}
        <div className="mx-auto mt-24 space-y-16">
          {APIS.map((api) => (
            <div key={api.slug} className="max-w-5xl mx-auto">
              <ApiCard api={api} variant="detailed" />

              {/* Code Example */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Try it now
                </h3>
                <CodeBlock
                  title={api.codeExample.title}
                  code={api.codeExample.code}
                  language={api.codeExample.language}
                />
                <div className="mt-4 p-4 bg-secondary/50 rounded-lg border border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Expected Response:</h4>
                  <pre className="text-sm text-muted overflow-x-auto">
{`{
  "success": true,
  "data": {
    // API-specific response data
  },
  "meta": {
    "requestId": "req_abc123",
    "processingTime": 145
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mx-auto max-w-2xl text-center mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Ready to get started?
          </h2>
          <p className="mt-4 text-muted">
            Get your API key and start building with all 5 APIs today.
          </p>
          <div className="mt-8">
            <a
              href="/pricing"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}