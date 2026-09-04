import Link from "next/link";

import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/content/products";
import { site } from "@/content/site";

const { featured } = site;
const featuredProducts = products.filter((p) => p.featured);

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
          <Link href={featured.cta.href} className="text-link text-navy">
            {featured.cta.label}
          </Link>
        </Reveal>

        <ul className="scroll-row mt-12">
          {featuredProducts.map((product) => (
            <li key={product.slug} className="h-full">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
