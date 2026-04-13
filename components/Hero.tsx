"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import CodeBlock from "./CodeBlock";

const codeExamples = [
  {
    title: "Screenshot API",
    code: `curl -X POST "https://screenshot.endpnt.dev/api/screenshot" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://example.com", "fullPage": true}'`,
  },
  {
    title: "QR Code API",
    code: `curl -X POST "https://qr.endpnt.dev/api/generate" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"text": "https://endpnt.dev", "format": "svg"}'`,
  },
  {
    title: "URL Preview API",
    code: `curl -X POST "https://preview.endpnt.dev/api/preview" \\
  -H "x-api-key: ek_YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://github.com/vercel/next.js"}'`,
  },
];

export default function Hero() {
  const [currentExample, setCurrentExample] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % codeExamples.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:py-40">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left column - text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Developer APIs that{" "}
              <span className="relative">
                <span className="text-primary">just work</span>
                {isAnimating && (
                  <span className="absolute -right-1 top-0 h-full w-0.5 bg-primary animate-blink" />
                )}
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted max-w-2xl mx-auto lg:mx-0">
              Screenshot, QR codes, link previews, image processing, and validation — all from one platform.
              No AI dependencies. No bloat. Just clean, fast endpoints.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/apis"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors flex items-center gap-2"
              >
                Browse APIs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Get Started Free
              </Link>
            </div>

            {/* Features strip */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                No AI dependencies
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                99.9% uptime
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Free tier forever
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                &lt; 2s response times
              </div>
            </div>
          </div>

          {/* Right column - code example */}
          <div className="mt-16 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg blur-xl" />
              <div className="relative">
                {/* Code example selector */}
                <div className="flex gap-2 mb-4 justify-center lg:justify-start">
                  {codeExamples.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentExample(index)}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                        currentExample === index
                          ? "bg-primary text-white"
                          : "bg-secondary text-muted hover:text-foreground"
                      }`}
                    >
                      {example.title}
                    </button>
                  ))}
                </div>
                <CodeBlock
                  code={codeExamples[currentExample].code}
                  language="bash"
                  title={`${codeExamples[currentExample].title} Example`}
                />
              </div>
            </div>

            {/* Response preview */}
            <div className="mt-4 text-center lg:text-left">
              <p className="text-sm text-muted">
                → Get your response in milliseconds, not minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}