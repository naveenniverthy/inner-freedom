import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-29-10-20" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 29
      </h1>

      <h2 className="text-lg text-gray-600">
        The Self in all beings (Gita 10.20)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          अहम् आत्मा गुडाकेश सर्वभूताशयस्थितः ।<br />
          अहम् आदिश्च मध्यं च भूतानामन्त एव च ॥ १०.२० ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          aham ātmā guḍākeśa sarva-bhūtāśaya-sthitaḥ <br />
          aham ādiś ca madhyaṁ ca bhūtānām anta eva ca
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          O Arjuna, I am the Self dwelling in the hearts of all beings.
          I am the beginning, the middle, and also the end of all beings.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>aham — I</li>
          <li>ātmā — the Self</li>
          <li>sarva-bhūta-āśaya-sthitaḥ — present in the hearts of all beings</li>
          <li>ādi — beginning</li>
          <li>madhyam — middle</li>
          <li>antaḥ — end</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna now gives a direct statement.

          The Self is not limited to one individual.

          It is the same presence in all beings.

          What you call “I” in yourself,
          is the same “I” in every being.

          That one reality appears as many.

          It is the source, sustenance, and resolution of all.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <p className="text-gray-700">
          Clarity removes the sense of separation.

          When I see myself as a separate individual,
          I feel isolated.

          When I recognize the same Self in all,
          the sense of division reduces.

          This vision brings unity, compassion, and freedom.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          When I say “I,” what do I refer to?

          Is that same presence available in others as well?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-29-10-20" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-29-10-20" />
        </aside>
      </div>
    </div>
  );
}
