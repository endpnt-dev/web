import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import CodeBlock from "@/components/CodeBlock";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title} | endpnt.dev blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  // For demo purposes, we'll render the content based on the slug
  const renderContent = () => {
    switch (post.slug) {
      case "introducing-endpnt":
        return (
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted leading-8">
              Today, we're excited to introduce endpnt.dev — a platform of 5 essential developer APIs
              built with one core principle: reliability over hype.
            </p>

            <h2>The problem with modern APIs</h2>
            <p>
              As developers, we've all been there. You need to add a simple feature to your app —
              maybe capture a screenshot, generate a QR code, or validate an email address. You search
              for an API, find one that looks promising, and then discover it has one of these issues:
            </p>

            <ul>
              <li>Powered by AI with unpredictable results and costs</li>
              <li>Inconsistent uptime and reliability</li>
              <li>Complex pricing that scales unexpectedly</li>
              <li>Poor documentation and developer experience</li>
              <li>Different authentication schemes across services</li>
            </ul>

            <h2>Our approach</h2>
            <p>
              endpnt.dev takes a different approach. Instead of chasing the latest AI trends, we focus
              on deterministic processing that gives you the same result every time. Instead of complex
              pricing tiers, we offer simple, transparent pricing. Instead of multiple vendors, we give
              you one platform with one API key.
            </p>

            <h3>5 APIs, one platform</h3>
            <p>We've started with the 5 APIs that every developer needs:</p>

            <ul>
              <li><strong>Screenshot API</strong> — Capture any webpage as an image</li>
              <li><strong>QR Code API</strong> — Generate styled QR codes instantly</li>
              <li><strong>URL Preview API</strong> — Extract rich link previews from any URL</li>
              <li><strong>Image Conversion API</strong> — Convert, resize, and optimize images</li>
              <li><strong>Validation API</strong> — Verify emails, phones, and domains</li>
            </ul>

            <h2>What's next?</h2>
            <p>
              This is just the beginning. We're committed to building the most reliable developer API
              platform, adding new services based on real developer needs, not venture capital trends.
            </p>

            <p>
              Ready to try it out? Start with our free tier and see the difference that reliable APIs make.
            </p>
          </div>
        );

      case "no-ai-dependencies":
        return (
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted leading-8">
              While everyone else is racing to add AI to everything, we made the deliberate choice to
              build our APIs without any AI dependencies. Here's why.
            </p>

            <h2>The AI hype problem</h2>
            <p>
              AI is powerful, but it's not the right tool for every job. When you need to capture a
              screenshot, generate a QR code, or validate an email address, you want predictable,
              deterministic results — not the uncertainty that comes with AI models.
            </p>

            <h3>Unpredictable costs</h3>
            <p>
              AI services often charge per token or per operation, with costs that can vary wildly based
              on input complexity. A simple request might cost pennies, while a complex one costs dollars.
              This makes it impossible to budget accurately.
            </p>

            <CodeBlock
              title="AI API pricing unpredictability"
              code={`// Simple request: $0.002
await ai.processImage("small-logo.png")

// Complex request: $0.847 (423x more expensive!)
await ai.processImage("complex-diagram.png")`}
              language="javascript"
            />

            <h3>Inconsistent results</h3>
            <p>
              AI models are probabilistic by nature. The same input can produce different outputs,
              which is exactly what you don't want in a production API. When your users upload an
              image to convert to WebP, they expect the same result every time.
            </p>

            <h2>Our deterministic approach</h2>
            <p>
              Instead of AI, we use proven, deterministic algorithms and libraries:
            </p>

            <ul>
              <li><strong>Screenshots:</strong> Puppeteer with Chromium for pixel-perfect captures</li>
              <li><strong>QR codes:</strong> QRCode.js for reliable QR generation</li>
              <li><strong>Image processing:</strong> Sharp for fast, consistent image operations</li>
              <li><strong>URL parsing:</strong> Cheerio and custom parsers for metadata extraction</li>
              <li><strong>Validation:</strong> RFC-compliant validators and DNS lookups</li>
            </ul>

            <h3>Predictable performance</h3>
            <p>
              Because we don't rely on external AI services, our response times are consistent and fast.
              No waiting for model inference or dealing with AI service outages.
            </p>

            <CodeBlock
              title="Consistent response times"
              code={`// endpnt.dev Screenshot API
Average response time: 1.2s ± 0.3s

// AI-powered competitor
Average response time: 3.7s ± 2.1s (varies by load)`}
              language="text"
            />

            <h2>When AI makes sense</h2>
            <p>
              Don't get us wrong — AI is incredible for the right use cases. Content generation,
              natural language processing, and complex analysis all benefit from AI. But for basic
              developer utilities like image processing and data validation, traditional approaches
              are faster, cheaper, and more reliable.
            </p>

            <h2>The future is hybrid</h2>
            <p>
              As AI models become more reliable and cost-effective, we'll consider adding AI-powered
              features where they truly add value. But we'll always offer deterministic alternatives
              for developers who need predictability.
            </p>

            <p>
              Because sometimes, the best technology is the one that just works.
            </p>
          </div>
        );

      case "screenshot-api-guide":
        return (
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted leading-8">
              Website screenshots are one of the most common needs in web development. Whether you're
              building a link preview system, monitoring tool, or social media automation, capturing
              pixel-perfect screenshots programmatically is essential.
            </p>

            <h2>Getting started</h2>
            <p>
              The endpnt Screenshot API makes it simple to capture any webpage as an image. Here's
              a basic example:
            </p>

            <CodeBlock
              title="Basic screenshot request"
              code={`curl -X POST "https://screenshot.endpnt.dev/api/v1/capture" \\
  -H "x-api-key: ek_your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com"
  }'`}
              language="bash"
            />

            <p>This returns a JSON response with the screenshot URL:</p>

            <CodeBlock
              code={`{
  "success": true,
  "data": {
    "imageUrl": "https://cdn.endpnt.dev/screenshots/abc123.png",
    "width": 1280,
    "height": 720,
    "format": "png",
    "fileSize": 245678
  },
  "meta": {
    "requestId": "req_abc123",
    "processingTime": 1245
  }
}`}
              language="json"
            />

            <h2>Full-page screenshots</h2>
            <p>
              By default, we capture the visible viewport (1280x720). To capture the entire page,
              set <code>fullPage</code> to true:
            </p>

            <CodeBlock
              title="Full-page capture"
              code={`{
  "url": "https://example.com",
  "fullPage": true
}`}
              language="json"
            />

            <h2>Device emulation</h2>
            <p>
              Capture screenshots as they would appear on different devices:
            </p>

            <CodeBlock
              title="Mobile screenshot"
              code={`{
  "url": "https://example.com",
  "device": "iPhone 12 Pro",
  "fullPage": true
}`}
              language="json"
            />

            <p>Supported devices include:</p>
            <ul>
              <li>iPhone 12 Pro, iPhone 13 Pro, iPhone 14 Pro</li>
              <li>iPad, iPad Pro</li>
              <li>Samsung Galaxy S21, Pixel 5</li>
              <li>Desktop (1920x1080, 1280x720)</li>
            </ul>

            <h2>Dark mode support</h2>
            <p>
              Many websites now support dark mode. Capture screenshots in dark mode by setting
              the <code>darkMode</code> parameter:
            </p>

            <CodeBlock
              title="Dark mode screenshot"
              code={`{
  "url": "https://example.com",
  "darkMode": true
}`}
              language="json"
            />

            <h2>Element targeting</h2>
            <p>
              Sometimes you only want to capture a specific part of a page. Use CSS selectors
              to target specific elements:
            </p>

            <CodeBlock
              title="Capture specific element"
              code={`{
  "url": "https://github.com/microsoft/vscode",
  "selector": ".Box-header",
  "padding": 20
}`}
              language="json"
            />

            <h2>Output formats</h2>
            <p>
              Choose from multiple output formats depending on your needs:
            </p>

            <ul>
              <li><strong>PNG</strong> (default) — Best for UI screenshots, lossless</li>
              <li><strong>JPEG</strong> — Smaller file sizes, good for photos</li>
              <li><strong>WebP</strong> — Modern format, excellent compression</li>
              <li><strong>PDF</strong> — Vector format, perfect for printing</li>
            </ul>

            <CodeBlock
              title="JPEG with quality control"
              code={`{
  "url": "https://example.com",
  "format": "jpeg",
  "quality": 85
}`}
              language="json"
            />

            <h2>Best practices</h2>

            <h3>Handling slow websites</h3>
            <p>
              Some websites load slowly or have dynamic content. Use the <code>waitFor</code>
              parameter to wait for specific conditions:
            </p>

            <CodeBlock
              title="Wait for element to load"
              code={`{
  "url": "https://example.com",
  "waitFor": {
    "selector": "#main-content",
    "timeout": 10000
  }
}`}
              language="json"
            />

            <h3>Authentication and cookies</h3>
            <p>
              For pages that require authentication, you can pass custom headers and cookies:
            </p>

            <CodeBlock
              title="Authenticated screenshot"
              code={`{
  "url": "https://app.example.com/dashboard",
  "headers": {
    "Authorization": "Bearer your-token"
  },
  "cookies": [
    {
      "name": "session",
      "value": "abc123",
      "domain": "app.example.com"
    }
  ]
}`}
              language="json"
            />

            <h3>Performance optimization</h3>
            <p>
              For better performance, especially when taking many screenshots:
            </p>

            <ul>
              <li>Use <code>blockAds: true</code> to block ads and trackers</li>
              <li>Set <code>blockMedia: true</code> to skip images and videos</li>
              <li>Use <code>cache: true</code> for static pages</li>
            </ul>

            <CodeBlock
              title="Optimized screenshot"
              code={`{
  "url": "https://example.com",
  "blockAds": true,
  "blockMedia": false,
  "cache": true
}`}
              language="json"
            />

            <h2>Error handling</h2>
            <p>
              Always handle potential errors in your code:
            </p>

            <CodeBlock
              title="JavaScript with error handling"
              code={`async function takeScreenshot(url) {
  try {
    const response = await fetch('https://screenshot.endpnt.dev/api/v1/capture', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ENDPNT_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url })
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(\`Screenshot failed: \${result.error.message}\`);
    }

    return result.data.imageUrl;
  } catch (error) {
    console.error('Screenshot error:', error);
    throw error;
  }
}`}
              language="javascript"
            />

            <h2>Common use cases</h2>

            <h3>Social media previews</h3>
            <p>
              Generate Open Graph images for your blog posts or product pages:
            </p>

            <CodeBlock
              code={`{
  "url": "https://yourblog.com/post/amazing-article",
  "width": 1200,
  "height": 630,
  "format": "png"
}`}
              language="json"
            />

            <h3>Website monitoring</h3>
            <p>
              Take regular screenshots to monitor your website for visual changes:
            </p>

            <CodeBlock
              code={`{
  "url": "https://yourapp.com/pricing",
  "fullPage": true,
  "cache": false
}`}
              language="json"
            />

            <h3>PDF generation</h3>
            <p>
              Convert web pages to PDF for reports or archiving:
            </p>

            <CodeBlock
              code={`{
  "url": "https://example.com/report",
  "format": "pdf",
  "fullPage": true,
  "paperSize": "A4"
}`}
              language="json"
            />

            <h2>Rate limits and pricing</h2>
            <p>
              The Screenshot API is included in all endpnt.dev plans:
            </p>

            <ul>
              <li><strong>Free tier:</strong> 100 screenshots/month</li>
              <li><strong>Starter:</strong> 5,000 screenshots/month</li>
              <li><strong>Pro:</strong> 25,000 screenshots/month</li>
              <li><strong>Enterprise:</strong> Unlimited</li>
            </ul>

            <p>
              Screenshots typically take 1-3 seconds to generate, depending on the complexity of the
              page and the parameters you specify.
            </p>

            <h2>Next steps</h2>
            <p>
              Ready to start taking screenshots? Get your API key and try the Screenshot API today.
              Check out the{" "}
              <Link href="https://screenshot.endpnt.dev/docs" className="text-primary hover:text-primary/80">
                full documentation <ExternalLink className="inline h-4 w-4" />
              </Link>{" "}
              for more advanced features and examples.
            </p>
          </div>
        );

      default:
        return (
          <div className="prose prose-invert max-w-none">
            <p>Content for this blog post is coming soon.</p>
          </div>
        );
    }
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </div>

        {/* Article header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-muted mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
            <span>by {post.author}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-xl leading-8 text-muted">
            {post.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-secondary px-3 py-1 text-sm font-medium text-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article content */}
        <article className="max-w-none">
          {renderContent()}
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted">Written by {post.author}</span>
            </div>
            <div className="mt-4 sm:mt-0">
              <Link
                href="/blog"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                ← More posts
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}