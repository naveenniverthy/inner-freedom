"use client";

import { useEffect, useState } from "react";

const shareUrl = "https://mokshakeys.com/#five-keys";
const shareTitle = "Moksha Keys — Five Keys to Inner Freedom";
const shareText =
  "A simple framework rooted in Vedanta: clarity, responsibility, discipline, acceptance, and offering.";
const twitterIntentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  shareText
)}&url=${encodeURIComponent(shareUrl)}`;

export default function FiveKeysShareButton() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleShare() {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl
        });
        return;
      } catch (error) {
        if (error?.name === "AbortError") {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    } catch {
      window.open(twitterIntentUrl, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400/40"
      aria-label="Share the Five Keys section"
    >
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
