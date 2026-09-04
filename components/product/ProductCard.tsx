import { EditorialImage } from "@/components/ui/EditorialImage";
import type { Product } from "@/content/products";
import { site } from "@/content/site";
import { productImage } from "@/lib/images";

type ProductCardProps = {
  product: Product;
  sizes?: string;
};

/** Nuna маягийн бүтээгдэхүүний карт — дэлгэрэнгүй хуудас руу холбогдоно */
export function ProductCard({
  product,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
}: ProductCardProps) {
  const label = product.color ? `${product.name} · ${product.color}` : product.name;
  const subtitle = [product.group !== product.name ? product.age : "", product.color]
    .filter(Boolean)
    .join(" · ");

  return (
    <a href={`/products/${product.slug}`} className="group block">
      <div className="img-zoom relative">
        <EditorialImage
          asset={productImage(product.slug, `${site.brand.name} ${label}`)}
          ratio="1/1"
          fit="contain"
          sizes={sizes}
          className="rounded-2xl bg-white"
          imageClassName="p-4"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          {product.badge ? (
            <span className="rounded-full bg-navy px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-white">
              {product.badge}
            </span>
          ) : null}
          {product.discount ? (
            <span className="rounded-full bg-stone px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-navy">
              {product.discount}
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[0.9375rem] font-medium">
            {site.brand.name} {product.name}
          </h3>
          <p className="mt-1 text-[0.8125rem] text-muted">{subtitle || product.age || " "}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[0.875rem] font-medium">{product.price}</p>
          {product.oldPrice ? (
            <p className="mt-0.5 text-[0.75rem] text-muted line-through">{product.oldPrice}</p>
          ) : null}
        </div>
      </div>

      <ul aria-label="Өнгө" className="mt-3 flex gap-2">
        {product.swatches.map((color) => (
          <li
            key={color}
            className="h-3.5 w-3.5 rounded-full ring-1 ring-line ring-offset-1 ring-offset-stone"
            style={{ backgroundColor: color }}
          />
        ))}
      </ul>
    </a>
  );
}
