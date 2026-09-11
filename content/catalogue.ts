export type CatalogueImage = {
  src: string;
  fit?: "contain" | "cover";
  position?: string;
  background?: string;
  blend?: "multiply" | "normal";
};

export const catalogueOrder = [
  "j02-grey",
  "pc600-green",
  "e77-dark-grey",
  "j01-green",
  "e77-light-grey",
  "pc600-khaki",
  "pc600-grey",
  "e83-black",
  "e83-ginger",
  "e83-iron-grey",
  "2in1-stroller",
];

export const catalogueImages: Record<string, CatalogueImage> = {
  "j02-grey": { src: "/products/gallery/j02-grey-6.jpg" },
  "j01-green": { src: "/products/gallery/j01-green-1.jpg" },
  "e77-dark-grey": { src: "/products/gallery/e77-dark-grey-4.jpg" },
  "e77-light-grey": { src: "/products/gallery/e77-light-grey-4.jpg" },
  "pc600-green": { src: "/products/gallery/pc600-green-2.jpg" },
  "pc600-khaki": { src: "/products/gallery/pc600-khaki-5.jpg" },
  "e83-black": { src: "/products/gallery/e83-black-2.jpg" },
  "e83-ginger": { src: "/products/gallery/e83-ginger-3.jpg" },
  "e83-iron-grey": { src: "/products/gallery/e83-iron-grey-2.jpg" },
  "carseat-360": { src: "/products/gallery/carseat-360-3.jpg" },
  "apollo-pro": { src: "/products/gallery/apollo-pro-3.jpg" },
  "carseat-b": { src: "/products/gallery/carseat-b-1.jpg" },
  "carseat-c": { src: "/products/gallery/carseat-c-1.jpg" },
};

export function getCatalogueImage(slug: string): CatalogueImage {
  return catalogueImages[slug] ?? { src: `/products/${slug}.jpg` };
}
