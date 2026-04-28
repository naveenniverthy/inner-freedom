import Link from "next/link";

export default function BlogArticleLayout({ post }) {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <article className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/blog"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          ← Back to Blog
        </Link>

        <header className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Blog
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            {post.theme}
          </p>
        </header>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Continue the journey
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            Explore the Five Keys to Inner Freedom and see how clarity,
            responsibility, discipline, acceptance, and offering work together.
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
              className="inline-flex rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
            >
              Five Keys
            </Link>
            <Link
              href="/courses/gita-keys"
              className="inline-flex rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
            >
              Bhagavad Gita Course
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
