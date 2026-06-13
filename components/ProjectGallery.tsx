"use client";

import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const useCarousel = images.length > 3;

  function openLightbox(image: string) {
    setSelectedImage(image);
    requestAnimationFrame(() => setIsVisible(true));
  }

  function scrollCarousel(direction: "previous" | "next") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      behavior: "smooth",
      left:
        direction === "next"
          ? carousel.clientWidth
          : -carousel.clientWidth,
    });
  }

  const closeLightbox = useCallback(() => {
    setIsVisible(false);
    window.setTimeout(() => setSelectedImage(null), 180);
  }, []);

  useEffect(() => {
    if (!selectedImage) {
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
  }, [closeLightbox, selectedImage]);

  const galleryItem = (image: string, index: number) => (
    <button
      className="relative aspect-[1.55/1] w-full overflow-hidden rounded-lg border border-slate-300 bg-white p-3 text-left transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
      key={`${image}-${index}`}
      onClick={() => openLightbox(image)}
      type="button"
    >
      <Image
        alt={`${title} gallery image ${index + 1}`}
        className="rounded-md object-contain"
        fill
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
        src={image}
      />
    </button>
  );

  return (
    <>
      {useCarousel ? (
        <div className="relative mt-8">
          <div
            className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            ref={carouselRef}
          >
            {images.map((image, index) => (
              <div
                className="shrink-0 snap-start basis-full sm:basis-[calc((100%-2rem)/2)] lg:basis-[calc((100%-4rem)/3)]"
                key={`${image}-${index}`}
              >
                {galleryItem(image, index)}
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
            <button
              aria-label="Previous image"
              className="pointer-events-auto grid h-11 w-11 place-items-center rounded-lg border border-slate-300 bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-500 active:border-blue-500 dark:border-slate-700 dark:bg-slate-950/90 dark:text-slate-200 dark:hover:bg-blue-500/10"
              onClick={() => scrollCarousel("previous")}
              type="button"
            >
              <ChevronLeftIcon size={22} />
            </button>
            <button
              aria-label="Next image"
              className="pointer-events-auto grid h-11 w-11 place-items-center rounded-lg border border-slate-300 bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-500 active:border-blue-500 dark:border-slate-700 dark:bg-slate-950/90 dark:text-slate-200 dark:hover:bg-blue-500/10"
              onClick={() => scrollCarousel("next")}
              type="button"
            >
              <ChevronRightIcon size={22} />
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {images.map((image, index) => galleryItem(image, index))}
        </div>
      )}

      {selectedImage ? (
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
              alt={`${title} full preview`}
              className="object-contain"
              fill
              quality={100}
              sizes="100vw"
              src={selectedImage}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
