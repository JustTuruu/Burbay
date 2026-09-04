import Image from "next/image";

import type { ImageAsset } from "@/lib/images";

type EditorialImageProps = {
  asset: ImageAsset;
  /** next/image-д зориулсан responsive хэмжээ */
  sizes: string;
  /** Зургийн харьцааг дарж бичих (жишээ нь "16/9") */
  ratio?: string;
  /** cover — талбайг дүүргэж тайрна; contain — бүтэн зургийг багтаана */
  fit?: "cover" | "contain";
  className?: string;
  imageClassName?: string;
  /** Эхний дэлгэц дэх зураг бол шууд ачаална */
  eager?: boolean;
};

/**
 * Зургийн стандарт хүрээ: харьцаа тогтмол, ачаалахаас өмнө дэвсгэр
 * өнгөтэй. Layout shift үүсгэхгүй.
 */
export function EditorialImage({
  asset,
  sizes,
  ratio,
  fit = "cover",
  className = "",
  imageClassName = "",
  eager = false,
}: EditorialImageProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio ?? asset.ratio, backgroundColor: asset.tone }}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        quality={82}
        {...(asset.blurDataURL ? { placeholder: "blur", blurDataURL: asset.blurDataURL } : {})}
        preload={eager}
        className={`${fit === "contain" ? "object-contain" : "object-cover"} ${imageClassName}`}
      />
    </div>
  );
}
