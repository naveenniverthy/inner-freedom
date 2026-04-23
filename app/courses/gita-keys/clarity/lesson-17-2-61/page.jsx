import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-17-2-61" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 17
      </h1>

      <h2 className="text-lg text-gray-600">
        Mastery through alignment (Gita 2.61)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          तानि सर्वाणि संयम्य युक्त आसीत मत्परः ।<br />
          वशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता ॥ २.६१ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          tāni sarvāṇi saṁyamya yukta āsīta mat-paraḥ <br />
          vaśe hi yasyendriyāṇi tasya prajñā pratiṣṭhitā
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Having restrained all the senses, one should remain composed,
          with the mind focused on Me. For one whose senses are under control,
          their understanding is steady.
        </p>
      </section>

      {/* Sandhi-vigraha */}
      <section>
        <h3 className="font-medium text-lg">Sandhi-vigraha</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          तानि सर्वाणि संयम्य युक्तः आसीत मत्-परः ।<br />
          वशे हि यस्य इन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता ।
        </div>
      </section>

      {/* Anvaya */}
      <section>
        <h3 className="font-medium text-lg">Anvaya</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          तानि सर्वाणि संयम्य, युक्तः मत्-परः आसीत।<br />
          यस्य इन्द्रियाणि वशे, तस्य प्रज्ञा प्रतिष्ठिता।
        </div>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>saṁyamya — restraining</li>
          <li>yuktaḥ — disciplined, composed</li>
          <li>mat-paraḥ — centered on Me (Ishvara)</li>
          <li>vaśe — under control</li>
          <li>indriyāṇi — senses</li>
          <li>prajñā pratiṣṭhitā — steady understanding</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna now gives the method.

          Sense control is not just suppression.
          It requires a higher orientation.

          When the mind is aligned with a larger vision,
          the pull of the senses reduces naturally.

          “Mat-paraḥ” means living with a higher understanding,
          with alignment to Ishvara, to truth.

          Then discipline becomes natural,
          not forced.
        </p>
      </section>

      {/* Connection to Clarity */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <p className="text-gray-700">
          Clarity must guide discipline.

          If I only try to control the senses,
          it becomes struggle.

          If I have a clear vision of life,
          my choices align with it.

          Then control becomes effortless alignment.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          What is my higher orientation in life?

          Do my daily actions align with it,
          or are they driven by impulse?
        </p>
      </section>
            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-17-2-61" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-17-2-61" />
        </aside>
      </div>
    </div>
  );
}
