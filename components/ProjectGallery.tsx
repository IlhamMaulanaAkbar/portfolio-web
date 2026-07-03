"use client";

import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, XIcon, Maximize2Icon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  function openLightbox(image: string) {
    setSelectedImage(image);
    requestAnimationFrame(() => setIsVisible(true));
  }

  function scrollCarousel(direction: "previous" | "next") {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const newIndex =
      direction === "next"
        ? Math.min(activeIndex + 1, images.length - 1)
        : Math.max(activeIndex - 1, 0);

    const itemWidth = carousel.clientWidth;
    carousel.scrollTo({ behavior: "smooth", left: newIndex * itemWidth });
    setActiveIndex(newIndex);
  }

  function scrollToIndex(index: number) {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollTo({ behavior: "smooth", left: index * carousel.clientWidth });
    setActiveIndex(index);
  }

  // Sync dots with scroll position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    function handleScroll() {
      if (!carousel) return;
      const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
      setActiveIndex(index);
    }

    carousel.addEventListener("scroll", handleScroll, { passive: true });
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsVisible(false);
    window.setTimeout(() => setSelectedImage(null), 180);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
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
      className="group relative aspect-[1.6/1] w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
      key={`${image}-${index}`}
      onClick={() => openLightbox(image)}
      type="button"
      aria-label={`View ${title} screenshot ${index + 1}`}
    >
      {/* Browser bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 border-b border-slate-200/80 bg-slate-50/90 px-3 py-1.5 backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-800/90">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className="ml-2 text-[10px] font-medium text-slate-400">
          screenshot {index + 1}/{images.length}
        </span>
      </div>

      {/* Image */}
      <div className="absolute inset-0 top-7">
        <Image
          alt={`${title} screenshot ${index + 1}`}
          className="object-cover object-top"
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          src={image}
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 top-7 flex items-center justify-center bg-blue-500/0 transition-all duration-300 group-hover:bg-blue-500/10">
        <span className="flex scale-75 items-center gap-1.5 rounded-lg border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700 opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 dark:border-slate-600/60 dark:bg-slate-900/90 dark:text-white">
          <Maximize2Icon size={11} />
          Expand
        </span>
      </div>
    </button>
  );

  return (
    <>
      {/* Carousel — always shown */}
      <div className="relative mt-8">
        {/* Image counter */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            <span className="font-bold text-slate-700 dark:text-slate-200">
              {activeIndex + 1}
            </span>{" "}
            / {images.length}
          </p>

          {/* Dots */}
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-5 bg-blue-500"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500"
                }`}
                onClick={() => scrollToIndex(i)}
                type="button"
              />
            ))}
          </div>
        </div>

        {/* Carousel track */}
        <div
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ref={carouselRef}
        >
          {images.map((image, index) => (
            <div
              className="shrink-0 snap-start basis-full sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
              key={`${image}-${index}`}
            >
              {galleryItem(image, index)}
            </div>
          ))}
        </div>

        {/* Nav arrows — only when more than 1 image */}
        {images.length > 1 && (
          <div className="pointer-events-none absolute inset-y-10 left-0 right-0 flex items-center justify-between px-2">
            <button
              aria-label="Previous image"
              className={`pointer-events-auto grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/95 text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-500 hover:shadow-md active:scale-95 dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 ${
                activeIndex === 0 ? "opacity-30 cursor-default" : "opacity-100"
              }`}
              onClick={() => scrollCarousel("previous")}
              disabled={activeIndex === 0}
              type="button"
            >
              <ChevronLeftIcon size={20} />
            </button>
            <button
              aria-label="Next image"
              className={`pointer-events-auto grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/95 text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-500 hover:shadow-md active:scale-95 dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 ${
                activeIndex === images.length - 1 ? "opacity-30 cursor-default" : "opacity-100"
              }`}
              onClick={() => scrollCarousel("next")}
              disabled={activeIndex === images.length - 1}
              type="button"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage ? (
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
            className={`relative h-[82vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl transition duration-200 dark:bg-slate-950 ${
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

          {/* Caption */}
          <p className="mt-3 text-center text-sm text-white/60">{title} — Click outside or press Esc to close</p>
        </div>
      ) : null}
    </>
  );
}
