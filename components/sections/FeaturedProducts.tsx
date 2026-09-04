import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/content/products";
import { site } from "@/content/site";

const { featured } = site;
const featuredProducts = products.filter((p) => p.featured);

/** Nuna-гийн бүтээгдэхүүний grid — онцлох бараанууд, дэлгэрэнгүй хуудас руу холбогдоно */
export function FeaturedProducts() {
  return (
    <section id="featured" aria-labelledby="featured-heading" className="section bg-stone">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-slate">{featured.eyebrow}</p>
            <h2 id="featured-heading" className="display-lg mt-4">
              {featured.heading}
            </h2>
          </div>
          <a href={featured.cta.href} className="text-link text-navy">
            {featured.cta.label}
          </a>
        </Reveal>

        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.slug} as="li" delay={(index % 4) * 80}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
