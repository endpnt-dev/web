"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between bg-secondary border border-border rounded-t-lg px-4 py-2">
          <span className="text-sm font-medium text-foreground">{title}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy
              </>
            )}
          </button>
        </div>
      )}
      <div className={`relative ${title ? "rounded-t-none" : ""} rounded-lg bg-secondary border border-border overflow-hidden`}>
        {!title && (
          <button
            onClick={handleCopy}
            className="absolute right-2 top-2 z-10 flex items-center gap-1 rounded bg-background/10 px-2 py-1 text-xs text-muted hover:text-foreground hover:bg-background/20 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copy
              </>
            )}
          </button>
        )}
        <pre className="overflow-x-auto p-4 text-sm">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}