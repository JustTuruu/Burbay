import { ProductCarousel } from "@/components/product/ProductCarousel";
import { ProductImage } from "@/components/product/ProductImage";
import { groupMeta, type Product } from "@/content/products";

export function ProductGrid({
  products,
  grouped = true,
  title = "Бүтээгдэхүүний цуглуулга",
}: {
  products: Product[];
  grouped?: boolean;
  title?: string;
}) {
  const groups = [...new Set(products.map((product) => product.group))];
  if (!grouped || groups.length <= 1) {
    return (
      <ProductCarousel title={title}>
        {products.map((product) => (
          <li key={product.slug}>
            <ProductImage product={product} />
          </li>
        ))}
      </ProductCarousel>
    );
  }
  return (
    <div className="product-groups">
      {groups.map((group) => (
        <div key={group} id={group} className="product-collection">
          <ProductCarousel title={groupMeta[group]}>
            {products
              .filter((product) => product.group === group)
              .map((product) => (
                <li key={product.slug}>
                  <ProductImage product={product} />
                </li>
              ))}
          </ProductCarousel>
        </div>
      ))}
    </div>
  );
}
