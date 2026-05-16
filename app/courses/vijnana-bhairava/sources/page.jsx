import Link from "next/link";

export const metadata = {
  title: "Sources and Acknowledgements | Vijnana Bhairava | MokshaKeys",
  description:
    "Source notes, translation approach, and acknowledgements for the Vijnana Bhairava 112 Days of Awareness course.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function VijnanaBhairavaSourcesPage() {
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
          <p className="eyebrow">Vijnana Bhairava</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            Sources and Acknowledgements
          </h1>
          <div className="mt-7 space-y-4 text-base leading-8 text-gray-700 sm:text-lg">
            <p>
              This course is inspired by the Vijnana Bhairava tradition and is
              being built with care for source transparency.
            </p>
            <p>
              The course presents original plain English renderings and
              original contemplative guidance in the voice of MokshaKeys.
              Traditional verses are included for study and reference.
            </p>
            <p>
              Plain English renderings are not literal scholarly translations.
              The course avoids sensational or occult framing.
            </p>
          </div>
        </section>

        <section className="surface px-8 py-10 sm:px-10">
          <p className="eyebrow">References</p>
          <div className="mt-6 space-y-7 text-base leading-8 text-gray-700">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink-900">
                Primary Text
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Vijnana Bhairava</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink-900">
                Reference Translations and Studies
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Jaideva Singh, Vijnana Bhairava or Divine Consciousness</li>
                <li>Swami Lakshmanjoo, Vijnana Bhairava</li>
                <li>
                  Other traditional or scholarly sources may be reviewed before
                  publication
                </li>
              </ul>
            </div>

            <p className="rounded-3xl border border-sage-700/10 bg-sand-50 px-5 py-5 text-sm leading-7 text-gray-600">
              References are used for orientation and review. The practice
              guidance and plain English renderings are original to MokshaKeys.
            </p>
          </div>
        </section>

        <section className="surface px-8 py-10 sm:px-10">
          <p className="eyebrow">Copyright and Translation Note</p>
          <p className="mt-5 text-base leading-8 text-gray-700 sm:text-lg">
            This course does not reproduce extended copyrighted commentary.
            Where verses are included, they are presented for study and
            reference. Plain English renderings are original interpretive
            renderings created for contemplative practice, not literal
            translations.
          </p>
        </section>
      </div>
    </main>
  );
}
