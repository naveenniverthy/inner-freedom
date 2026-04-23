import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-4-2-64-65" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 4
              </h1>

              <h2 className="text-lg text-gray-600">
                Balanced engagement brings clarity (Gita 2.64–65)
              </h2>

              {/* Verses */}
              <section>
                <h3 className="font-medium text-lg">Verses</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन् ।<br />
                  आत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति ॥ २.६४ ॥<br /><br />

                  प्रसादे सर्वदुःखानां हानिरस्योपजायते ।<br />
                  प्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते ॥ २.६५ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  rāga-dveṣa-viyuktais tu viṣayān indriyaiś caran <br />
                  ātma-vaśyair vidheyātmā prasādam adhigacchati <br /><br />

                  prasāde sarva-duḥkhānāṁ hānir asyopajāyate <br />
                  prasanna-cetaso hy āśu buddhiḥ paryavatiṣṭhate
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Moving among objects with senses free from likes and dislikes,
                  and under control,
                  one gains inner calm.

                  In that calmness,
                  all sorrow reduces,
                  and the mind becomes clear and steady.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>rāga — attraction</li>
                  <li>dveṣa — aversion</li>
                  <li>ātma-vaśya — self-controlled</li>
                  <li>prasāda — inner calm, clarity</li>
                  <li>prasanna-cetasaḥ — clear, peaceful mind</li>
                  <li>buddhiḥ — intellect</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now refines discipline.

                  Discipline is not withdrawal from life.

                  It is balanced engagement.

                  The senses continue to interact with the world,
                  but without strong likes and dislikes.

                  When attraction and aversion reduce,
                  the mind becomes lighter.

                  That lightness becomes inner calm.

                  From that calmness,
                  clarity naturally arises.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is not rigid control.

                  It is intelligent balance.

                  When I am free from compulsive likes and dislikes,
                  I can engage fully,
                  yet remain steady.

                  This steadiness is what supports clarity.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  What are my strongest likes and dislikes?

                  How do they disturb my mind?

                  What would balanced engagement look like for me?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-4-2-64-65" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-4-2-64-65" />
        </aside>
      </div>
    </div>
  );
}
