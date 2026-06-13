"use client";

import Image from "next/image";
import { XIcon } from "lucide-react";
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
      <button
        className="relative aspect-[1.4/1] w-full overflow-hidden rounded-lg border border-slate-300 bg-white p-3 text-left transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
        onClick={openLightbox}
        type="button"
      >
        <Image
          alt={alt}
          className="rounded-md object-contain"
          fill
          priority
          sizes="(min-width: 768px) 520px, 100vw"
          src={src}
        />
      </button>

      {isOpen ? (
        <div
          className={`fixed inset-0 z-[100] grid place-items-center bg-black/75 p-5 transition-opacity duration-200 ${
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
