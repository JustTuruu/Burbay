import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Gallery } from "@/components/product/Gallery";
import { ProductImage } from "@/components/product/ProductImage";
import { ArrowIcon } from "@/components/ui/Icons";
import {
  categoryMeta,
  getProduct,
  getRelated,
  getVariants,
  groupMeta,
  products,
} from "@/content/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const title = `BURBAY ${product.name}${product.color ? ` — ${product.color}` : ""}`;
  return {
    title,
    description: product.short || product.title,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title,
      url: `/products/${slug}`,
      description: product.short || product.title,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const variants = getVariants(product);
  const related = getRelated(product);
  const category = categoryMeta[product.category];
  const heading = product.color
    ? `${product.name} — ${product.color}`
    : product.name;
  const facts = [
    product.age ? { label: "Нас", value: product.age } : null,
    product.color ? { label: "Өнгө", value: product.color } : null,
    product.code ? { label: "Загварын код", value: product.code } : null,
    { label: "Төрөл", value: groupMeta[product.group] ?? category.label },
  ].filter((fact): fact is { label: string; value: string } => fact !== null);

  return (
    <>
      <article className="product-page shell">
        <nav aria-label="Замчлал" className="breadcrumbs">
          <Link href="/">Нүүр</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/#${product.category}`}>{category.label}</Link>
          <span aria-hidden="true">/</span>
          <span>{heading}</span>
        </nav>
        <div className="product-detail-layout">
          <Gallery
            key={product.slug}
            images={product.images}
            alt={`BURBAY ${heading}`}
          />
          <div className="product-detail-copy">
            <p className="eyebrow">BURBAY / {category.label}</p>
            <h1>{heading}</h1>
            {product.short ? (
              <p className="body-copy">{product.short}</p>
            ) : null}
            {variants.length > 1 ? (
              <div className="product-variants">
                <h2 className="meta">Хувилбарууд</h2>
                <ul>
                  {variants.map((variant) => (
                    <li key={variant.slug}>
                      <Link
                        href={`/products/${variant.slug}`}
                        aria-current={
                          variant.slug === product.slug ? "page" : undefined
                        }
                      >
                        <span
                          aria-hidden="true"
                          style={{ backgroundColor: variant.swatches[0] }}
                        />
                        {variant.color || variant.code || variant.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <dl className="product-facts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <Link href="/#contact" className="btn btn-solid">
              Үнийн санал авах <ArrowIcon />
            </Link>
            <p className="inquiry-note">
              Бөөний захиалга, нийлүүлэлтийн нөхцөл болон үнийн саналыг манай
              багтай холбогдон авна уу.
            </p>
          </div>
        </div>
        {product.sections.length > 0 || product.paragraphs.length > 0 ? (
          <section
            className="product-details"
            aria-labelledby="details-heading"
          >
            <div>
              <p className="eyebrow">THE DETAILS</p>
              <h2 id="details-heading">
                Жижиг зүйл бүрийг
                <br />
                бодолцсон.
              </h2>
            </div>
            <div className="specification-columns">
              {product.sections.map((section) => (
                <div key={section.title || section.items[0]}>
                  {section.title ? <h3>{section.title}</h3> : null}
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {product.paragraphs.length > 0 ? (
                <div className="specification-paragraphs">
                  {product.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ) : null}
      </article>
      {related.length > 0 ? (
        <section
          aria-labelledby="related-heading"
          className="related-section shell"
        >
          <div className="section-heading">
            <h2 id="related-heading">Мөн танилцаарай</h2>
            <Link href={`/#${product.category}`} className="text-link">
              Цуглуулга руу <ArrowIcon />
            </Link>
          </div>
          <ul className="product-grid">
            {related.map((item) => (
              <li key={item.slug}>
                <ProductImage product={item} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}
