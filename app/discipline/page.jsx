import Link from "next/link";
import StateOfMindCheck from "@/components/StateOfMindCheck";

export const metadata = {
  title: "Discipline",
  description:
    "Understand discipline as preparation of the mind for steadiness, clarity, and deeper understanding."
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/five-keys"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Five Keys
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Key Three
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Discipline (Sadhana)
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Sadhana Chatushtaya
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            In Vedanta, sadhana is a preparation of the mind, not a forceful
            attempt to become perfect. Sadhana Chatushtaya names four qualities
            that help a person become steady, clear, and ready for deeper
            understanding.
          </p>
          <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
            <span className="font-medium text-stone-900">In one line:</span>
            {" "}Prepare the mind.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Discipline, in this sense, is not harshness. It is a quiet
              willingness to prepare yourself for truth.
            </p>
            <p>
              It helps the mind become less scattered, less reactive, and more
              available. That is why this key matters so much.
            </p>
            <p>
              Traditional Vedanta describes this preparation through four
              foundations: Viveka, Vairagya, Shat Sampatti, and Mumukshutva.
            </p>
            <p>
              Sadhana prepares you to become a ready student, someone who can
              see clearly. In traditional teaching, this readiness is called
              being prepared (adhikari). It simply means the mind is steady,
              available, and capable of understanding.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Viveka
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Viveka is discernment. It is the ability to notice what is
              lasting and what is changing, and to see what truly helps versus
              what only distracts for a moment.
            </p>
            <p>
              Without viveka, life easily becomes driven by impulse and habit.
              With it, the mind begins to choose with more honesty.
            </p>
            <p>
              It is a quiet remembering that not everything calling for your
              attention deserves your trust.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Vairagya
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Vairagya is dispassion. It does not mean indifference. It means
              not leaning on changing things as though they can give lasting
              completeness.
            </p>
            <p>
              This brings maturity. You still care, love, work, and enjoy life,
              but you are less dependent on it to hold your inner balance.
            </p>
            <p>
              Something softens when enjoyment is allowed, but dependence is no
              longer mistaken for love.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Shat Sampatti
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Shat Sampatti means six inner qualities like calmness,
              self-restraint, trust, and steadiness. Together they help the
              mind become more composed and reliable.
            </p>
            <p>
              This is where daily discipline really lives. A little pause
              before reacting. A little restraint. A little more patience. Over
              time, these simple movements become inner strength.
            </p>
            <p>
              These qualities grow quietly, often through ordinary moments that
              ask for steadiness instead of drama.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Mumukshutva
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Mumukshutva is the sincere desire for freedom. It is the quiet
              inner readiness that says: I truly want to understand, and I do
              not want to keep living in confusion.
            </p>
            <p>
              This longing gives life to all the other qualities. Without it,
              practice fades. With it, the path becomes heartfelt and real.
            </p>
            <p>
              It is less a dramatic hunger and more a steady sincerity that
              keeps turning you toward what is true.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            State of Mind → What to Do (Gunas Guide)
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Vedanta describes three natural tendencies in the mind: tamas,
              rajas, and sattva.
            </p>
          </div>
          <div className="mt-6 space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Tamas
              </p>
              <p className="mt-2">
                Tamas feels heavy, dull, resistant, or shut down. When the mind
                is like this, do something small and active: stand up, walk,
                clean one space, or begin one simple task.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Rajas
              </p>
              <p className="mt-2">
                Rajas feels restless, pressured, or scattered. When the mind is
                like this, slow down, reduce what you are holding, and give
                full attention to one thing at a time.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Sattva
              </p>
              <p className="mt-2">
                Sattva feels clear, calm, and available. When the mind is like
                this, reflect, study, pray, or sit quietly with what you are
                learning.
              </p>
            </div>
            <p>
              These are not moral judgments. They are simple ways the mind can
              move. A more sattvic mind supports steadiness and makes clarity
              easier to receive.
            </p>
            <p className="font-medium text-stone-700">
              Tamas → act, Rajas → slow down, Sattva → understand.
            </p>
          </div>
        </section>

        <StateOfMindCheck />

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Five Keys
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              Within the Five Keys, discipline is the part that helps clarity
              stay alive in daily life.
            </p>
            <p>
              It supports responsibility, softens reactivity, and prepares the
              heart for acceptance and offering. In that way, sadhana is not
              separate from the path. It quietly strengthens the whole of it.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            Which of these four foundations feels most needed in your life
            right now: clearer discernment, less dependence, steadier inner
            qualities, or a deeper desire for freedom?
          </p>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Daily Practice
          </p>
          <div className="mt-4 space-y-5 text-base leading-8 text-stone-700 sm:text-lg">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Try this
              </p>
              <p className="mt-2">
                Choose one small act of inner order today: a few minutes of
                silence, a pause before reacting, or finishing one task
                carefully.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Reflect
              </p>
              <p className="mt-2">
                Which small discipline helps your mind feel a little clearer,
                steadier, or more available?
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Action as Practice
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Sadhana is not only what you do in quiet moments. It also
              includes how you act in daily life.
            </p>
            <p>
              Doing what is to be done, with the right attitude, without
              agitation, steadies the mind.
            </p>
            <p>
              In traditional teaching, this is called karma yoga.
            </p>
            <p>
              It is not about what you do. It is about how you do it.
            </p>
            <p>
              When action is done with care, without constant resistance or
              expectation, it becomes part of your discipline.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            What Comes Next
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Discipline helps prepare the mind and bring steadiness to daily
              life.
            </p>
            <p>
              But discipline becomes deeper when action is done with the right
              attitude.
            </p>
            <p>
              That is where offering begins.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/ishvara-arpana-buddhi"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Continue to Offering
            </Link>
            <Link
              href="/responsibility"
              className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Back to Responsibility
            </Link>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/ishvara-arpana-buddhi"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Key: Offering
          </Link>
        </div>
      </div>
    </main>
  );
}
