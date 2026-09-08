import Link from "next/link";

import { ArrowIcon } from "@/components/ui/Icons";
import { site } from "@/content/site";

export function CollectionIndex() {
  return (
    <section
      id="collections"
      aria-labelledby="collections-heading"
      className="collection-index shell"
    >
      <div className="collection-intro">
        <p className="eyebrow">THE BURBAY COLLECTION</p>
        <h2 id="collections-heading">
          Бяцхан ертөнцөд нь.
          <br />
          Бүхнийг бодолцсон.
        </h2>
        <p>
          Өдөр тутмын алхмаас анхны аялал хүртэл —
          <br className="desktop-break" /> гэр бүлийн тань хэмнэлд нийцэх
          цуглуулга.
        </p>
      </div>
      <nav aria-label="Цуглуулгын хэсгүүд" className="collection-links">
        {site.collections.map((item, index) => (
          <Link key={item.id} href={`#${item.id}`}>
            <span className="collection-number">0{index + 1}</span>
            <span>{item.label}</span>
            <ArrowIcon />
          </Link>
        ))}
      </nav>
    </section>
  );
}
