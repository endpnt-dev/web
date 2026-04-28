import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | endpnt.dev",
  description: "Privacy policy for endpnt.dev.",
  openGraph: {
    title: "Privacy Policy | endpnt.dev",
    description: "Privacy policy for endpnt.dev.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
        Privacy Policy
      </h1>
      <p className="text-sm text-muted italic mb-8">
        Last updated: TBD before public launch.
      </p>
      <p className="text-lg leading-8 text-muted">
        {/*
          TODO: insert full privacy policy text.
          Do NOT generate filler legal text — JK to author or source from a
          legal template before launch.
        */}
        [Privacy policy content coming soon.]
      </p>
    </main>
  );
}
