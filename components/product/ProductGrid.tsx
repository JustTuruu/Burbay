import { ProductCard } from "@/components/product/ProductCard";
import { groupMeta, type Product } from "@/content/products";

type ProductGridProps = {
  products: Product[];
  grouped?: boolean;
};

export function ProductGrid({ products, grouped = true }: ProductGridProps) {
  const groups: string[] = [];
  for (const product of products) {
    if (!groups.includes(product.group)) groups.push(product.group);
  }

  if (!grouped || groups.length <= 1) {
    return (
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.slug} className="h-full">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-14">
      {groups.map((group) => (
        <section key={group} id={group} aria-labelledby={`${group}-heading`} className="scroll-mt-28">
          <h3 id={`${group}-heading`} className="meta mb-6 text-muted">
            {groupMeta[group] ?? group}
          </h3>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products
              .filter((product) => product.group === group)
              .map((product) => (
                <li key={product.slug} className="h-full">
                  <ProductCard product={product} />
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
