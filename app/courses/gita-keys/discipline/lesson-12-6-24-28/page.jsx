import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-12-6-24-28" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 12
              </h1>

              <h2 className="text-lg text-gray-600">
                Training the mind step by step (Gita 6.24–28)
              </h2>

              {/* Verses (Selected flow) */}
              <section>
                <h3 className="font-medium text-lg">Verses (Selected)</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  सङ्कल्पप्रभवान्कामांस्त्यक्त्वा सर्वानशेषतः ।<br />
                  मनसैवेन्द्रियग्रामं विनियम्य समन्ततः ॥ ६.२४ ॥<br /><br />

                  शनैः शनैरुपरमेद् बुद्ध्या धृतिगृहीतया ।<br />
                  आत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत् ॥ ६.२५ ॥<br /><br />

                  यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् ।<br />
                  ततस्ततो नियम्यैतदात्मन्येव वशं नयेत् ॥ ६.२६ ॥<br /><br />

                  प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम् ।<br />
                  उपैति शान्तरजसं ब्रह्मभूतमकल्मषम् ॥ ६.२७ ॥
                </div>
              </section>

              {/* Transliteration (key lines) */}
              <section>
                <h3 className="font-medium text-lg">Transliteration (Key Lines)</h3>

                <p className="text-gray-700">
                  śanaiḥ śanaiḥ — gradually, step by step <br />
                  niyamya — bringing back, regulating <br />
                  ātma-saṁstham manaḥ — mind resting in the Self <br />
                  praśānta-manasaṁ — peaceful mind
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Let go of desires arising from imagination.

                  Gradually bring the mind to stillness,
                  using a steady and clear intellect.

                  Whenever the mind wanders,
                  gently bring it back again and again.

                  A peaceful and disciplined mind
                  gains deep happiness and clarity.
                </p>
              </section>

              {/* Key Ideas */}
              <section>
                <h3 className="font-medium text-lg">Key Ideas</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>śanaiḥ śanaiḥ — gradual practice</li>
                  <li>niyama — regulation</li>
                  <li>citta — mind</li>
                  <li>praśānti — calmness</li>
                  <li>dhṛti — steadiness</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now gives a practical method.

                  Discipline is not force.

                  It is gradual training.

                  The mind will wander.
                  That is natural.

                  The practice is simple:

                  Notice,
                  and bring it back.

                  Again and again.

                  Without frustration.

                  Without judgment.

                  Over time,
                  this creates steadiness.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is consistency,
                  not intensity.

                  Small, repeated effort
                  is more powerful than occasional extremes.

                  This verse shows how sādhana actually works in practice.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  When my mind wanders,
                  how do I respond?

                  Can I gently bring it back
                  without frustration?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-12-6-24-28" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-12-6-24-28" />
        </aside>
      </div>
    </div>
  );
}
