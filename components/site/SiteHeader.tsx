"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  BagIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/ui/Icons";
import { site } from "@/content/site";

const { nav, header, brand, store } = site;

type NavItem = (typeof nav)[number];

function hasChildren(
  item: NavItem,
): item is NavItem & { children: readonly { label: string; href: string }[] } {
  return "children" in item && Array.isArray(item.children);
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>(nav[0].id);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy (зөвхөн нүүр хуудсанд): аль хэсэг дэлгэцэн дээр байгааг тааруулж active таб солино */
  useEffect(() => {
    if (!isHome) {
      setActive("");
      return;
    }
    setActive(nav[0].id);
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome, pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white text-navy transition-shadow duration-500 ${
          scrolled ? "shadow-[0_1px_0_0_var(--color-line)]" : ""
        }`}
      >
        <div className="shell flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          {/* Лого */}
          <a href="/" aria-label={`${brand.name} — нүүр хуудас`} className="flex shrink-0 items-center">
            <Image
              src="/brand/logo.png"
              unoptimized
              alt={brand.name}
              width={210}
              height={80}
              preload
              className="h-8 w-auto lg:h-9"
            />
          </a>

          {/* Таб маягийн цэс (desktop) */}
          <nav aria-label="Үндсэн цэс" className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-2xl bg-stone p-1.5">
              {nav.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id} className="group relative">
                    <a
                      href={item.href}
                      onClick={() => setActive(item.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-[0.8125rem] font-medium transition-colors duration-300 ${
                        isActive
                          ? "bg-white text-navy shadow-[0_1px_2px_rgba(26,41,66,0.08)]"
                          : "text-muted hover:text-navy"
                      }`}
                    >
                      <span
                        className={`border-b-2 pb-0.5 transition-colors duration-300 ${
                          isActive ? "border-navy" : "border-transparent"
                        }`}
                      >
                        {item.label}
                      </span>
                      {hasChildren(item) ? (
                        <ChevronDownIcon className="transition-transform duration-300 group-hover:rotate-180" />
                      ) : null}
                    </a>

                    {/* Dropdown */}
                    {hasChildren(item) ? (
                      <div className="invisible absolute left-0 top-full z-10 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <ul className="min-w-[13rem] rounded-xl border border-line bg-white p-2 shadow-[0_18px_40px_-20px_rgba(26,41,66,0.35)]">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className="block rounded-lg px-3.5 py-2.5 text-[0.8125rem] text-slate transition-colors hover:bg-stone hover:text-navy"
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Баруун: icon-ууд + гар утасны цэс */}
          <div className="-mr-2 flex shrink-0 items-center gap-1">
            <a
              href="/products"
              aria-label={header.search}
              className="flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-70"
            >
              <SearchIcon />
            </a>
            <a
              href={store.url}
              target="_blank"
              rel="noreferrer"
              aria-label={header.bag}
              className="flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-70"
            >
              <BagIcon />
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={header.menu}
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-70 lg:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Бүдэгрүүлэх дэвсгэр */}
      <button
        type="button"
        tabIndex={-1}
        aria-hidden={!menuOpen}
        onClick={close}
        className={`fixed inset-0 z-[55] bg-navy/40 transition-opacity duration-500 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Гар утасны drawer — босоо жагсаалт, дэд цэстэй нь chevron-той */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={header.menu}
        aria-hidden={!menuOpen}
        className={`fixed inset-y-0 left-0 z-[60] flex w-full max-w-[24rem] flex-col bg-white text-navy transition-transform duration-500 ease-soft lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-6">
          <Image
            src="/brand/logo.png"
            unoptimized
            alt={brand.name}
            width={210}
            height={80}
            className="h-7 w-auto"
          />
          <button
            type="button"
            aria-label={header.close}
            onClick={close}
            className="-mr-2 flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-70"
          >
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Гар утасны цэс" className="flex-1 overflow-y-auto">
          <ul>
            {nav.map((item) => {
              const isActive = active === item.id;
              const isExpanded = expanded === item.id;
              return (
                <li key={item.id} className="border-b border-line">
                  <div className="flex items-center">
                    <a
                      href={item.href}
                      onClick={close}
                      className={`flex-1 px-6 py-5 text-[1.05rem] font-medium ${
                        isActive ? "text-navy" : "text-slate"
                      }`}
                    >
                      {item.label}
                    </a>
                    {hasChildren(item) ? (
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-label={`${item.label} — дэд цэс`}
                        onClick={() => setExpanded(isExpanded ? null : item.id)}
                        className="flex h-14 w-14 items-center justify-center text-muted"
                      >
                        <ChevronRightIcon
                          className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                        />
                      </button>
                    ) : null}
                  </div>

                  {hasChildren(item) && isExpanded ? (
                    <ul className="bg-stone/60 pb-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={close}
                            className="block px-8 py-3 text-[0.9375rem] text-slate"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-line px-6 py-6 text-[0.75rem] text-muted">
          {brand.role}
          <br />
          {brand.city}
        </div>
      </aside>
    </>
  );
}
