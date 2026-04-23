import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-17-18-41-48" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 17
      </h1>

      <h2 className="text-lg text-gray-600">
        Living according to one’s nature (Gita 18.41–48)
      </h2>

      {/* Verses (key excerpts for flow) */}
      <section>
        <h3 className="font-medium text-lg">Verses (Selected)</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          ब्राह्मणक्षत्रियविशां शूद्राणां च परन्तप ।<br />
          कर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणैः ॥ १८.४१ ॥<br /><br />

          स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः ।<br />
          स्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु ॥ १८.४५ ॥<br /><br />

          यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम् ।<br />
          स्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः ॥ १८.४६ ॥<br /><br />

          श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।<br />
          स्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम् ॥ १८.४७ ॥<br /><br />

          सहजं कर्म कौन्तेय सदोषमपि न त्यजेत् ।<br />
          सर्वारम्भा हि दोषेण धूमेनाग्निरिवावृताः ॥ १८.४८ ॥
        </div>
      </section>

      {/* Transliteration (shortened for readability) */}
      <section>
        <h3 className="font-medium text-lg">Transliteration (Key Lines)</h3>

        <p className="text-gray-700">
          sva-bhāva-prabhavair guṇaiḥ <br />
          sve sve karmaṇy abhirataḥ <br />
          sva-karmaṇā tam abhyarcya <br />
          śreyān svadharmaḥ <br />
          sahajaṁ karma na tyajet
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Duties are divided based on one’s nature and qualities.

          By being committed to one’s own role,
          a person attains fulfillment.

          By performing one’s own actions as an offering,
          one grows and matures.

          One’s own duty, even if imperfect,
          is better than another’s well performed.

          Actions aligned with one’s nature should not be abandoned,
          even if they have some limitations.
        </p>
      </section>

      {/* Key Ideas */}
      <section>
        <h3 className="font-medium text-lg">Key Ideas</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>svabhāva — one’s nature</li>
          <li>svakarma — one’s role/action</li>
          <li>abhirataḥ — committed engagement</li>
          <li>sahajam — natural, inborn</li>
          <li>siddhi — fulfillment</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna now gives a complete framework of responsibility.

          Each person is different.

          Different strengths,
          different tendencies,
          different roles.

          Responsibility is not about doing everything.

          It is about doing what is yours to do.

          When you act according to your nature,
          action becomes natural and sustainable.

          No action is perfect.

          Every role has limitations.

          But avoiding your role due to imperfection
          creates more confusion than clarity.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility becomes clear
          when you understand yourself.

          Not comparison,
          not imitation,
          but alignment.

          When action matches nature,
          effort becomes ease,
          and growth becomes steady.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          What feels natural for me to do?

          Where am I resisting my role
          because it is not perfect?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-17-18-41-48" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-17-18-41-48" />
        </aside>
      </div>
    </div>
  );
}
