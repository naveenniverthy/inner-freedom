import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-11-2-29" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 11
      </h1>

      <h2 className="text-lg text-gray-600">
        The Self is a wonder to know (Gita 2.29)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          आश्चर्यवत्पश्यति कश्चिदेनम्<br />
          आश्चर्यवद्वदति तथैव चान्यः ।<br />
          आश्चर्यवच्चैनमन्यः शृणोति<br />
          श्रुत्वाऽप्येनं वेद न चैव कश्चित् ॥ २.२९ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          āścaryavat paśyati kaścid enam <br />
          āścaryavad vadati tathaiva cānyaḥ <br />
          āścaryavac cainam anyaḥ śṛṇoti <br />
          śrutvāpy enaṁ veda na caiva kaścit
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Someone sees this Self as a wonder. Another speaks of it as a wonder.
          Another hears of it as a wonder. Yet even after hearing of it,
          hardly anyone truly knows it.
        </p>
      </section>

      {/* Sandhi-vigraha */}
      <section>
        <h3 className="font-medium text-lg">Sandhi-vigraha</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          आश्चर्यवत् पश्यति कश्चित् एनम् ।<br />
          आश्चर्यवत् वदति तथा एव च अन्यः ।<br />
          आश्चर्यवत् च एनम् अन्यः शृणोति ।<br />
          श्रुत्वा अपि एनम् वेद न च एव कश्चित् ॥
        </div>
      </section>

      {/* Anvaya */}
      <section>
        <h3 className="font-medium text-lg">Anvaya</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          कश्चित् एनम् आश्चर्यवत् पश्यति।<br />
          तथा एव च अन्यः एनम् आश्चर्यवत् वदति।<br />
          अन्यः च एनम् आश्चर्यवत् शृणोति।<br />
          श्रुत्वा अपि च कश्चित् एव एनम् न वेद।
        </div>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>āścaryavat — as a wonder, with amazement</li>
          <li>paśyati — sees</li>
          <li>kaścit — someone</li>
          <li>enam — this Self</li>
          <li>vadati — speaks</li>
          <li>śṛṇoti — hears</li>
          <li>śrutvā api — even after hearing</li>
          <li>veda — truly knows</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna says the Self is not easy to understand.

          It is not difficult because it is far away.
          It is difficult because it is too close.

          We can easily study objects.
          We can think about the world.
          But the Self is the very one because of which everything is known.

          So even hearing this teaching is rare.
          Speaking it properly is rare.
          Understanding it clearly is rarer still.

          The Self is truly a wonder.
        </p>
      </section>

      {/* Connection to Clarity */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <p className="text-gray-700">
          Clarity requires humility.

          The truth of the Self is not gained by quick opinion,
          clever words, or surface understanding.

          It needs listening, reflection, and a prepared mind.

          This verse reminds us that self-knowledge is subtle.
          It deserves care, seriousness, and wonder.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          I know many things in the world.
          But do I know the one because of which all knowing is possible?
        </p>
      </section>
            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-11-2-29" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-11-2-29" />
        </aside>
      </div>
    </div>
  );
}
