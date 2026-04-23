import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-13-2-56" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 13
      </h1>

      <h2 className="text-lg text-gray-600">
        Freedom from emotional disturbance (Gita 2.56)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः ।<br />
          वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते ॥ २.५६ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          duḥkheṣv anudvigna-manāḥ sukheṣu vigata-spṛhaḥ <br />
          vīta-rāga-bhaya-krodhaḥ sthita-dhīr munir ucyate
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          One whose mind is not disturbed in sorrow, who does not crave for pleasures,
          who is free from attachment, fear, and anger — such a person is called
          a sage of steady understanding.
        </p>
      </section>

      {/* Sandhi-vigraha */}
      <section>
        <h3 className="font-medium text-lg">Sandhi-vigraha</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          दुःखेषु अनुद्विग्न-मनाः । सुखेषु विगत-स्पृहः ।<br />
          वीत-राग-भय-क्रोधः स्थित-धीः मुनिः उच्यते ।
        </div>
      </section>

      {/* Anvaya */}
      <section>
        <h3 className="font-medium text-lg">Anvaya</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          दुःखेषु अनुद्विग्न-मनाः, सुखेषु विगत-स्पृहः,<br />
          वीत-राग-भय-क्रोधः सः स्थित-धीः मुनिः उच्यते।
        </div>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>duḥkheṣu — in sorrow</li>
          <li>anudvigna-manāḥ — not disturbed in mind</li>
          <li>sukheṣu — in pleasure</li>
          <li>vigata-spṛhaḥ — free from craving</li>
          <li>vīta — free from</li>
          <li>rāga — attachment</li>
          <li>bhaya — fear</li>
          <li>krodhaḥ — anger</li>
          <li>sthita-dhīḥ — one of steady understanding</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna continues describing the result of clarity.

          Life will still bring pleasure and pain.

          But the wise person is not shaken by sorrow,
          nor carried away by pleasure.

          Why?

          Because their sense of completeness does not depend on situations.

          When dependence drops, emotional extremes reduce.

          Attachment, fear, and anger lose their hold.
        </p>
      </section>

      {/* Connection to Clarity */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <p className="text-gray-700">
          Clarity does not remove situations.
          It removes inner dependence on them.

          When I depend on something for happiness,
          I fear losing it and get disturbed.

          When I am already complete,
          situations do not control my inner state.

          This is emotional maturity born of clarity.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          What situations disturb me the most?

          Is the disturbance coming from the situation,
          or from my dependence on it?
        </p>
      </section>
            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-13-2-56" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-13-2-56" />
        </aside>
      </div>
    </div>
  );
}
