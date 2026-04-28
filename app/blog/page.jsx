import Link from "next/link";
import { blogPosts } from "./blogData";

export const metadata = {
  title: "Blog | Moksha and Inner Freedom",
  description:
    "Simple reflections on Moksha, Vedanta, the Upanishads, Bhagavad Gita, and the path to inner freedom."
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <section className="rounded-[2rem] bg-white px-8 py-12 text-center shadow-sm ring-1 ring-stone-200 sm:px-12 sm:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Moksha Keys
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            Simple reflections on Moksha, Vedanta, and inner freedom.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-stone-600">
            These articles are written for sincere seekers who want to
            understand freedom, self-knowledge, dharma, and the path of Moksha
            in simple English.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-[1.75rem] bg-white px-6 py-6 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                {post.theme}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-stone-900">
                {post.cardTitle}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-stone-600">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex w-fit text-sm font-medium text-stone-700 transition hover:text-stone-900"
              >
                Read article →
              </Link>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Begin the path
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600">
            If you are new to Moksha Keys, begin gently and let the teaching
            unfold one step at a time.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/start-here"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Start Here
            </Link>
            <Link
              href="/five-keys"
              className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Five Keys
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
