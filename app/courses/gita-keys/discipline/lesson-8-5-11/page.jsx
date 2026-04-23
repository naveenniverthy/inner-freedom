import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-8-5-11" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 8
              </h1>

              <h2 className="text-lg text-gray-600">
                Discipline through selfless action (Gita 5.11)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि ।<br />
                  योगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वाऽत्मशुद्धये ॥ ५.११ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  kāyena manasā buddhyā kevalair indriyair api <br />
                  yoginaḥ karma kurvanti saṅgaṁ tyaktvā ātma-śuddhaye
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  The disciplined person acts with body, mind, intellect, and senses,
                  giving up attachment,
                  for the sake of inner purification.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>kāyena — through the body</li>
                  <li>manasā — through the mind</li>
                  <li>buddhyā — through the intellect</li>
                  <li>indriyair — through the senses</li>
                  <li>saṅgaṁ tyaktvā — giving up attachment</li>
                  <li>ātma-śuddhaye — for inner purification</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now connects discipline with action.

                  Discipline is not separate from daily life.

                  Every action can become sādhana.

                  When actions are performed:
                  with attention,
                  with clarity,
                  without attachment,

                  they refine the mind.

                  The entire personality becomes aligned —
                  body, mind, and intellect.

                  This alignment is inner purification.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is not only about sitting for practice.

                  It is about how we act throughout the day.

                  When action is done with awareness and detachment,
                  it becomes a tool for growth.

                  This transforms everyday life into sādhana.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Can I treat my daily actions as a form of practice?

                  What changes when I act with awareness
                  instead of habit?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-8-5-11" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-8-5-11" />
        </aside>
      </div>
    </div>
  );
}
