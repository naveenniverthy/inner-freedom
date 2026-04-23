import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-5-2-17" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 5
      </h1>

      <h2 className="text-lg text-gray-600">
        That which pervades everything is indestructible (Gita 2.17)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          अविनाशि तु तद्विद्धि येन सर्वमिदं ततम् ।<br />
          विनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति ॥ २.१७ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          avināśi tu tad viddhi yena sarvam idaṁ tatam <br />
          vināśam avyayasyāsya na kaścit kartum arhati
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Know that to be indestructible by which all this is pervaded.
          No one can bring about the destruction of this unchanging reality.
        </p>
      </section>

      {/* Sandhi-vigraha */}
      <section>
        <h3 className="font-medium text-lg">Sandhi-vigraha</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          अविनाशि तु तत् विद्धि येन सर्वम् इदम् ततम् ।<br />
          विनाशम् अव्ययस्य अस्य न कश्चित् कर्तुम् अर्हति ॥
        </div>
      </section>

      {/* Anvaya */}
      <section>
        <h3 className="font-medium text-lg">Anvaya</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          येन इदम् सर्वम् ततम्, तत् अविनाशि विद्धि।<br />
          अस्य अव्ययस्य विनाशम् कश्चित् कर्तुम् न अर्हति।
        </div>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>avināśi — indestructible</li>
          <li>tat — that (the Self)</li>
          <li>yena — by which</li>
          <li>sarvam idam — all this</li>
          <li>tatam — pervaded</li>
          <li>avyayasya — of the unchanging</li>
          <li>vināśam — destruction</li>
          <li>na kaścit — no one</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <div className="text-gray-700 space-y-4">
          <p>Krishna now points to something deeper.</p>

          <p>
            The Self is not just something inside the body. It is that because
            of which everything is known.
          </p>

          <p>It pervades all experience.</p>

          <p>
            Just like space is present everywhere, the Self is present in all
            bodies and all experiences.
          </p>

          <p>
            And because it is not limited to any one thing, it cannot be
            destroyed.
          </p>
        </div>
      </section>

      {/* Connection to Clarity */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <div className="text-gray-700 space-y-4">
          <p>Clarity expands our understanding of identity.</p>

          <p>I am not just this body. I am not just this mind.</p>

          <p>
            The same consciousness that is present in me is present in all
            beings.
          </p>

          <p>Seeing this removes the sense of limitation.</p>
        </div>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <div className="text-gray-700 space-y-4">
          <p>What is it because of which all my experiences are known?</p>

          <p>
            Is that presence limited, or is it always there regardless of what I
            experience?
          </p>
        </div>
      </section>
            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-5-2-17" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-5-2-17" />
        </aside>
      </div>
    </div>
  );
}
