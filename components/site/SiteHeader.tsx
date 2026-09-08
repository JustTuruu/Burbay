import Image from "next/image";
import Link from "next/link";

import { ArrowIcon, GlobeIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          href="/"
          aria-label={`${site.brand.name} — нүүр хуудас`}
          className="brand-link"
        >
          <Image
            src="/brand/logo.png"
            alt={site.brand.name}
            width={945}
            height={275}
            unoptimized
            className="brand-logo"
          />
        </Link>
        <p className="header-note">{site.brand.role}</p>
        <div className="header-actions">
          <span className="locale-label">
            <GlobeIcon /> MN
          </span>
          <Link href="/#contact" className="header-contact">
            Холбоо барих <ArrowIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
