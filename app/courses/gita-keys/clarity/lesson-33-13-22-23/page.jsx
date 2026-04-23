import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-33-13-22-23" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 33
      </h1>

      <h2 className="text-lg text-gray-600">
        The Self as witness, experiencer, and non-doer (Gita 13.22–23)
      </h2>

      {/* Verses */}
      <section>
        <h3 className="font-medium text-lg">Verses</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          पुरुषः प्रकृतिस्थो हि भुङ्क्ते प्रकृतिजान्गुणान् ।<br />
          कारणं गुणसङ्गोऽस्य सदसद्योनिजन्मसु ॥ १३.२२ ॥<br /><br />

          उपद्रष्टानुमन्ता च भर्ता भोक्ता महेश्वरः ।<br />
          परमात्मेति चाप्युक्तो देहेऽस्मिन्पुरुषः परः ॥ १३.२३ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          puruṣaḥ prakṛti-stho hi bhuṅkte prakṛti-jān guṇān <br />
          kāraṇaṁ guṇa-saṅgo&apos;sya sad-asad-yoni-janmasu <br /><br />

          upadraṣṭānumantā ca bhartā bhoktā maheśvaraḥ <br />
          paramātmeti cāpy ukto dehe&apos;smin puruṣaḥ paraḥ
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          The Self, associated with nature, appears to experience the qualities of nature.
          Attachment to these qualities becomes the cause of birth in higher and lower conditions.

          The same Self is the witness, the permitter, the sustainer, and the experiencer.
          It is called the Supreme Self in this body.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>puruṣaḥ — the Self</li>
          <li>prakṛti — nature (body-mind)</li>
          <li>guṇāḥ — qualities (sattva, rajas, tamas)</li>
          <li>upadraṣṭā — witness</li>
          <li>anumantā — permitter</li>
          <li>bhartā — sustainer</li>
          <li>bhoktā — experiencer</li>
          <li>paramātmā — the supreme Self</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna explains how confusion happens.

          The Self is pure awareness.

          But when associated with the body and mind,
          it appears as though it is experiencing.

          It seems:
          “I am happy,”
          “I am sad,”
          “I am acting.”

          In reality,
          experiences belong to the mind,
          actions belong to the body.

          The Self is the witness.

          It illumines everything,
          allows everything,
          but does not act.

          Understanding this breaks the sense of bondage.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <p className="text-gray-700">
          Clarity removes misidentification.

          When I take myself as the experiencer,
          I become bound by pleasure and pain.

          When I recognize myself as the witness,
          experiences continue,
          but I am free from them.

          This is a major shift in identity.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          When I say “I am experiencing,”
          what exactly is experiencing?

          Can I see that experiences are known,
          and I am the knower of them?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-33-13-22-23" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-33-13-22-23" />
        </aside>
      </div>
    </div>
  );
}
