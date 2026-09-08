"use client";

import { useEffect, useRef, useState } from "react";

import { site } from "@/content/site";

export function CatalogueNavigation() {
  const [active, setActive] = useState<string>(site.collections[0].id);
  const navRef = useRef<HTMLElement>(null);
  const activeIndex = site.collections.findIndex((item) => item.id === active);

  useEffect(() => {
    const sections = site.collections
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const headerHeight =
          document.querySelector(".site-header")?.getBoundingClientRect()
            .height ?? 88;
        const navHeight = window.matchMedia("(max-width: 1179px)").matches
          ? (navRef.current?.getBoundingClientRect().height ?? 0)
          : 0;
        const activationLine = headerHeight + navHeight + 48;
        let current = sections[0]?.id;
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= activationLine)
            current = section.id;
        }
        if (current) setActive(current);
      });
    };
    const observer = new ResizeObserver(update);
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || !window.matchMedia("(max-width: 1179px)").matches) return;
    const link = nav.querySelector<HTMLAnchorElement>(
      '[aria-current="location"]',
    );
    if (!link) return;
    nav.scrollTo({
      left: link.offsetLeft - nav.clientWidth / 2 + link.offsetWidth / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }, [active]);

  return (
    <aside className="catalogue-sidebar">
      <div className="catalogue-nav-heading">
        <span>Цуглуулга</span>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} <span>/ 05</span>
        </span>
      </div>
      <nav
        ref={navRef}
        aria-label="Хуудсан дахь ангиллууд"
        className="catalogue-nav"
      >
        {site.collections.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "location" : undefined}
          >
            <span className="catalogue-nav-number">0{index + 1}</span>
            <span className="catalogue-nav-label">{item.label}</span>
            <span className="catalogue-nav-marker" aria-hidden="true" />
          </a>
        ))}
      </nav>
      <a href="#collections" className="catalogue-nav-back">
        Бүх цуглуулга <span aria-hidden="true">↑</span>
      </a>
    </aside>
  );
}
