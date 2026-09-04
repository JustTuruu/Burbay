export type ImageAsset = {
  src: string;
  alt: string;
  tone: string;
  ratio: string;
  blurDataURL?: string;
};

const stone = "#f4f1ed";
const white = "#ffffff";

export const images = {
  hero: {
    src: "/products/single-stroller-0-4-lg.jpg",
    alt: "Burbay дан тэрэг — беж өнгийн студийн зураг, 0-4 нас",
    tone: "#e9dccf",
    ratio: "1/1",
  },
  banner: {
    src: "/products/e83-black-lg.jpg",
    alt: "Burbay E83 — нярайн ор, үндсэн суудал, Mommy bag, хөлийн хучлагатай 2 хос тэрэг",
    tone: white,
    ratio: "1/1",
  },
  strollers: {
    src: "/products/light-stroller-0-3-lg.jpg",
    alt: "Burbay хөнгөн дан тэрэг, 0-3 нас — эвхэгдсэн ба дэлгэгдсэн байдал",
    tone: "#d9d9d9",
    ratio: "1/1",
  },
  carSeats: {
    src: "/products/carseat-360-lg.jpg",
    alt: "Burbay 360° эргэдэг машины суудал, 0-12 нас — гурван өнгө",
    tone: white,
    ratio: "1/1",
  },
  playpen: {
    src: "/products/playpen-lg.jpg",
    alt: "Burbay хүүхдийн манеж, 0-4 нас",
    tone: "#ececec",
    ratio: "1/1",
  },
  walker: {
    src: "/products/walker-lg.jpg",
    alt: "Burbay хөлд оруулагч, 6 сар+",
    tone: "#ededed",
    ratio: "1/1",
  },
  booster: {
    src: "/products/booster-lg.jpg",
    alt: "Burbay машины суудлын өндөрлөгч",
    tone: "#dcdcdc",
    ratio: "1/1",
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;

export function productImage(slug: string, alt: string): ImageAsset {
  return { src: `/products/${slug}.jpg`, alt, tone: white, ratio: "1/1" };
}

export { stone as productTone };
