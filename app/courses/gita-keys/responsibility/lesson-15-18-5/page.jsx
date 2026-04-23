import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-15-18-5" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 15
      </h1>

      <h2 className="text-lg text-gray-600">
        Certain actions must always be done (Gita 18.5)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          यज्ञदानतपःकर्म न त्याज्यं कार्यमेव तत् ।<br />
          यज्ञो दानं तपश्चैव पावनानि मनीषिणाम् ॥ १८.५ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          yajña-dāna-tapaḥ-karma na tyājyaṁ kāryam eva tat <br />
          yajño dānaṁ tapaś caiva pāvanāni manīṣiṇām
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Acts of offering, giving, and discipline
          should not be given up.
          They must be performed.

          These actions purify the mind
          of those who reflect deeply.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>yajña — offering, contribution</li>
          <li>dāna — giving, charity</li>
          <li>tapas — discipline</li>
          <li>na tyājyam — not to be given up</li>
          <li>pāvanāni — purifying</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna now identifies certain essential actions.

          These are not optional.

          They are part of living a refined life.

          Offering (yajña) means contributing beyond oneself.

          Giving (dāna) reduces selfishness.

          Discipline (tapas) builds strength and clarity.

          These actions shape the mind.

          They prepare it for deeper understanding.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility includes self-development.

          It is not only about external roles,
          but also about inner growth.

          These practices refine the individual,
          making responsible action natural and steady.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          In my daily life,
          where do I contribute, give, and practice discipline?

          Are these consistent,
          or occasional?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-15-18-5" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-15-18-5" />
        </aside>
      </div>
    </div>
  );
}
