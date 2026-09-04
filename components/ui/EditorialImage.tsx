import Image from "next/image";

import type { ImageAsset } from "@/lib/images";

type EditorialImageProps = {
  asset: ImageAsset;
  sizes: string;
  ratio?: string;
  fit?: "cover" | "contain";
  className?: string;
  imageClassName?: string;
  eager?: boolean;
};

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
