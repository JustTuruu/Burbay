"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryProps = {
  images: string[];
  alt: string;
};

/** Бүтээгдэхүүний зургийн галерей: том зураг + жижиг сонголтууд */
export function Gallery({ images, alt }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const current = images[Math.min(index, images.length - 1)];

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-white ring-1 ring-line">
        <Image
          key={current}
          src={current}
          alt={alt}
          fill
          preload={index === 0}
          quality={82}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain p-6 lg:p-10"
        />
      </div>

      {images.length > 1 ? (
        <ul className="mt-4 grid grid-cols-5 gap-3 sm:grid-cols-6" aria-label="Зургууд">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Зураг ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`relative block aspect-square w-full overflow-hidden rounded-xl bg-white ring-1 transition-colors ${
                  i === index ? "ring-navy" : "ring-line hover:ring-muted"
                }`}
              >
                <Image src={src} alt="" fill quality={70} sizes="120px" className="object-contain p-1.5" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
