import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Key, Clock, AlertTriangle, Code } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import { APIS } from "@/lib/apis";

export const metadata: Metadata = {
  title: "Documentation - Platform overview | endpnt.dev",
  description: "Learn how authentication, rate limiting, response formats, and error codes work across all endpnt.dev APIs.",
  openGraph: {
    title: "Documentation - Platform overview | endpnt.dev",
    description: "Learn how authentication, rate limiting, response formats, and error codes work across all endpnt.dev APIs.",
  },
};

export default function DocsPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Documentation
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Platform-wide documentation covering authentication, rate limits, response formats, and error handling.
            For API-specific docs, visit each API's documentation page.
          </p>
        </div>

        {/* Quick Links to API Docs */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">API-Specific Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {APIS.map((api) => {
              const Icon = api.icon;
              return (
                <Link
                  key={api.slug}
                  href={`${api.url}/docs`}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-all group"
                >
                  <Icon className="h-5 w-5" style={{ color: api.color }} />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {api.name}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted ml-auto" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Authentication */}
        <section className="mt-24">
          <div className="flex items-center gap-3 mb-6">
            <Key className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Authentication</h2>
          </div>

          <p className="text-muted mb-6">
            All endpnt.dev APIs use API key authentication. Include your API key in the <code>x-api-key</code> header
            with every request. Your API key starts with <code>ek_</code> and works across all 5 APIs.
          </p>

          <CodeBlock
            title="Authentication Example"
            code={`curl -X POST "https://screenshot.endpnt.dev/api/screenshot" \\
  -H "x-api-key: ek_your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://example.com"}'`}
            language="bash"
          />

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <Key className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-400">
                  Getting your API key
                </h3>
                <div className="mt-2 text-sm text-blue-300">
                  <p>Sign up for a free account to get your API key instantly. One key works across all APIs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Limiting */}
        <section className="mt-24">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Rate Limiting</h2>
          </div>

          <p className="text-muted mb-6">
            Rate limits are shared across all APIs and based on your plan tier. We use a sliding window approach
            that resets continuously rather than at fixed intervals.
          </p>

          <div className="overflow-hidden shadow ring-1 ring-border rounded-lg">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Requests/Month
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Rate Limit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-secondary/30 divide-y divide-border">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">Free</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">100</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">10/min</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">Starter</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">5,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">60/min</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">Pro</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">25,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">300/min</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">Enterprise</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">Unlimited</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted mt-4">
            Rate limit headers are included in every response: <code>X-RateLimit-Limit</code>,
            <code>X-RateLimit-Remaining</code>, and <code>X-RateLimit-Reset</code>.
          </p>
        </section>

        {/* Response Format */}
        <section className="mt-24">
          <div className="flex items-center gap-3 mb-6">
            <Code className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Response Format</h2>
          </div>

          <p className="text-muted mb-6">
            All APIs return responses in a consistent JSON envelope format. This makes it easy to handle
            responses consistently across all endpoints.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Success Response</h3>
              <CodeBlock
                code={`{
  "success": true,
  "data": {
    // API-specific response data
    "imageUrl": "https://cdn.endpnt.dev/screenshots/abc123.png",
    "format": "png",
    "width": 1920,
    "height": 1080
  },
  "meta": {
    "requestId": "req_abc123def456",
    "processingTime": 1245,
    "apiVersion": "1.0"
  }
}`}
                language="json"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Error Response</h3>
              <CodeBlock
                code={`{
  "success": false,
  "error": {
    "code": "INVALID_URL",
    "message": "The provided URL is not valid or accessible",
    "details": {
      "url": "not-a-valid-url"
    }
  },
  "meta": {
    "requestId": "req_abc123def456",
    "processingTime": 45,
    "apiVersion": "1.0"
  }
}`}
                language="json"
              />
            </div>
          </div>
        </section>

        {/* Error Codes */}
        <section className="mt-24">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Error Codes</h2>
          </div>

          <p className="text-muted mb-6">
            Common error codes you might encounter across all APIs:
          </p>

          <div className="overflow-hidden shadow ring-1 ring-border rounded-lg">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    HTTP Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Error Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-secondary/30 divide-y divide-border">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">400</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted font-mono">INVALID_REQUEST</td>
                  <td className="px-6 py-4 text-sm text-muted">Request body is malformed or missing required fields</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">401</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted font-mono">INVALID_API_KEY</td>
                  <td className="px-6 py-4 text-sm text-muted">API key is missing, invalid, or expired</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">429</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted font-mono">RATE_LIMIT_EXCEEDED</td>
                  <td className="px-6 py-4 text-sm text-muted">You've exceeded your plan's rate limit</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">402</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted font-mono">QUOTA_EXCEEDED</td>
                  <td className="px-6 py-4 text-sm text-muted">You've exceeded your plan's monthly request quota</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">500</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted font-mono">INTERNAL_ERROR</td>
                  <td className="px-6 py-4 text-sm text-muted">An unexpected error occurred on our end</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SDK and Libraries */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-6">SDKs and Libraries</h2>
          <p className="text-muted mb-6">
            While our APIs are simple HTTP endpoints that work with any HTTP client, we're working on
            official SDKs for popular languages. For now, here are some community examples:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">JavaScript/Node.js</h3>
              <CodeBlock
                code={`// Using fetch (browser) or node-fetch (Node.js)
const response = await fetch('https://screenshot.endpnt.dev/api/screenshot', {
  method: 'POST',
  headers: {
    'x-api-key': 'ek_your_api_key_here',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: 'https://example.com',
    fullPage: true
  })
});

const result = await response.json();
console.log(result);`}
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Python</h3>
              <CodeBlock
                code={`import requests

url = "https://screenshot.endpnt.dev/api/screenshot"
headers = {
    "x-api-key": "ek_your_api_key_here",
    "Content-Type": "application/json"
}
data = {
    "url": "https://example.com",
    "fullPage": True
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`}
                language="python"
              />
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Ready to start building?
          </h2>
          <p className="mt-4 text-muted">
            Get your API key and explore the full documentation for each API.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              Get Started Free
            </a>
            <a
              href="/apis"
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Browse All APIs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}