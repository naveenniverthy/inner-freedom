import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-3-4-18" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 3
              </h1>

              <h2 className="text-lg text-gray-600">
                Seeing action correctly (Gita 4.18)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः ।<br />
                  स बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत् ॥ ४.१८ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  karmaṇy akarma yaḥ paśyed akarmaṇi ca karma yaḥ <br />
                  sa buddhimān manuṣyeṣu sa yuktaḥ kṛtsna-karma-kṛt
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  One who sees in action the absence of doership,
                  and in inaction the presence of action,
                  is wise.

                  Such a person is integrated
                  and truly understands action.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>karmaṇi — in action</li>
                  <li>akarma — absence of doership</li>
                  <li>paśyet — sees, understands</li>
                  <li>buddhimān — wise</li>
                  <li>yuktaḥ — integrated</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna introduces a subtle understanding.

                  Externally, action continues.

                  Internally, the sense of “I am the doer” reduces.

                  This is “seeing in action, inaction.”

                  The body and mind act,
                  but the person does not carry the burden of doership.

                  On the other hand,
                  even when one is not acting externally,
                  the mind may still be active.

                  True freedom is not in stopping action,
                  but in correcting the understanding of action.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering helps reduce the sense of doership.

                  When I offer action,
                  I stop seeing myself as the sole doer.

                  Action continues,
                  but the inner load drops.

                  This leads to lightness and clarity.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  When I act,
                  do I feel “I alone am doing everything”?

                  What changes when I drop that sense
                  and simply act?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-3-4-18" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-3-4-18" />
        </aside>
      </div>
    </div>
  );
}
