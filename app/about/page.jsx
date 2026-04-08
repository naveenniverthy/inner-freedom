export const metadata = {
  title: "About | Moksha",
  description: "About Moksha Keys, the author behind it, and related books."
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-neutral-800">
      <a
        href="/"
        className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-800 transition-colors mb-8"
      >
        ← Back to Home
      </a>

      <div className="mb-4">
        <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-3">
          Five Keys to Inner Freedom
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900">
          About this framework
        </h1>
      </div>

      <div className="space-y-6 text-[17px] leading-8 text-neutral-700">
        <p>
          This site was created as a simple doorway into self-understanding and
          steady living.
        </p>

        <p>
          This site is rooted in the vision of Vedanta, a timeless teaching
          that helps us inquire into who we are, what freedom really means, and
          why lasting peace cannot be found through outer change alone.
        </p>

        <p>
          The aim here is not to promote belief, identity, or ideology. It is
          to make a subtle teaching more accessible in clear, simple, human
          language.
        </p>

        <p>
          Many people are drawn to these questions, but feel blocked by heavy
          terminology, difficult translations, or overly religious
          presentation. This space is meant to remove some of that friction.
        </p>

        <p>
          The five keys are a simple way of organizing that vision into
          everyday language: clarity, responsibility, discipline, acceptance,
          and offering.
        </p>

        <p>
          If something here resonates, begin where you are. There is no need to
          pretend, perform, or become someone else.
        </p>
      </div>

      <div className="mt-8">
        <a
          href="/clarity"
          className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm text-neutral-800 hover:bg-neutral-50 transition-colors"
        >
          Explore the teaching
        </a>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 mb-6">
          About the Author
        </h2>

        <div className="space-y-6 text-[17px] leading-8 text-neutral-700">
          <p>Moksha Keys is created by Naveen Niverthy.</p>

          <p>
            I have been studying Advaita Vedanta for many years under a
            traditional teacher. Over time, this teaching has helped me see
            life with more clarity and meet situations with more steadiness.
          </p>

          <p>
            This site is my attempt to present that understanding in a simple
            and practical way — not as theory, but as something that can help
            in everyday life.
          </p>

          <p>
            Outside of this work, I am a working professional, a parent, and
            someone navigating life like everyone else. This is not separate
            from life — it is meant for life.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 mb-6">
          Books
        </h2>

        <div className="space-y-10 text-[17px] leading-8 text-neutral-700">
          <div>
            <h3 className="text-xl font-medium text-neutral-900 mb-2">
              Already Here
            </h3>
            <p className="mb-4">
              A short invitation to recognize that what you seek is not
              elsewhere, but already present.
            </p>
            <a
              href="https://a.co/d/08B9SgIP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors"
            >
              View on Amazon
            </a>
          </div>

          <div>
            <h3 className="text-xl font-medium text-neutral-900 mb-2">
              Shrimad Bhagavad Gita – A Seamless Reading
            </h3>
            <p className="mb-4">
              A simple and continuous English rendering of the Bhagavad Gita,
              meant to be read in one flow.
            </p>
            <a
              href="https://a.co/d/084RaNP1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors"
            >
              View on Amazon
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
