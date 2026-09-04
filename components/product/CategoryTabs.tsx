import Link from "next/link";

import { categoryMeta, categoryOrder, products } from "@/content/products";

type CategoryTabsProps = {
  active: string;
};

export function CategoryTabs({ active }: CategoryTabsProps) {
  const tabs = [
    { key: "all", label: "Бүгд", href: "/products", count: products.length },
    ...categoryOrder.map((key) => ({
      key,
      label: categoryMeta[key].label,
      href: `/categories/${key}`,
      count: products.filter((p) => p.category === key).length,
    })),
  ];

  return (
    <nav aria-label="Ангилал" className="-mx-1 overflow-x-auto px-1 pb-1">
      <ul className="inline-flex items-center gap-1 rounded-2xl bg-white p-1.5">
        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <li key={tab.key}>
              <Link
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-5 py-2.5 text-[0.875rem] font-medium transition-colors duration-300 ${
                  isActive
                    ? "bg-navy text-white"
                    : "text-slate hover:bg-stone hover:text-navy"
                }`}
              >
                {tab.label}
                <span className={isActive ? "text-white/60" : "text-muted"}>{tab.count}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
