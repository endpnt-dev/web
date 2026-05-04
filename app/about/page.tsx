import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | endpnt.dev",
  description: "Learn more about endpnt.dev.",
  openGraph: {
    title: "About | endpnt.dev",
    description: "Learn more about endpnt.dev.",
  },
};

// TODO: expand with mission, team, story before public launch
export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
        About endpnt.dev
      </h1>
      <p className="text-lg leading-8 text-muted">
        endpnt.dev is a developer-first platform of utility APIs for common
        engineering tasks — barcode generation, QR codes, file conversion,
        validation, and more. Build faster by using endpoints instead of
        managing libraries.
      </p>
    </main>
  );
}
