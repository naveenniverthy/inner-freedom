import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-34-14-19-20" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 34
      </h1>

      <h2 className="text-lg text-gray-600">
        Seeing beyond the guṇas (Gita 14.19–20)
      </h2>

      {/* Verses */}
      <section>
        <h3 className="font-medium text-lg">Verses</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          नान्यं गुणेभ्यः कर्तारं यदा द्रष्टानुपश्यति ।<br />
          गुणेभ्यश्च परं वेत्ति मद्भावं सोऽधिगच्छति ॥ १४.१९ ॥<br /><br />

          गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान् ।<br />
          जन्ममृत्युजरादुःखैर्विमुक्तोऽमृतमश्नुते ॥ १४.२० ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          nānyaṁ guṇebhyaḥ kartāraṁ yadā draṣṭānupaśyati <br />
          guṇebhyaś ca paraṁ vetti mad-bhāvaṁ so&apos;dhigacchati <br /><br />

          guṇān etān atītya trīn dehī deha-samudbhavān <br />
          janma-mṛtyu-jarā-duḥkhair vimukto&apos;mṛtam aśnute
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          When one sees that the guṇas alone are the doers,
          and knows that which is beyond the guṇas,
          one attains My nature.

          Transcending these three guṇas,
          which arise from the body,
          one is freed from birth, death, old age, and sorrow,
          and attains freedom.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>guṇāḥ — qualities of nature</li>
          <li>kartāram — doer</li>
          <li>draṣṭā — the seer</li>
          <li>paraṁ — beyond</li>
          <li>atītya — transcending</li>
          <li>dehī — the embodied one</li>
          <li>amṛtam — immortality, freedom</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna brings the teaching to a clear conclusion.

          All actions belong to the guṇas —
          the qualities of nature.

          Thinking, feeling, acting —
          all are movements within prakṛti.

          The Self is not the doer.

          When one clearly sees this,
          one also recognizes:
          “I am beyond all these movements.”

          This is freedom from identification with the body and mind.

          It is freedom from the cycle of change and limitation.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <p className="text-gray-700">
          Clarity matures into detachment.

          Not withdrawal,
          but correct understanding.

          When I see that all actions belong to nature,
          I stop taking ownership.

          When I see that I am beyond nature,
          I gain inner freedom.

          This is the culmination of clear seeing.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          Can I observe my thoughts and actions
          as movements within nature?

          What changes when I stop identifying as the doer?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-34-14-19-20" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-34-14-19-20" />
        </aside>
      </div>
    </div>
  );
}
