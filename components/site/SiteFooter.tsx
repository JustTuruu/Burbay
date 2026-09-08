import Image from "next/image";
import Link from "next/link";

import { ArrowIcon, GlobeIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Link href="/" aria-label="BURBAY — нүүр хуудас">
              <Image
                src="/brand/logo.png"
                alt="BURBAY"
                width={945}
                height={275}
                unoptimized
                className="footer-logo"
              />
            </Link>
            <p className="footer-note">{site.footer.note}</p>
          </div>
          <div className="footer-links">
            <div>
              <h2 className="eyebrow">Цуглуулга</h2>
              <ul>
                {site.collections.map((item) => (
                  <li key={item.id}>
                    <Link href={`/#${item.id}`}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow">BURBAY MONGOLIA</h2>
              <ul>
                <li>
                  <Link href="/#about">Бидний тухай</Link>
                </li>
                <li>
                  <Link href="/#contact">Хамтын ажиллагаа</Link>
                </li>
                <li>
                  <Link href="/#contact">
                    Холбоо барих <ArrowIcon />
                  </Link>
                </li>
              </ul>
              <p className="footer-location">
                <GlobeIcon /> {site.brand.city}
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.brand.legalName}. Бүх эрх
            хуулиар хамгаалагдсан.
          </p>
          <a href={site.footer.developer.href} target="_blank" rel="noreferrer">
            Website by {site.footer.developer.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
