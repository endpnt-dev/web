import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { API } from "@/lib/apis";

interface ApiCardProps {
  api: API;
  variant?: "simple" | "detailed";
}

export default function ApiCard({ api, variant = "simple" }: ApiCardProps) {
  const Icon = api.icon;

  if (variant === "simple") {
    return (
      <Link
        href={api.url}
        className="group relative flex flex-col rounded-lg border border-border bg-secondary/30 p-6 hover:bg-secondary/50 transition-all duration-200 hover:border-border/50"
      >
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${api.color}20`, color: api.color }}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {api.name}
            </h3>
            <p className="mt-2 text-sm text-muted">{api.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {api.features.slice(0, 3).map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <ExternalLink className="h-4 w-4 text-muted group-hover:text-primary transition-colors" />
        </div>
        <div className="mt-4 flex items-center text-sm font-medium text-primary">
          View Documentation
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-secondary/30 p-8">
      <div className="flex items-start gap-6">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${api.color}20`, color: api.color }}
        >
          <Icon className="h-8 w-8" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-foreground">{api.name}</h3>
            <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400">
              No AI required
            </span>
          </div>
          <p className="mt-3 text-muted">{api.longDescription}</p>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {api.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-muted">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Link
              href={`${api.url}/docs`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              View Documentation
              <ExternalLink className="h-4 w-4" />
            </Link>
            <Link
              href={api.url}
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Try it Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}