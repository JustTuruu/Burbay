import Link from "next/link";

import { EditorialImage } from "@/components/ui/EditorialImage";
import { site } from "@/content/site";
import { images } from "@/lib/images";

const { hero } = site;

export function Hero() {
  return (
    <section id="top" aria-label={hero.heading} className="bg-stone text-navy">
      <div className="shell grid items-center gap-10 py-12 lg:min-h-[min(calc(100svh-5.25rem),52rem)] lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="order-2 max-w-[34rem] lg:order-1 lg:col-span-5">
          <p className="eyebrow text-slate">{hero.eyebrow}</p>
          <h1 className="display-xl mt-5">{hero.heading}</h1>
          <p className="lede mt-6 max-w-[30rem]">{hero.body}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href={hero.cta.href} className="btn btn-solid">
              {hero.cta.label}
            </Link>
            <Link href={hero.secondary.href} className="text-link text-navy">
              {hero.secondary.label}
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <EditorialImage
            asset={images.hero}
            ratio="1/1"
            fit="cover"
            eager
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="rounded-2xl lg:max-h-[46rem]"
          />
        </div>
      </div>
    </section>
  );
}
