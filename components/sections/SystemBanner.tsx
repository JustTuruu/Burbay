import Link from "next/link";

import { EditorialImage } from "@/components/ui/EditorialImage";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { images } from "@/lib/images";

const { systemBanner } = site;

export function SystemBanner() {
  return (
    <section id="system" aria-labelledby="system-heading" className="bg-white">
      <div className="grid lg:grid-cols-2">
        <Reveal variant="fade" className="img-zoom bg-white">
          <EditorialImage
            asset={images.banner}
            ratio="1/1"
            fit="contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="mx-auto max-w-[40rem] lg:max-w-none"
            imageClassName="p-6 lg:p-12"
          />
        </Reveal>

        <div className="flex items-center bg-sand">
          <Reveal className="px-[clamp(1.5rem,6vw,6rem)] py-16 lg:py-24">
            <p className="eyebrow text-slate">{systemBanner.eyebrow}</p>
            <h2 id="system-heading" className="display-lg mt-5 max-w-[22ch]">
              {systemBanner.heading}
            </h2>
            <p className="body-copy mt-6 max-w-[46ch]">{systemBanner.body}</p>
            <Link href={systemBanner.cta.href} className="btn btn-outline mt-9">
              {systemBanner.cta.label}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
