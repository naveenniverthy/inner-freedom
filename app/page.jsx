import Link from "next/link";
import FiveKeysShareButton from "@/components/FiveKeysShareButton";
import { fiveKeys, fiveKeyHrefByTitle } from "@/lib/fiveKeys";

import { getCourseLinks } from "./course-links";

export const metadata = {
  title: "Moksha Keys | Five Keys to Inner Freedom",
  description:
    "A calm, practical introduction to inner freedom through five simple keys: clarity, responsibility, discipline, acceptance, and offering.",
  alternates: {
    canonical: "https://mokshakeys.com/"
  },
  openGraph: {
    title: "Moksha Keys | Five Keys to Inner Freedom",
    description:
      "A calm, practical introduction to inner freedom through five simple keys: clarity, responsibility, discipline, acceptance, and offering.",
    url: "https://mokshakeys.com/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Moksha - Five Keys to Inner Freedom"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Moksha Keys | Five Keys to Inner Freedom",
    description:
      "A calm, practical introduction to inner freedom through five simple keys: clarity, responsibility, discipline, acceptance, and offering.",
    images: ["/twitter-image"]
  }
};

export default function Page() {
  const courseLinks = getCourseLinks();

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-8">
        <section className="rounded-[2rem] bg-white px-8 py-12 text-center shadow-sm ring-1 ring-stone-200 sm:px-12 sm:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Five Keys to Inner Freedom
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Moksha
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            A calm guide to understanding yourself and meeting life with more
            clarity.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            Rooted in Advaita Vedanta, this is for anyone who wants a simpler,
            steadier way to live and a deeper understanding of what freedom
            means.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-500 sm:text-base">
            If life feels fine, but something still feels missing,{" "}
            <Link
              href="/why"
              className="font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-900"
            >
              start here
            </Link>
            .
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Start Here
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600">
            Begin with Clarity, move through the Five Keys, and when you want
            to stay longer with the teaching, continue into guided study.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/clarity"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Start with Clarity
            </Link>
            <Link
              href="/five-keys"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-center text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Explore the Five Keys
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Today&apos;s Practice
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600">
            Pick one key, try one reflection or practice, and notice what
            becomes clearer in the middle of your day.
          </p>
        </section>

        <section
          id="five-keys"
          className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <h2 className="text-2xl font-semibold text-stone-900">Five Keys</h2>
            <FiveKeysShareButton />
          </div>
          <div className="mt-5 space-y-3">
            <p className="max-w-2xl text-base leading-8 text-stone-600">
              These five keys do not create freedom.
            </p>
            <p className="max-w-2xl text-base leading-8 text-stone-600">
              They help you understand yourself and meet life with more
              clarity, steadiness, and honesty.
            </p>
            {fiveKeys.map((card) => (
              <Link
                key={card.title}
                href={fiveKeyHrefByTitle[card.title]}
                className="block rounded-[1.25rem] bg-stone-50 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-sm"
              >
                <h3 className="text-lg font-semibold text-stone-900">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-stone-500">
                  {card.sanskrit}
                </p>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Go Deeper
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600">
            Begin with Inquiry into the Self. Then continue with Foundations
            of Self-Knowledge for a clearer understanding. The 20 Values for
            Inner Growth supports this journey as a preparatory study.
          </p>
          <div className="mt-4 space-y-3">
            {courseLinks.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="flex items-center justify-between gap-4 rounded-[1.25rem] bg-stone-50 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-sm"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold text-stone-900">
                      {course.title}
                    </h2>
                    {course.startHere ? (
                      <span className="rounded-full bg-stone-200 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-700">
                        Start Here
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm leading-7 text-stone-600">
                    {course.description}
                  </p>
                </div>
                <span className="pt-1 text-sm font-medium text-stone-600">
                  Open
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
