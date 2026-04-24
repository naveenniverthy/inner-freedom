import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-17-9-22" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
              <h1 className="text-2xl font-semibold">
                Offering — Lesson 17
              </h1>

              <h2 className="text-lg text-gray-600">
                Trust in yoga-kṣema (Gita 9.22)
              </h2>

              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।<br />
                  तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥ ९.२२ ॥
                </div>
              </section>

              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  ananyāś cintayanto māṁ ye janāḥ paryupāsate <br />
                  teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham
                </p>
              </section>

              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Those who stay steadily connected to Me and live with a
                  devoted mind are supported by Me. I take care of what they
                  need and help protect what is already in place.
                </p>
              </section>

              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>ananyāḥ — undivided, not split in attitude</li>
                  <li>upāsate — worship, remain connected</li>
                  <li>nitya-abhiyuktāḥ — steadily joined, consistently aligned</li>
                  <li>yoga — gaining what is needed</li>
                  <li>kṣema — preserving what is gained</li>
                  <li>vahāmi — I carry, support</li>
                </ul>
              </section>

              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  This verse is not a promise that life will become easy or that
                  every preference will be fulfilled.

                  Krishna is teaching trust in the larger order.

                  When a person lives with offering, devotion, and alignment,
                  the constant fear of carrying life alone begins to drop.

                  Yoga-kṣema means the gaining of what is needed and the
                  protection of what is already there. In karma yoga, this
                  creates confidence: I still do my part, but I do not live as
                  though everything depends only on my personal control.
                </p>
              </section>

              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering is easier when trust is present.

                  If I think I alone must secure everything, I hold action
                  tightly. When I recognize Ishvara as the total order, I can
                  offer the action before doing it and perform my duty with a
                  lighter mind.
                </p>
              </section>

              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Where do I feel I am carrying life alone?

                  What changes when I do my part fully, but allow trust in the
                  larger order to be present?
                </p>
              </section>
            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-17-9-22" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-17-9-22" />
        </aside>
      </div>
    </div>
  );
}
