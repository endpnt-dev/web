import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | endpnt.dev",
  description: "Terms of service for endpnt.dev.",
  openGraph: {
    title: "Terms of Service | endpnt.dev",
    description: "Terms of service for endpnt.dev.",
  },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
        Terms of Service
      </h1>
      <p className="text-sm text-muted italic mb-8">
        Last updated: TBD before public launch.
      </p>
      <p className="text-lg leading-8 text-muted">
        {/*
          TODO: insert full terms of service text.
          Do NOT generate filler legal text — JK to author or source from a
          legal template before launch.
        */}
        [Terms of service content coming soon.]
      </p>
    </main>
  );
}
