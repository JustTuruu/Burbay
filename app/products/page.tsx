import type { Metadata } from "next";

import { ProductGrid } from "@/components/product/ProductGrid";
import { categoryMeta, categoryOrder, products } from "@/content/products";

export const metadata: Metadata = {
  title: "Бүх бүтээгдэхүүн",
  description:
    "Burbay брэндийн бүх тэрэг, машины суудал, манеж, хөлд оруулагч, хэрэгслийн жагсаалт, үнэ, дэлгэрэнгүй мэдээлэл.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-line bg-sand">
        <div className="shell pb-9 pt-11 lg:pb-11 lg:pt-14">
          <p className="eyebrow text-slate">Burbay</p>
          <h1 className="display-lg mt-4">Бүх бүтээгдэхүүн</h1>
          <p className="lede mt-4 max-w-[42rem]">
            {products.length} бараа. Дэлгэрэнгүй мэдээллийг эндээс, захиалгыг манай онлайн дэлгүүрээс.
          </p>
        </div>
      </section>

      {categoryOrder.map((key, index) => {
        const items = products.filter((product) => product.category === key);
        if (items.length === 0) return null;

        return (
          <section
            key={key}
            id={key}
            aria-labelledby={`${key}-heading`}
            className={`scroll-mt-24 bg-stone pb-16 lg:pb-24 ${index === 0 ? "pt-11 lg:pt-14" : "pt-16 lg:pt-24"}`}
          >
            <div className="shell">
              <div className="max-w-[42rem]">
                <h2 id={`${key}-heading`} className="display-md">
                  {categoryMeta[key].label}
                </h2>
                <p className="body-copy mt-3">{categoryMeta[key].description}</p>
              </div>

              <div className="mt-12">
                <ProductGrid products={items} />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
