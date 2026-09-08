import { notFound, redirect } from "next/navigation";

import { categoryOrder } from "@/content/products";

export function generateStaticParams() {
  return categoryOrder.map((category) => ({ category }));
}

export default async function CategoryPage({
  params,
}: PageProps<"/categories/[category]">) {
  const { category } = await params;
  if (!categoryOrder.some((item) => item === category)) notFound();
  redirect(`/#${category}`);
}
