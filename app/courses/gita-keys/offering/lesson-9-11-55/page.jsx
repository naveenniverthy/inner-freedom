import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-9-11-55" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 9
              </h1>

              <h2 className="text-lg text-gray-600">
                Live a life of offering (Gita 11.55)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः ।<br />
                  निर्वैरः सर्वभूतेषु यः स मामेति पाण्डव ॥ ११.५५ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  mat-karma-kṛn mat-paramo mad-bhaktaḥ saṅga-varjitaḥ <br />
                  nirvairaḥ sarva-bhūteṣu yaḥ sa mām eti pāṇḍava
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  One who performs actions as offering,
                  stays aligned with the highest,
                  is free from attachment,
                  and holds no hatred toward anyone—

                  such a person moves toward clarity and freedom.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>mat-karma-kṛt — one who acts as offering</li>
                  <li>mat-paramaḥ — one who is aligned with the highest</li>
                  <li>saṅga-varjitaḥ — free from attachment</li>
                  <li>nirvairaḥ — free from hatred</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now describes a complete life of offering.

                  It is not only about action.

                  It includes:
                  right action,
                  right attitude,
                  and right relationship with others.

                  When offering matures:
                  attachment reduces,
                  comparison reduces,
                  negativity reduces.

                  The mind becomes lighter and more inclusive.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering is not isolated practice.

                  It transforms how we relate to people.

                  When action is offered,
                  ego reduces.

                  When ego reduces,
                  conflict reduces.

                  This leads to a more harmonious life.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Do my actions create tension with others,
                  or harmony?

                  What changes when I act
                  without attachment and negativity?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-9-11-55" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-9-11-55" />
        </aside>
      </div>
    </div>
  );
}
