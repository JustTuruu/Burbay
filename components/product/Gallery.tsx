"use client";

import Image from "next/image";
import { useState } from "react";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="gallery">
      <div className="gallery-main">
        <Image
          src={images[index]}
          alt={`${alt} — зураг ${index + 1}`}
          fill
          preload={index === 0}
          quality={82}
          sizes="(max-width: 900px) 100vw, 55vw"
          className="object-contain"
        />
      </div>
      {images.length > 1 ? (
        <ul className="gallery-thumbnails" aria-label="Бүтээгдэхүүний зургууд">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Зураг ${i + 1}`}
                aria-pressed={i === index}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  quality={70}
                  sizes="110px"
                  className="object-contain"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      <p className="gallery-counter" aria-live="polite" aria-atomic="true">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </p>
    </div>
  );
}
