"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/lib/pricing";

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Choose the right plan for you
          </p>
          <p className="mt-6 text-lg leading-8 text-muted">
            All plans include access to all 5 APIs with a single API key. No setup fees, ever.
          </p>

          {/* Annual/Monthly toggle */}
          <div className="mt-8 flex justify-center">
            <div className="flex rounded-lg bg-secondary p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  !isAnnual
                    ? "bg-primary text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isAnnual
                    ? "bg-primary text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Annual
                <span className="ml-1 text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">
                  20% off
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-x-8">
          {PRICING_TIERS.map((tier, tierIdx) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl bg-secondary/50 p-8 ring-1 ring-border xl:p-10 ${
                tier.popular ? "lg:z-10 lg:rounded-b-none bg-secondary ring-2 ring-primary" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-foreground">
                    {tier.name}
                  </h3>
                  {tier.popular && (
                    <p className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                      Most popular
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {tier.name === "Free" && "Perfect for getting started"}
                  {tier.name === "Starter" && "Great for small projects"}
                  {tier.name === "Pro" && "Built for growing businesses"}
                  {tier.name === "Enterprise" && "Custom solutions for scale"}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    {tier.name === "Enterprise" ? "Custom" : `$${isAnnual ? tier.price.annual : tier.price.monthly}`}
                  </span>
                  {tier.name !== "Enterprise" && tier.price.monthly > 0 && (
                    <span className="text-sm font-semibold leading-6 text-muted">
                      /{isAnnual ? "year" : "month"}
                    </span>
                  )}
                  {tier.name === "Free" && (
                    <span className="text-sm font-semibold leading-6 text-muted">
                      forever
                    </span>
                  )}
                </p>
                <ul className="mt-8 space-y-3 text-sm leading-6 text-muted">
                  <li className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    <strong className="text-foreground">{tier.features.requests}</strong> requests per month
                  </li>
                  <li className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    <strong className="text-foreground">{tier.features.rateLimit}</strong> rate limit
                  </li>
                  <li className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    <strong className="text-foreground">{tier.features.apis}</strong> APIs included
                  </li>
                  <li className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    <strong className="text-foreground">{tier.features.support}</strong> support
                  </li>
                  {tier.features.sla !== "—" && (
                    <li className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      <strong className="text-foreground">{tier.features.sla}</strong> SLA
                    </li>
                  )}
                </ul>
              </div>
              <button
                className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 transition-colors ${
                  tier.popular
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80 ring-1 ring-inset ring-border"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted">
            All plans include access to all 5 APIs with a single API key
          </p>
        </div>
      </div>
    </div>
  );
}