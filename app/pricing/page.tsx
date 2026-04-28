import { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import PricingTable from "@/components/PricingTable";
import { PRICING_FAQ } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing - Simple, transparent pricing | endpnt.dev",
  description: "Choose the right plan for your project. All plans include access to all 9 APIs with a single API key. Start free, scale as you grow.",
  openGraph: {
    title: "Pricing - Simple, transparent pricing | endpnt.dev",
    description: "Choose the right plan for your project. All plans include access to all 9 APIs with a single API key.",
  },
};

export default function PricingPage() {
  return (
    <div>
      <PricingTable />

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-secondary/20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Have a different question? Contact us and we'll get back to you.
            </p>
          </div>
          <div className="mt-20">
            <dl className="space-y-8 divide-y divide-border">
              {PRICING_FAQ.map((faq, index) => (
                <div key={index} className="pt-8 first:pt-0">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Need a custom plan or have specific requirements? We'd love to help.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:hello@endpnt.dev"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
              >
                Contact us
              </a>
              <a
                href="/docs"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                View documentation <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}