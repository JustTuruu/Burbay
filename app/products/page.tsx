import type { Metadata } from "next";

import { ProductCard } from "@/components/product/ProductCard";
import { categoryMeta, categoryOrder, groupMeta, products } from "@/content/products";

export const metadata: Metadata = {
  title: "Бүх бүтээгдэхүүн",
  description:
    "Burbay брэндийн бүх тэрэг, машины суудал, манеж, хөлд оруулагч, хэрэгслийн жагсаалт, үнэ, дэлгэрэнгүй мэдээлэл.",
};

/** Бүх бараа — категори бүрээр бүлэглэсэн, дээд талд таб маягийн шүүлтүүр */
export default function ProductsPage() {
  const groupsFor = (category: string) => {
    const seen: string[] = [];
    for (const p of products) if (p.category === category && !seen.includes(p.group)) seen.push(p.group);
    return seen;
  };

  return (
    <>
      <section className="bg-stone">
        <div className="shell py-12 lg:py-16">
          <p className="eyebrow text-slate">Burbay</p>
          <h1 className="display-lg mt-4">Бүх бүтээгдэхүүн</h1>
          <p className="lede mt-4 max-w-[40rem]">
            {products.length} бараа. Дэлгэрэнгүй мэдээллийг эндээс, захиалгыг манай онлайн дэлгүүрээс.
          </p>

          <nav aria-label="Категори" className="mt-8 overflow-x-auto">
            <ul className="inline-flex items-center gap-1 rounded-2xl bg-sand p-1.5">
              {categoryOrder.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="block whitespace-nowrap rounded-xl px-5 py-2.5 text-[0.8125rem] font-medium text-slate transition-colors hover:bg-white hover:text-navy"
                  >
                    {categoryMeta[key].label}
                    <span className="ml-2 text-muted">
                      {products.filter((p) => p.category === key).length}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {categoryOrder.map((key, index) => {
        const groups = groupsFor(key);
        return (
          <section
            key={key}
            id={key}
            aria-labelledby={`${key}-heading`}
            className={`section ${index % 2 === 0 ? "bg-white" : "bg-stone"}`}
          >
            <div className="shell">
              <div className="max-w-[40rem]">
                <h2 id={`${key}-heading`} className="display-md">
                  {categoryMeta[key].label}
                </h2>
                <p className="body-copy mt-3">{categoryMeta[key].description}</p>
              </div>

              {groups.map((group) => (
                <div key={group} id={group} className="mt-12">
                  {groups.length > 1 ? (
                    <h3 className="meta mb-6 text-muted">{groupMeta[group] ?? group}</h3>
                  ) : null}
                  <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {products
                      .filter((p) => p.category === key && p.group === group)
                      .map((product) => (
                        <li key={product.slug}>
                          <ProductCard product={product} />
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
