import { EditorialImage } from "@/components/ui/EditorialImage";
import { site } from "@/content/site";
import { images } from "@/lib/images";

const { hero } = site;

/**
 * Nuna маягийн hero: цайвар дэвсгэр, зүүн талд navy текст,
 * баруун талд бүтээгдэхүүний студийн зураг.
 */
export function Hero() {
  return (
    <section id="top" aria-label={hero.heading} className="bg-stone text-navy">
      <div className="shell grid items-center gap-10 py-12 lg:min-h-[calc(100svh-4.5rem)] lg:max-h-[52rem] lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="order-2 max-w-[34rem] lg:order-1 lg:col-span-5">
          <p className="eyebrow text-slate">{hero.eyebrow}</p>
          <h1 className="display-xl mt-5">{hero.heading}</h1>
          <p className="lede mt-6 max-w-[30rem]">{hero.body}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={hero.cta.href} className="btn btn-solid">
              {hero.cta.label}
            </a>
            <a
              href={hero.secondary.href}
              target="_blank"
              rel="noreferrer"
              className="text-link text-navy"
            >
              {hero.secondary.label}
            </a>
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
