import { notFound } from "next/navigation";
import Link from "next/link";

import DharanaLayout from "@/components/vijnana/DharanaLayout";

import { dharanas } from "../dharanas";

export function generateStaticParams() {
  return dharanas.map((dharana) => ({
    slug: dharana.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dharana = dharanas.find((item) => item.slug === slug);

  if (!dharana) {
    return {
      title: "Vijnana Bhairava | 112 Days of Awareness",
    };
  }

  return {
    title: `Day ${dharana.day}: ${dharana.title} | Vijnana Bhairava`,
    description: Array.isArray(dharana.openingReflection)
      ? dharana.openingReflection[0]
      : dharana.openingReflection,
  };
}

export default async function VijnanaBhairavaDharanaPage({ params }) {
  const { slug } = await params;
  const dharana = dharanas.find((item) => item.slug === slug);

  if (!dharana) {
    notFound();
  }

  if (dharana.status === "coming-soon") {
    return (
      <main className="min-h-screen bg-sand-100 px-6 py-12 text-ink-900 sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-[760px] flex-col gap-6">
          <Link
            href="/courses/vijnana-bhairava"
            className="w-fit text-sm font-semibold text-sage-500 transition hover:text-sage-700"
          >
            Back to Course
          </Link>

          <section className="surface px-8 py-12 sm:px-10 sm:py-16">
            <p className="eyebrow">Vijnana Bhairava · Day {dharana.day}</p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              This contemplation is under review
            </h1>
            <p className="mt-7 max-w-reading text-base leading-8 text-gray-700 sm:text-lg">
              This day has been reserved in the 112-day journey, but the verse
              and practice guidance are still being reviewed before publication.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/courses/vijnana-bhairava" className="btn-secondary">
                Back to Course
              </Link>
              <Link
                href="/courses/vijnana-bhairava#course-introduction"
                className="btn-primary"
              >
                Review Course Introduction
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  const publishedDharanas = dharanas.filter((item) => item.status === "published");
  const currentIndex = publishedDharanas.findIndex(
    (item) => item.slug === dharana.slug,
  );
  const previousDharana =
    currentIndex > 0 ? publishedDharanas[currentIndex - 1] : null;
  const nextDharana =
    currentIndex >= 0 && currentIndex < publishedDharanas.length - 1
      ? publishedDharanas[currentIndex + 1]
      : null;

  return (
    <DharanaLayout
      day={dharana.day}
      title={dharana.title}
      openingReflection={dharana.openingReflection}
      sanskrit={dharana.sanskrit}
      transliteration={dharana.transliteration}
      rendering={dharana.rendering}
      meaning={dharana.meaning}
      practice={dharana.practice}
      noticing={dharana.noticing}
      misunderstandings={dharana.misunderstandings}
      reflection={dharana.reflection}
      freedom={dharana.freedom}
      previousHref={
        previousDharana
          ? `/courses/vijnana-bhairava/${previousDharana.slug}`
          : null
      }
      nextHref={
        nextDharana ? `/courses/vijnana-bhairava/${nextDharana.slug}` : null
      }
      navigationItems={dharanas}
      sourceText={dharana.sourceText}
      verseNumber={dharana.verseNumber}
      verseRange={dharana.verseRange}
      sourceStatus={dharana.sourceStatus}
    />
  );
}
