import Link from "next/link";

import { EditorialImage } from "@/components/ui/EditorialImage";
import type { Product } from "@/content/products";
import { site } from "@/content/site";
import { productImage } from "@/lib/images";

type ProductCardProps = {
  product: Product;
  sizes?: string;
};

export function ProductCard({
  product,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
}: ProductCardProps) {
  const label = product.color ? `${product.name} · ${product.color}` : product.name;
  const subtitle = [product.color, product.age].filter(Boolean).join(" · ");

  return (
    <Link href={`/products/${product.slug}`} className="card group">
      <div className="img-zoom relative border-b border-line">
        <EditorialImage
          asset={productImage(product.slug, `${site.brand.name} ${label}`)}
          ratio="1/1"
          fit="contain"
          sizes={sizes}
          className="bg-white"
          imageClassName="p-5"
        />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-navy px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[1.0625rem] font-medium leading-snug text-navy">
          {site.brand.name} {product.name}
        </h3>
        {subtitle ? <p className="mt-1.5 text-[0.9375rem] text-muted">{subtitle}</p> : null}

        {product.swatches.length > 0 ? (
          <ul aria-label="Өнгө" className="mt-4 flex gap-2">
            {product.swatches.map((color) => (
              <li
                key={color}
                className="h-4 w-4 rounded-full ring-1 ring-line ring-offset-2 ring-offset-white"
                style={{ backgroundColor: color }}
              />
            ))}
          </ul>
        ) : null}

        <p className="mt-auto pt-5 text-[1.125rem] font-semibold text-navy">{product.price}</p>
      </div>
    </Link>
  );
}
