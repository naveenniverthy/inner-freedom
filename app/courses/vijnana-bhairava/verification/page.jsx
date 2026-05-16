import Link from "next/link";

export const metadata = {
  title: "How Source Verification Works | Vijnana Bhairava | MokshaKeys",
  description:
    "A transparent note on how the Vijnana Bhairava course reviews Sanskrit, translations, and contemplative renderings.",
};

export default function VijnanaBhairavaVerificationPage() {
  return (
    <main className="min-h-screen bg-sand-100 px-6 py-12 text-ink-900 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[760px] flex-col gap-6">
        <Link
          href="/courses/vijnana-bhairava"
          className="w-fit text-sm font-semibold text-sage-500 transition hover:text-sage-700"
        >
          Back to Course
        </Link>

        <section className="surface px-8 py-12 sm:px-10 sm:py-16">
          <p className="eyebrow">Source Verification</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            How Source Verification Works
          </h1>
          <div className="mt-7 space-y-4 text-base leading-8 text-gray-700 sm:text-lg">
            <p>
              This course is expanding slowly because the source text deserves
              patience. A practice is not marked verified simply because it
              sounds plausible or fits a theme.
            </p>
            <p>
              Some entries remain under review while Sanskrit, transliteration,
              verse number, and literal meaning are checked against the source.
              That waiting is part of the integrity of the project.
            </p>
          </div>
        </section>

        <section className="surface px-8 py-10 sm:px-10">
          <p className="eyebrow">Why Accuracy Matters</p>
          <div className="mt-5 space-y-4 text-base leading-8 text-gray-700">
            <p>
              Sanskrit accuracy matters because a small textual difference can
              change the sense of a practice. Verse numbers also matter: they
              help readers trace a contemplation back to the source rather than
              relying on memory or approximation.
            </p>
            <p>
              Literal translations and plain English renderings are kept
              separate. The literal layer stays close to source meaning. The
              plain English layer is interpretive, contemplative, and meant to
              support reflection.
            </p>
            <p>
              MokshaKeys commentary and practice guidance are original
              explanations. They should clarify the practice without pretending
              to be the source text itself.
            </p>
          </div>
        </section>

        <section className="rounded-shell border border-sage-700/10 bg-sage-100/45 px-8 py-8 shadow-soft sm:px-10">
          <p className="font-serif text-2xl font-semibold leading-snug text-ink-900">
            Slow expansion is intentional.
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            A day may remain unpublished or under review until the source record
            is strong enough. The aim is not to fill the course quickly, but to
            let the course become trustworthy over time.
          </p>
        </section>

        <section className="surface px-8 py-8 sm:px-10">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/courses/vijnana-bhairava" className="btn-secondary">
              Back to Course
            </Link>
            <Link
              href="/courses/vijnana-bhairava/sources"
              className="btn-secondary"
            >
              Sources and Acknowledgements
            </Link>
            <Link href="/courses/vijnana-bhairava/review" className="btn-primary">
              Review Page
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
