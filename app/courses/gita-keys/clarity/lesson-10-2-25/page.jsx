import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-10-2-25" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 10
      </h1>

      <h2 className="text-lg text-gray-600">
        The Self is beyond perception and thought (Gita 2.25)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते ।<br />
          तस्मादेवं विदित्वैनं नानुशोचितुमर्हसि ॥ २.२५ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          avyakto&apos;yam acintyo&apos;yam avikāryo&apos;yam ucyate <br />
          tasmād evaṁ viditvainaṁ nānuśocitum arhasi
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          This Self is said to be unmanifest, beyond thought, and unchanging.
          Knowing this, you should not grieve.
        </p>
      </section>

      {/* Sandhi-vigraha */}
      <section>
        <h3 className="font-medium text-lg">Sandhi-vigraha</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          अव्यक्तः अयम्, अचिन्त्यः अयम्, अविकार्यः अयम् उच्यते ।<br />
          तस्मात् एवम् विदित्वा एनम् न अनुशोचितुम् अर्हसि ॥
        </div>
      </section>

      {/* Anvaya */}
      <section>
        <h3 className="font-medium text-lg">Anvaya</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          अयम् अव्यक्तः, अचिन्त्यः, अविकार्यः उच्यते।<br />
          तस्मात् एवम् विदित्वा एनम्, त्वम् न अनुशोचितुम् अर्हसि।
        </div>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>avyaktaḥ — not an object of perception</li>
          <li>acintyaḥ — beyond thought</li>
          <li>avikāryaḥ — not subject to change</li>
          <li>viditvā — having understood</li>
          <li>na anuśocitum arhasi — you should not grieve</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <div className="text-gray-700 space-y-4">
          <p>Krishna now completes this teaching.</p>

          <p>
            The Self cannot be seen as an object. It cannot be fully grasped by
            thought.
          </p>

          <p>Why?</p>

          <p>Because it is the very subject — the one who sees and thinks.</p>

          <p>It is not something outside you. It is what you truly are.</p>

          <p>Once this is understood, grief loses its basis.</p>
        </div>
      </section>

      {/* Connection to Clarity */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <div className="text-gray-700 space-y-4">
          <p>Clarity is not about seeing something new.</p>

          <p>It is about recognizing what is already present but overlooked.</p>

          <p>
            The Self is not an object to be found. It is the very nature of the
            one who is searching.
          </p>

          <p>Seeing this clearly ends confusion.</p>
        </div>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          Can I observe the one who is aware, or is that awareness itself what I
          truly am?
        </p>
      </section>
            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-10-2-25" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-10-2-25" />
        </aside>
      </div>
    </div>
  );
}
