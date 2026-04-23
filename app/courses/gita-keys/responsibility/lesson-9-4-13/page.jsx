import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-9-4-13" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 9
      </h1>

      <h2 className="text-lg text-gray-600">
        Roles arise from the order of life (Gita 4.13)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः ।<br />
          तस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम् ॥ ४.१३ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          cātur-varṇyaṁ mayā sṛṣṭaṁ guṇa-karma-vibhāgaśaḥ <br />
          tasya kartāram api māṁ viddhy akartāram avyayam
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          The fourfold order of society was created by Me,
          based on qualities and actions.

          Though I am its creator,
          know Me as the non-doer and unchanging.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>guṇa — qualities (nature, tendencies)</li>
          <li>karma — action</li>
          <li>vibhāgaśaḥ — division, classification</li>
          <li>kartāram — creator</li>
          <li>akartāram — non-doer</li>
          <li>avyayam — unchanging</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna introduces an important idea.

          Society functions through roles.

          These roles are not random.

          They arise based on:
          one’s nature (guṇa)
          and one’s actions (karma).

          People have different tendencies,
          strengths, and inclinations.

          Responsibility is not imposed.
          It is aligned with this natural order.

          When roles are understood this way,
          they become meaningful,
          not restrictive.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility is not about comparison.

          It is about alignment.

          When I understand my nature,
          my strengths, and my situation,
          my responsibilities become clearer.

          Acting in alignment with this order
          brings efficiency and harmony.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          What are my natural strengths and tendencies?

          Are my actions aligned with them,
          or am I forcing something unnatural?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-9-4-13" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-9-4-13" />
        </aside>
      </div>
    </div>
  );
}
