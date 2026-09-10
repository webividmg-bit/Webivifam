import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const CarouselContext = createContext(null);

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

export function Carousel({
  options = { loop: true },
  plugins = [],
  className,
  children,
  setApi,
  ...props
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    if (setApi) setApi(emblaApi);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect, setApi]);

  return (
    <CarouselContext.Provider
      value={{
        emblaRef,
        emblaApi,
        selectedIndex,
        scrollSnaps,
        scrollTo,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div className={cn("relative w-full", className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function SliderContainer({ className, children, ...props }) {
  const { emblaRef } = useCarousel();

  return (
    <div ref={emblaRef} className="overflow-hidden w-full select-none cursor-grab active:cursor-grabbing">
      <div className={cn("flex", className)} {...props}>
        {children}
      </div>
    </div>
  );
}

export function Slider({ className, children, ...props }) {
  return (
    <div
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SliderDotButton({ className, ...props }) {
  const { scrollSnaps, selectedIndex, scrollTo } = useCarousel();

  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          aria-label={`Slide ${index + 1}`}
          className={cn(
            "transition-all duration-300 rounded-full cursor-pointer",
            selectedIndex === index
              ? "w-8 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              : "w-2 h-2 bg-slate-700/80 hover:bg-slate-500 hover:scale-125"
          )}
        />
      ))}
    </div>
  );
}

export function SliderPrevButton({ className, ...props }) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={cn(
        "p-2.5 rounded-full border border-[#2B3E94] bg-[#060C22]/80 text-white transition-all duration-300 hover:border-[#2BB3FF] hover:bg-[#0c1538] hover:shadow-[0_0_15px_rgba(43,179,255,0.4)] disabled:opacity-30 disabled:pointer-events-none cursor-pointer",
        className
      )}
      {...props}
    >
      &larr;
    </button>
  );
}

export function SliderNextButton({ className, ...props }) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={cn(
        "p-2.5 rounded-full border border-[#2B3E94] bg-[#060C22]/80 text-white transition-all duration-300 hover:border-[#2BB3FF] hover:bg-[#0c1538] hover:shadow-[0_0_15px_rgba(43,179,255,0.4)] disabled:opacity-30 disabled:pointer-events-none cursor-pointer",
        className
      )}
      {...props}
    >
      &rarr;
    </button>
  );
}

export default Carousel;
