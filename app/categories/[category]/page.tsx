import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductGrid } from "@/components/product/ProductGrid";
import { categoryMeta, categoryOrder, products, type Category } from "@/content/products";

function isCategory(value: string): value is Category {
  return (categoryOrder as string[]).includes(value);
}

export function generateStaticParams() {
  return categoryOrder.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: PageProps<"/categories/[category]">): Promise<Metadata> {
  const { category } = await params;
  if (!isCategory(category)) return {};
  const meta = categoryMeta[category];
  return { title: meta.label, description: meta.description };
}

export default async function CategoryPage({ params }: PageProps<"/categories/[category]">) {
  const { category } = await params;
  if (!isCategory(category)) notFound();

  const meta = categoryMeta[category];
  const items = products.filter((product) => product.category === category);

  return (
    <>
      <section className="border-b border-line bg-sand">
        <div className="shell pb-9 pt-11 lg:pb-11 lg:pt-14">
          <p className="eyebrow text-slate">Burbay</p>
          <h1 className="display-lg mt-4">{meta.label}</h1>
          <p className="lede mt-4 max-w-[42rem]">{meta.description}</p>
          <p className="body-copy mt-3">{items.length} бараа</p>
        </div>
      </section>

      <section className="bg-stone pb-16 pt-11 lg:pb-24 lg:pt-14">
        <div className="shell">
          <ProductGrid products={items} />
        </div>
      </section>
    </>
  );
}
