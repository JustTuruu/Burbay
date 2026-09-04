import Image from "next/image";

import { SmartLink } from "@/components/ui/SmartLink";
import { site } from "@/content/site";

const { footer, brand } = site;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-stone text-navy">
      <div className="shell py-14 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <SmartLink href="/" aria-label={`${brand.name} — нүүр хуудас`} className="inline-flex">
              <Image
                src="/brand/logo.png"
                unoptimized
                alt={brand.name}
                width={945}
                height={275}
                className="h-10 w-auto"
              />
            </SmartLink>
            <p className="mt-6 max-w-[18rem] text-[0.875rem] leading-relaxed text-slate">
              {footer.note}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.heading}>
              <h3 className="meta">{column.heading}</h3>
              <ul className="mt-6 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <SmartLink
                      href={link.href}
                      className="text-[0.875rem] text-slate transition-colors hover:text-navy"
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="meta">{footer.contact.heading}</h3>
            <ul className="mt-6 space-y-3 text-[0.875rem] text-slate">
              {footer.contact.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <ul className="mt-6 flex gap-5">
              {footer.contact.socials.map((social) => (
                <li key={social.href}>
                  <SmartLink href={social.href} className="text-link text-navy">
                    {social.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-7 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.legalName}. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <ul className="flex gap-6">
            {footer.legal.map((link) => (
              <li key={link.href}>
                <SmartLink href={link.href} className="transition-colors hover:text-navy">
                  {link.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
