import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-3-2-13" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-2xl font-semibold">
        Clarity — Lesson 3
      </h1>

      <h2 className="text-lg text-gray-600">
        Change belongs to the body, not to the Self (Gita 2.13)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा ।<br />
          तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ॥ २.१३ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          dehino&apos;smin yathā dehe kaumāraṁ yauvanaṁ jarā <br />
          tathā dehāntara-prāptir dhīras tatra na muhyati
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Just as in this body the embodied one passes through childhood,
          youth, and old age, in the same way there is the gaining of another body.
          The wise person is not deluded by this.
        </p>
      </section>

      {/* Sandhi-vigraha */}
      <section>
        <h3 className="font-medium text-lg">Sandhi-vigraha</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          देहिनः अस्मिन् यथा अस्मिन् देहे कौमारम् यौवनम् जरा ।<br />
          तथा देहान्तर-प्राप्तिः धीरः तत्र न मुह्यति ॥
        </div>
      </section>

      {/* Anvaya */}
      <section>
        <h3 className="font-medium text-lg">Anvaya</h3>

        <div className="bg-gray-50 p-4 rounded-xl leading-relaxed text-gray-800">
          देहिनः अस्मिन् देहे यथा कौमारम्, यौवनम्, जरा; तथा देहान्तर-प्राप्तिः।
          तत्र धीरः न मुह्यति।
        </div>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>dehinaḥ — of the embodied one</li>
          <li>dehe — in the body</li>
          <li>kaumāram — childhood</li>
          <li>yauvanam — youth</li>
          <li>jarā — old age</li>
          <li>dehāntara-prāptiḥ — gaining another body</li>
          <li>dhīraḥ — a steady, wise person</li>
          <li>na muhyati — is not deluded</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <div className="text-gray-700 space-y-4">
          <p>Krishna gives Arjuna a simple and direct example.</p>

          <p>
            In one lifetime itself, the body keeps changing. The child&apos;s body
            is gone. The youth&apos;s body is gone. The old body also changes.
          </p>

          <p>
            Yet through all these changes, the person says, “I was a child,” “I
            was young,” “now I am old.”
          </p>

          <p>
            The body changes, but the one to whom these changes happen remains.
          </p>

          <p>
            In the same way, the Gita says, the passing from one body to another
            is also a change that belongs to the body, not to the Self.
          </p>
        </div>
      </section>

      {/* Connection to Clarity */}
      <section>
        <h3 className="font-medium text-lg">Connection to Clarity</h3>

        <div className="text-gray-700 space-y-4">
          <p>
            Clarity comes when we learn to distinguish between the changing and
            the changeless.
          </p>

          <p>
            Childhood changes into youth. Youth changes into old age. The body
            is always changing.
          </p>

          <p>
            But the conscious being, the dehi, is not reduced to any one stage
            of the body.
          </p>

          <p>
            This verse helps us see that identity based only on the body is
            incomplete.
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <div className="text-gray-700 space-y-4">
          <p>
            My body has changed many times since childhood. Yet I still say,
            “I.”
          </p>

          <p>
            What is that constant “I” that remains through all these changes?
          </p>
        </div>
      </section>
            </main>
          </div>
          <GitaLessonNav sectionKey="clarity" lessonSlug="lesson-3-2-13" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="clarity" currentLessonSlug="lesson-3-2-13" />
        </aside>
      </div>
    </div>
  );
}
