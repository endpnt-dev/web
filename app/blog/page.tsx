import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Insights on developer APIs and tools | endpnt.dev",
  description: "Learn about developer APIs, best practices, and the latest updates from the endpnt.dev platform.",
  openGraph: {
    title: "Blog - Insights on developer APIs and tools | endpnt.dev",
    description: "Learn about developer APIs, best practices, and the latest updates from the endpnt.dev platform.",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Insights on developer APIs, best practices, and platform updates.
          </p>
        </div>

        {/* Featured post */}
        {posts.length > 0 && posts[0].featured && (
          <div className="mt-16">
            <div className="relative">
              <Link
                href={`/blog/${posts[0].slug}`}
                className="group block rounded-2xl border border-border bg-secondary/30 p-8 hover:bg-secondary/50 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-muted mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(posts[0].publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {posts[0].readTime}
                      </div>
                      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Featured
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="mt-4 text-muted text-lg leading-7">
                      {posts[0].description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {posts[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-muted"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all ml-4 mt-2" />
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Other posts */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-foreground mb-8">All Posts</h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-lg border border-border bg-secondary/20 p-6 hover:bg-secondary/40 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-muted mb-3">
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
                      <span className="text-muted">by {post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-muted leading-6">
                      {post.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-muted"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all ml-4 mt-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-24">
          <div className="rounded-lg bg-secondary/50 p-8 text-center border border-border">
            <h2 className="text-xl font-bold text-foreground">Stay updated</h2>
            <p className="mt-2 text-muted">
              Get notified when we publish new posts about APIs, developer tools, and platform updates.
            </p>
            <div className="mt-6">
              <a
                href="mailto:hello@endpnt.dev?subject=Newsletter Signup"
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
              >
                Subscribe via Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}