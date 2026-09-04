import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Gallery } from "@/components/product/Gallery";
import { ProductCard } from "@/components/product/ProductCard";
import { ArrowIcon } from "@/components/ui/Icons";
import { categoryMeta, getProduct, getRelated, getVariants, groupMeta, products } from "@/content/products";
import { site } from "@/content/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const title = `${site.brand.name} ${product.name}${product.color ? ` — ${product.color}` : ""}`;
  return {
    title,
    description: product.short || product.title,
    openGraph: { title, description: product.short || product.title, images: [product.images[0]] },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const variants = getVariants(product);
  const related = getRelated(product);
  const category = categoryMeta[product.category];
  const heading = product.color ? `${product.name} — ${product.color}` : product.name;
  const facts = [
    product.age ? { label: "Нас", value: product.age } : null,
    product.color ? { label: "Өнгө", value: product.color } : null,
    product.code ? { label: "Код", value: product.code } : null,
    { label: "Төрөл", value: groupMeta[product.group] ?? category.label },
  ].filter((f): f is { label: string; value: string } => f !== null);

  return (
    <>
      <article className="bg-white">
        <div className="shell py-8 lg:py-12">
          <nav aria-label="Замчлал" className="text-[0.8125rem] text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-navy">
                  Нүүр
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/products" className="transition-colors hover:text-navy">
                  Бүтээгдэхүүн
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={`/categories/${product.category}`} className="transition-colors hover:text-navy">
                  {category.label}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-navy">{heading}</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Gallery images={product.images} alt={`${site.brand.name} ${heading}`} />
            </div>

            <div className="lg:col-span-5">
              <p className="eyebrow text-slate">
                {category.label}
                {product.badge ? <span className="ml-3 text-navy">· {product.badge}</span> : null}
              </p>
              <h1 className="display-lg mt-4">
                {site.brand.name} {heading}
              </h1>

              <p className="mt-6 text-[1.5rem] font-medium">{product.price}</p>

              {product.short ? <p className="body-copy mt-6">{product.short}</p> : null}

              {variants.length > 1 ? (
                <div className="mt-8">
                  <p className="meta text-muted">Өнгө</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {variants.map((v) => (
                      <li key={v.slug}>
                        <Link
                          href={`/products/${v.slug}`}
                          aria-current={v.slug === product.slug ? "true" : undefined}
                          className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.875rem] transition-colors ${
                            v.slug === product.slug
                              ? "border-navy bg-navy text-white"
                              : "border-line text-slate hover:border-navy hover:text-navy"
                          }`}
                        >
                          <span
                            aria-hidden
                            className="h-3 w-3 rounded-full ring-1 ring-white/60"
                            style={{ backgroundColor: v.swatches[0] }}
                          />
                          {v.color || v.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={product.storeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-solid"
                >
                  Захиалах
                  <ArrowIcon />
                </a>
                <Link href="/products" className="text-link text-navy">
                  Бүх бүтээгдэхүүн
                </Link>
              </div>
              <p className="mt-4 text-[0.8125rem] leading-relaxed text-muted">
                Захиалга манай онлайн дэлгүүр {site.store.name} ({new URL(product.storeUrl).host}) дээр
                хийгдэнэ. 72 цагийн дотор хүргэлт, StorePay / ArdPay / LendMN-ээр хуваан төлөх боломжтой.
              </p>

              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-8 sm:grid-cols-4 lg:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="meta text-muted">{fact.label}</dt>
                    <dd className="mt-1.5 text-[1rem] font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {product.sections.length > 0 || product.paragraphs.length > 0 ? (
            <section aria-labelledby="details-heading" className="mt-16 border-t border-line pt-14 lg:mt-24">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <h2 id="details-heading" className="display-md">
                    Дэлгэрэнгүй
                  </h2>
                  <p className="body-copy mt-3">{product.title}</p>
                </div>
                <div className="grid gap-10 lg:col-span-8 lg:grid-cols-2">
                  {product.sections.map((section) => (
                    <div key={section.title || section.items[0]}>
                      {section.title ? <h3 className="meta text-muted">{section.title}</h3> : null}
                      <ul className="mt-4 space-y-3">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-3 text-[1rem] leading-relaxed text-slate">
                            <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {product.paragraphs.length > 0 ? (
                    <div className="space-y-4 lg:col-span-2">
                      {product.paragraphs.map((text) => (
                        <p key={text} className="body-copy">
                          {text}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          ) : null}
        </div>
      </article>

      {related.length > 0 ? (
        <section aria-labelledby="related-heading" className="section bg-stone">
          <div className="shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 id="related-heading" className="display-md">
                Төстэй бүтээгдэхүүн
              </h2>
              <Link href={`/categories/${product.category}`} className="text-link text-navy">
                Бүх {category.label.toLowerCase()}
              </Link>
            </div>
            <ul className="scroll-row mt-10">
              {related.map((p) => (
                <li key={p.slug}>
                  <ProductCard product={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
