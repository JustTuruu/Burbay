import { EditorialImage } from "@/components/ui/EditorialImage";
import { ArrowIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { images } from "@/lib/images";

const { categories } = site;

/**
 * "Designed around your life" маягийн хэсэг:
 * гарчиг + зураг/текст ээлжлэн байрласан категориуд.
 */
export function Categories() {
  return (
    <section id="categories" aria-labelledby="categories-heading" className="section bg-white">
      <div className="shell">
        <Reveal className="mx-auto max-w-[40rem] text-center">
          <h2 id="categories-heading" className="display-lg">
            {categories.heading}
          </h2>
          <p className="lede mt-5">{categories.subheading}</p>
        </Reveal>

        <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-24">
          {categories.items.map((item, index) => {
            const flipped = index % 2 === 1;
            return (
              <article
                key={item.id}
                id={item.id}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <Reveal
                  variant="fade"
                  className={`img-zoom lg:col-span-7 ${flipped ? "lg:order-2 lg:col-start-6" : ""}`}
                >
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.link.label}
                    className="block"
                  >
                    <EditorialImage
                      asset={images[item.image]}
                      ratio="4/3"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="rounded-2xl"
                    />
                  </a>
                </Reveal>

                <Reveal
                  delay={120}
                  className={`lg:col-span-4 ${flipped ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}
                >
                  <h3 className="display-md">{item.title}</h3>
                  <p className="body-copy mt-5">{item.body}</p>
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link mt-7 text-navy"
                  >
                    {item.link.label}
                    <ArrowIcon />
                  </a>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
