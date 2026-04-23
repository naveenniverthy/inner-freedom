import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-15-8-8-10" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 15
              </h1>

              <h2 className="text-lg text-gray-600">
                Steady focus shapes the mind (Gita 8.8–10)
              </h2>

              {/* Verses */}
              <section>
                <h3 className="font-medium text-lg">Verses</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  अभ्यासयोगयुक्तेन चेतसा नान्यगामिना ।<br />
                  परमं पुरुषं दिव्यं याति पार्थानुचिन्तयन् ॥ ८.८ ॥<br /><br />

                  कविं पुराणमनुशासितारमणोरणीयांसमनुस्मरेद्यः ।<br />
                  सर्वस्य धातारमचिन्त्यरूपमादित्यवर्णं तमसः परस्तात् ॥ ८.९ ॥<br /><br />

                  प्रयाणकाले मनसाऽचलेन भक्त्या युक्तो योगबलेन चैव ।<br />
                  भ्रुवोर्मध्ये प्राणमावेश्य सम्यक् स तं परं पुरुषमुपैति दिव्यम् ॥ ८.१० ॥
                </div>
              </section>

              {/* Transliteration (key lines) */}
              <section>
                <h3 className="font-medium text-lg">Transliteration (Key Lines)</h3>

                <p className="text-gray-700">
                  abhyāsa-yoga-yuktena — with repeated practice <br />
                  cetasā nānya-gāminā — mind not wandering <br />
                  acalena manasā — steady mind <br />
                  bhaktyā yuktaḥ — with devotion and alignment
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  With a mind trained through practice,
                  and not wandering elsewhere,
                  one stays steadily focused.

                  With such steadiness and alignment,
                  the mind becomes capable of remaining clear,
                  even in challenging moments.

                  A disciplined and focused mind
                  leads to deeper clarity and stability.
                </p>
              </section>

              {/* Key Ideas */}
              <section>
                <h3 className="font-medium text-lg">Key Ideas</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>abhyāsa — repeated practice</li>
                  <li>ekāgratā — one-pointed focus</li>
                  <li>acala — steady</li>
                  <li>bhakti — alignment, devotion</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna emphasizes consistency.

                  The mind becomes what it repeatedly does.

                  If it is scattered,
                  it becomes restless.

                  If it is trained,
                  it becomes steady.

                  Discipline is repetition.

                  Bringing the mind back,
                  again and again,
                  to what matters.

                  Over time,
                  this creates deep stability.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is long-term shaping of the mind.

                  Not one moment of effort,
                  but repeated alignment.

                  What we return to again and again
                  defines the quality of our mind.

                  This verse shows the power of consistent practice.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  What does my mind return to most often?

                  Is it strengthening clarity,
                  or distraction?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-15-8-8-10" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-15-8-8-10" />
        </aside>
      </div>
    </div>
  );
}
