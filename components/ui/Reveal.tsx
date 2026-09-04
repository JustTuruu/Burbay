"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealVariant = "up" | "fade";

type RevealProps = {
  children: ReactNode;
  /** Ямар tag-аар render хийх (жишээ нь "li", "figure") */
  as?: ElementType;
  variant?: RevealVariant;
  /** Хөдөлгөөн эхлэх хойшлолт (ms) */
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Scroll хийхэд контентыг зөөлөн гаргаж ирэх wrapper.
 * Бодит анимацийг globals.css доторх `[data-reveal]` дүрмүүд хийнэ —
 * JS ачаалагдаагүй үед контент шууд харагдана.
 */
export function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={className}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
