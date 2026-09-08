"use client";

import {
  Children,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

import { ChevronRightIcon } from "@/components/ui/Icons";

export function ProductCarousel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const id = useId();
  const trackRef = useRef<HTMLUListElement>(null);
  const count = Children.count(children);
  const [position, setPosition] = useState({
    previous: false,
    next: false,
    overflow: false,
    first: 1,
    last: count,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const slides = [...track.children] as HTMLElement[];
        const bounds = track.getBoundingClientRect();
        const visible = slides
          .map((slide, index) => ({
            index,
            rect: slide.getBoundingClientRect(),
          }))
          .filter(
            ({ rect }) =>
              rect.right > bounds.left + 12 && rect.left < bounds.right - 12,
          );
        const next = {
          previous: track.scrollLeft > 2,
          next: track.scrollWidth - track.clientWidth - track.scrollLeft > 2,
          overflow: track.scrollWidth - track.clientWidth > 2,
          first: (visible[0]?.index ?? 0) + 1,
          last: (visible.at(-1)?.index ?? count - 1) + 1,
        };
        setPosition((current) =>
          Object.keys(next).every(
            (key) =>
              current[key as keyof typeof current] ===
              next[key as keyof typeof next],
          )
            ? current
            : next,
        );
      });
    };
    const observer = new ResizeObserver(update);
    observer.observe(track);
    if (track.firstElementChild) observer.observe(track.firstElementChild);
    track.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, [count]);

  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (track.clientWidth + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      event.currentTarget.scrollTo({
        left: event.key === "Home" ? 0 : event.currentTarget.scrollWidth,
        behavior: "instant",
      });
    }
  };

  return (
    <section className="product-carousel" aria-labelledby={`${id}-heading`}>
      <div className="carousel-heading">
        <h3 id={`${id}-heading`}>{title}</h3>
        <div className="carousel-controls" data-overflow={position.overflow}>
          <span
            className="carousel-position"
            aria-live="polite"
            aria-atomic="true"
          >
            {String(position.first).padStart(2, "0")}–
            {String(position.last).padStart(2, "0")}{" "}
            <span>/ {String(count).padStart(2, "0")}</span>
          </span>
          <button
            type="button"
            aria-label={`${title} — өмнөх зургууд`}
            aria-controls={`${id}-track`}
            disabled={!position.previous}
            onClick={() => move(-1)}
          >
            <ChevronRightIcon className="rotate-180" />
          </button>
          <button
            type="button"
            aria-label={`${title} — дараах зургууд`}
            aria-controls={`${id}-track`}
            disabled={!position.next}
            onClick={() => move(1)}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      <ul
        id={`${id}-track`}
        ref={trackRef}
        className="product-carousel-track"
        tabIndex={position.overflow ? 0 : undefined}
        aria-label={`${title} — бүтээгдэхүүний зургууд`}
        onKeyDown={onKeyDown}
      >
        {children}
      </ul>
    </section>
  );
}
