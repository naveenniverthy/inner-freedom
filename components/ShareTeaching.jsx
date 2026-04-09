"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, Copy, Facebook, MessageCircle, Share2, Twitter } from "lucide-react";

function resolveUrl(url) {
  if (typeof window === "undefined") {
    return url;
  }

  try {
    return new URL(url, window.location.origin).toString();
  } catch {
    return window.location.href;
  }
}

export default function ShareTeaching({ title, text, url, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const menuId = useId();

  const shareUrl = resolveUrl(url);
  const shareText = text?.trim() || title;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);
  const encodedTitle = encodeURIComponent(title);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handlePointerDown(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setIsOpen(false);
    } catch {
      window.prompt("Copy this link", shareUrl);
    }
  }

  async function handlePrimaryAction() {
    const canUseNativeShare =
      typeof navigator !== "undefined" &&
      typeof navigator.share === "function" &&
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (canUseNativeShare) {
      try {
        await navigator.share({
          title,
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

    setIsOpen((open) => !open);
  }

  const actions = [
    {
      label: copied ? "Link copied" : "Copy link",
      icon: copied ? Check : Copy,
      onSelect: handleCopy
    },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`
    },
    {
      label: "X / Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`
    },
    {
      label: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`
    }
  ];

  return (
    <div
      className={`absolute right-4 top-4 z-10 sm:right-5 sm:top-5 ${className}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={`Share ${title}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={handlePrimaryAction}
        className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-stone-300/70 bg-white/85 text-stone-500 shadow-sm backdrop-blur-sm transition duration-200 hover:border-stone-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400/40 sm:min-h-9 sm:min-w-9 sm:opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
      >
        <Share2 className="h-4 w-4" aria-hidden="true" />
      </button>

      <div
        ref={menuRef}
        id={menuId}
        role="menu"
        aria-label={`Share options for ${title}`}
        className={`absolute right-0 mt-2 min-w-[11rem] rounded-2xl border border-stone-200/90 bg-white/95 p-1.5 shadow-lg backdrop-blur-sm transition duration-200 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        {actions.map((action) => {
          const Icon = action.icon;

          if (action.href) {
            return (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noreferrer"
                role="menuitem"
                className="flex min-h-10 items-center gap-2 rounded-[0.9rem] px-3 py-2 text-sm text-stone-700 transition hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400/30"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-4 w-4 text-stone-500" aria-hidden="true" />
                <span>{action.label}</span>
              </a>
            );
          }

          return (
            <button
              key={action.label}
              type="button"
              role="menuitem"
              onClick={action.onSelect}
              className="flex min-h-10 w-full items-center gap-2 rounded-[0.9rem] px-3 py-2 text-left text-sm text-stone-700 transition hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400/30"
            >
              <Icon className="h-4 w-4 text-stone-500" aria-hidden="true" />
              <span>{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
