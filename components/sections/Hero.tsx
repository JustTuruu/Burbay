import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">{site.hero.eyebrow}</p>
        <h1 id="hero-heading">
          {site.hero.heading[0]}
          <br />
          <span>{site.hero.heading[1]}</span>
        </h1>
        <p className="hero-description">{site.hero.body}</p>
        <Link href="#collections" className="btn btn-solid">
          {site.hero.cta} <ArrowIcon />
        </Link>
        <div className="hero-caption">
          <span className="fine-line" />
          <span>
            DESIGNED FOR LITTLE ONES.
            <br />
            MADE FOR LIFE TOGETHER.
          </span>
        </div>
      </div>
      <div className="hero-media">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          preload
          quality={90}
          sizes="(max-width: 760px) 100vw, 58vw"
          className="hero-image"
        />
        <Link
          href="/products/single-stroller-0-4"
          className="hero-product-link"
        >
          <span>
            BURBAY STROLLERS<span>Өдөр бүрийн аяллын хамтрагч</span>
          </span>
          <span className="round-arrow">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </section>
  );
}
