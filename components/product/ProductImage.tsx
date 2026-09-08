import Image from "next/image";
import Link from "next/link";

import { getCatalogueImage } from "@/content/catalogue";
import { groupMeta, type Product } from "@/content/products";

export function ProductImage({
  product,
  sizes = "(max-width: 760px) 78vw, (max-width: 1100px) 31vw, (max-width: 1600px) 21vw, 330px",
}: {
  product: Product;
  sizes?: string;
}) {
  const image = getCatalogueImage(product.slug);
  const details = [product.color || product.code, product.age]
    .filter(Boolean)
    .join(" · ");
  const label = `BURBAY ${product.name}${details ? ` · ${details}` : ""}`;

  return (
    <Link
      href={`/products/${product.slug}`}
      aria-label={`${label} — дэлгэрэнгүй мэдээлэл`}
      className="product-tile"
    >
      <figure>
        <div
          className="product-image"
          data-fit={image.fit ?? "contain"}
          style={{ background: image.background }}
        >
          <Image
            src={image.src}
            alt={label}
            fill
            sizes={sizes}
            quality={90}
            style={{
              objectFit: image.fit ?? "contain",
              objectPosition: image.position ?? "center",
              mixBlendMode: image.blend ?? "multiply",
            }}
          />
        </div>
        <figcaption className="product-caption">
          <span className="product-name">{product.name}</span>
          <span className="product-subtitle">
            {details || groupMeta[product.group]}
          </span>
        </figcaption>
      </figure>
    </Link>
  );
}
