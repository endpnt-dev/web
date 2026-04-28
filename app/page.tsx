import Link from "next/link";
import { ArrowRight, Key, Zap, Clock, Shield } from "lucide-react";
import Hero from "@/components/Hero";
import ApiCard from "@/components/ApiCard";
import PricingTable from "@/components/PricingTable";
import { APIS } from "@/lib/apis";
import { PRICING_TIERS } from "@/lib/pricing";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* API Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              9 Essential APIs for developers
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Everything you need to build modern applications. One platform, one API key, zero headaches.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:gap-8">
            {APIS.map((api) => (
              <ApiCard key={api.slug} api={api} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/apis"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              View all APIs and documentation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 sm:py-32 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How it works
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Get started in minutes with our simple, consistent API design
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                    <Key className="h-5 w-5 text-white" />
                  </div>
                  <span>1. Get your API key</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted">
                  <p className="flex-auto">
                    Sign up for free and get your API key instantly. One key works across all 9 APIs.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span>2. Make a request</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted">
                  <p className="flex-auto">
                    Send a simple HTTP request with your API key. All endpoints follow the same patterns.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <span>3. Get your response</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted">
                  <p className="flex-auto">
                    Receive a fast, reliable response in a consistent JSON format across all APIs.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for developers, by developers
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              We know what you need: reliability, speed, and simplicity. No fluff, no AI uncertainty.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
              <div className="flex flex-col items-start">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <Shield className="h-5 w-5 text-primary" />
                  No AI dependencies
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted">
                  Predictable, deterministic results every time. No AI blackboxes or unpredictable costs.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  99.9% uptime
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted">
                  Enterprise-grade reliability with comprehensive monitoring and alerting.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  &lt; 2s response times
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted">
                  Optimized infrastructure ensures fast responses for all API endpoints.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <Key className="h-5 w-5 text-primary" />
                  One API key for all
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted">
                  Single key, unified billing, consistent authentication across all services.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 sm:py-32 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Start free, scale as you grow. No hidden fees, no surprise costs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 gap-4 sm:max-w-xl lg:max-w-none lg:grid-cols-4">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col items-center rounded-lg bg-secondary/50 p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-2">
                  <span className="text-2xl font-bold text-foreground">
                    {tier.name === "Enterprise" ? "Custom" : `$${tier.price.monthly}`}
                  </span>
                  {tier.name !== "Enterprise" && tier.price.monthly > 0 && (
                    <span className="text-sm text-muted">/month</span>
                  )}
                  {tier.name === "Free" && (
                    <span className="text-sm text-muted"> forever</span>
                  )}
                </p>
                <p className="mt-1 text-sm text-muted">{tier.features.requests}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              See full pricing details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}