import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-14-6-46" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 14
              </h1>

              <h2 className="text-lg text-gray-600">
                The disciplined life is the highest (Gita 6.46)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  तपस्विभ्योऽधिको योगी ज्ञानिभ्योऽपि मतोऽधिकः ।<br />
                  कर्मिभ्यश्चाधिको योगी तस्माद्योगी भवार्जुन ॥ ६.४६ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  tapasvibhyo&apos;dhiko yogī jñānibhyo&apos;pi mato&apos;dhikaḥ <br />
                  karmibhyaś cādhiko yogī tasmād yogī bhavārjuna
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  The disciplined person (yogī) is superior to those who only practice austerity,
                  superior even to those with mere intellectual knowledge,
                  and superior to those who act without inner alignment.

                  Therefore, become a disciplined person.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>yogī — disciplined, integrated person</li>
                  <li>tapasvī — one who practices austerity</li>
                  <li>jñānī — one with knowledge</li>
                  <li>karmī — one who acts</li>
                  <li>adhikaḥ — superior</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now places discipline at the center.

                  A disciplined person is not just someone who:
                  thinks,
                  or performs rituals,
                  or does actions.

                  A yogī is integrated.

                  Thoughts, actions, and values are aligned.

                  Without discipline,
                  knowledge does not stay.

                  Without discipline,
                  action becomes mechanical.

                  Discipline holds everything together.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is not one part of life.

                  It is the foundation of all growth.

                  It connects knowledge and action.

                  It brings consistency.

                  This verse shows why sādhana is essential,
                  not optional.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Is my life integrated,
                  or are my thoughts and actions disconnected?

                  What would it mean for me
                  to live as a disciplined person?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-14-6-46" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-14-6-46" />
        </aside>
      </div>
    </div>
  );
}
