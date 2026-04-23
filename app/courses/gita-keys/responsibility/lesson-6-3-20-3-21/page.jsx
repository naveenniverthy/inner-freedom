import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-6-3-20-3-21" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 6
      </h1>

      <h2 className="text-lg text-gray-600">
        Action influences others (Gita 3.20–21)
      </h2>

      {/* Verses */}
      <section>
        <h3 className="font-medium text-lg">Verses</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          कर्मणैव हि संसिद्धिमास्थिता जनकादयः ।<br />
          लोकसंग्रहमेवापि सम्पश्यन्कर्तुमर्हसि ॥ ३.२० ॥<br /><br />

          यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः ।<br />
          स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥ ३.२१ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          karmaṇaiva hi saṁsiddhim āsthitā janakādayaḥ <br />
          loka-saṅgraham evāpi sampaśyan kartum arhasi <br /><br />

          yad yad ācarati śreṣṭhas tat tad evetaro janaḥ <br />
          sa yat pramāṇaṁ kurute lokas tad anuvartate
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Even great people attained fulfillment through action.
          Therefore, you should act, keeping in mind the welfare of the world.

          Whatever a respected person does,
          others follow.
          The standards they set
          become the standard for society.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>saṁsiddhi — fulfillment</li>
          <li>loka-saṅgraha — welfare and stability of society</li>
          <li>śreṣṭhaḥ — leader, respected person</li>
          <li>pramāṇam — standard, example</li>
          <li>anuvartate — follows</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna expands responsibility beyond the individual.

          Action is not just personal.

          It has an impact on others.

          People observe, learn, and follow what they see.

          Especially those in visible roles —
          leaders, parents, teachers —
          shape behavior through their actions.

          Therefore, action must be responsible,
          not just for personal benefit,
          but for the larger good.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility includes awareness of influence.

          My actions affect not only me,
          but also others around me.

          Living responsibly means:
          acting in a way that supports harmony,
          clarity, and order in the larger system.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          Who is influenced by my actions?

          What example am I setting through the way I live?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-6-3-20-3-21" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-6-3-20-3-21" />
        </aside>
      </div>
    </div>
  );
}
