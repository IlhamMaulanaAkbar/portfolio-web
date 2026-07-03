"use client";

import Image from "next/image";
import { XIcon, Maximize2Icon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type ProjectPreviewImageProps = {
  alt: string;
  src: string;
};

export default function ProjectPreviewImage({
  alt,
  src,
}: ProjectPreviewImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function openLightbox() {
    setIsOpen(true);
    requestAnimationFrame(() => setIsVisible(true));
  }

  const closeLightbox = useCallback(() => {
    setIsVisible(false);
    window.setTimeout(() => setIsOpen(false), 180);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [closeLightbox, isOpen]);

  return (
    <>
      {/* Browser-chrome mockup card */}
      <button
        className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
        onClick={openLightbox}
        type="button"
        aria-label={`Open ${alt} full preview`}
      >
        {/* Browser top bar */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5 dark:border-slate-700 dark:bg-slate-800">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <div className="ml-3 flex-1 rounded-md bg-slate-200 px-3 py-1 text-left text-xs text-slate-400 dark:bg-slate-700 dark:text-slate-500">
            {alt.toLowerCase().replace(/\s+/g, "-")}.web.app
          </div>
        </div>

        {/* Screenshot area */}
        <div className="relative aspect-[1.6/1] w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
          <Image
            alt={alt}
            className="object-cover object-top"
            fill
            priority
            sizes="(min-width: 768px) 520px, 100vw"
            src={src}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-blue-500/0 transition-all duration-300 group-hover:bg-blue-500/10">
            <span className="flex scale-75 items-center gap-2 rounded-xl border border-white/60 bg-white/90 px-4 py-2 text-xs font-bold text-slate-700 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 dark:border-slate-600/60 dark:bg-slate-900/90 dark:text-white">
              <Maximize2Icon size={13} />
              Click to expand
            </span>
          </div>
        </div>
      </button>

      {/* Lightbox */}
      {isOpen ? (
        <div
          className={`fixed inset-0 z-[100] grid place-items-center bg-black/80 p-5 backdrop-blur-sm transition-opacity duration-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeLightbox}
          role="presentation"
        >
          <button
            aria-label="Close image preview"
            className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={closeLightbox}
            type="button"
          >
            <XIcon size={26} />
          </button>

          <div
            className={`relative h-[82vh] w-full max-w-6xl overflow-hidden rounded-xl bg-white transition duration-200 dark:bg-slate-950 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
            role="presentation"
          >
            <Image
              alt={`${alt} full preview`}
              className="object-contain"
              fill
              quality={100}
              sizes="100vw"
              src={src}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
