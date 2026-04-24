import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-14-12-20" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 14
              </h1>

              <h2 className="text-lg text-gray-600">
                Living the dharma of devotion (Gita 12.20)
              </h2>

              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते ।<br />
                  श्रद्धधाना मत्परमा भक्तास्तेऽतीव मे प्रियाः ॥ १२.२० ॥
                </div>
              </section>

              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  ye tu dharmyāmṛtam idaṁ yathoktaṁ paryupāsate <br />
                  śraddadhānā mat-paramā bhaktās te &apos;tīva me priyāḥ
                </p>
              </section>

              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Those who live this sacred way of life as taught, with trust,
                  with Me as their highest value, are deeply dear to Me.
                </p>
              </section>

              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>dharmya-amṛtam — this righteous and life-giving teaching</li>
                  <li>paryupāsate — live by it steadily, remain devoted to it</li>
                  <li>śraddadhānāḥ — with trust and sincerity</li>
                  <li>mat-paramāḥ — taking Me as the highest</li>
                  <li>bhaktāḥ — devotees, those whose hearts are aligned</li>
                </ul>
              </section>

              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna ends this section on devotion by showing that bhakti
                  is not separate from maturity.

                  The person dear to Krishna is not merely emotional or
                  expressive. It is the one who lives this teaching with
                  steadiness, trust, and alignment.

                  In Vedanta, devotion matures as a refined relationship with
                  Ishvara. That maturity shows up as humility, emotional order,
                  and willingness to live by dharma. This is why devotion
                  supports acceptance: the heart stops fighting life so
                  constantly.
                </p>
              </section>

              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance becomes natural when there is trust in Ishvara.

                  Without that trust, acceptance can feel forced. With trust,
                  success and failure can be received more gracefully because
                  the mind knows it lives within a meaningful order, not in a
                  random and hostile world.
                </p>
              </section>

              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Is my relationship to the teaching only intellectual, or is it
                  becoming a way of living?

                  What would deeper trust look like in one area of my life
                  today?
                </p>
              </section>
            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-14-12-20" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-14-12-20" />
        </aside>
      </div>
    </div>
  );
}
