import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-12-8-7" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 12
      </h1>

      <h2 className="text-lg text-gray-600">
        Stay aligned even while acting (Gita 8.7)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च ।<br />
          मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम् ॥ ८.७ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          tasmāt sarveṣu kāleṣu mām anusmara yudhya ca <br />
          mayy arpita-mano-buddhir mām evaiṣyasy asaṁśayam
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Therefore, at all times remember Me and act.
          With your mind and intellect aligned to Me,
          you will reach Me without doubt.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>anusmara — remember, stay connected</li>
          <li>yudhya — act (perform your duty)</li>
          <li>arpita — offered, aligned</li>
          <li>mano-buddhi — mind and intellect</li>
          <li>asaṁśayam — without doubt</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna removes a false division.

          It is not:
          action or spirituality.

          It is:
          action with alignment.

          Arjuna is told:
          remember the truth,
          and act.

          The mind stays connected to clarity,
          while the body performs its role.

          This integration is the key.

          One does not need to withdraw from life
          to live meaningfully.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility becomes powerful
          when it is guided by clarity.

          Without clarity,
          action becomes mechanical or stressful.

          With clarity,
          action becomes meaningful and steady.

          This verse shows how to live both together.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          When I act, do I lose connection with clarity?

          How can I stay aligned
          while fully engaged in action?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-12-8-7" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-12-8-7" />
        </aside>
      </div>
    </div>
  );
}
