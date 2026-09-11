import Image from "next/image";
import Link from "next/link";

import { ProductGrid } from "@/components/product/ProductGrid";
import { ArrowIcon } from "@/components/ui/Icons";
import { catalogueOrder } from "@/content/catalogue";
import { categoryMeta, products, type Category } from "@/content/products";

const strollerGroups = ["3in1", "2in1", "single", "light"];
const everyday: {
  id: Category;
  number: string;
  english: string;
  heading: string;
  description: string;
  slug: string;
  image: string;
}[] = [
  {
    id: "beds",
    number: "03",
    english: "HOME & LIVING",
    heading: "Өөрийн гэсэн\nбяцхан ертөнц.",
    description:
      "Тоглох, амрах, тайван нойрсох мөчүүдэд. Гэрт ч, аялалд ч хамт байх авсаархан манеж.",
    slug: "playpen",
    image: "/products/playpen-lg.jpg",
  },
  {
    id: "walkers",
    number: "04",
    english: "LITTLE STEPS, BIG DISCOVERIES",
    heading: "Том ертөнцөд\nтавих эхний алхам.",
    description:
      "Сониуч бяцхан үрийн өдөр тутмын шинэ нээлтэд зориулсан хөлд оруулагч.",
    slug: "walker",
    image: "/products/walker-lg.jpg",
  },
  {
    id: "accessories",
    number: "05",
    english: "THE LITTLE ESSENTIALS",
    heading: "Жижигхэн зүйлс.\nТомхон тус.",
    description:
      "Аяллыг илүү хялбар, өдөр бүрийг илүү тухтай болгох дагалдах хэрэгслүүд.",
    slug: "booster",
    image: "/products/booster-lg.jpg",
  },
];

export function Categories() {
  const strollers = products
    .filter((product) => product.category === "strollers")
    .sort(
      (a, b) =>
        strollerGroups.indexOf(a.group) - strollerGroups.indexOf(b.group) ||
        catalogueOrder.indexOf(a.slug) - catalogueOrder.indexOf(b.slug),
    );
  return (
    <>
      <section
        id="strollers"
        className="catalogue-section"
        aria-labelledby="strollers-heading"
      >
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / STROLLERS</p>
              <h2 id="strollers-heading">Хүүхдийн тэрэг</h2>
            </div>
            <p>
              Таны хэмнэлд нийцэж.
              <br />
              Бяцхан үртэй тань хамт өснө.
            </p>
          </div>
          <Link
            href="/products/e83-black"
            className="feature-banner"
            aria-label="BURBAY E83 — дэлгэрэнгүй мэдээлэл"
          >
            <div className="feature-copy">
              <p className="eyebrow">BURBAY E83 · 2 IN 1</p>
              <h3>
                Нэг тэрэг.
                <br />
                Олон нандин мөч.
              </h3>
              <p>
                Нярайн орноос үндсэн суудал хүртэл.
                <br />
                Анхны өдрөөс хамтдаа.
              </p>
              <span className="text-link">
                Загвартай танилцах <ArrowIcon />
              </span>
            </div>
            <div className="feature-image">
              <Image
                src="/products/e83-black-lg.jpg"
                alt="BURBAY E83 — нярайн ор, үндсэн суудал, цүнх, хөлийн хучлага"
                fill
                sizes="(max-width: 760px) 100vw, 55vw"
                quality={82}
                className="object-contain"
              />
            </div>
          </Link>
          <p className="catalogue-hint">
            Зураг дээр дарж бүтээгдэхүүний дэлгэрэнгүй мэдээлэлтэй танилцаарай.
          </p>
          <ProductGrid products={strollers} />
        </div>
      </section>
      <section
        id="car-seats"
        className="catalogue-section car-seats-section"
        aria-labelledby="car-seats-heading"
      >
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / CAR SEATS</p>
              <h2 id="car-seats-heading">Машины суудал</h2>
            </div>
            <p>
              Хамгийн үнэ цэнтэй бүхнээ
              <br />
              хамт авч явахад.
            </p>
          </div>
          <div className="car-seat-story">
            <Link
              href="/products/apollo-pro"
              className="car-seat-photo"
              aria-label="Apollo Pro — дэлгэрэнгүй мэдээлэл"
            >
              <Image
                src="/products/gallery/apollo-pro-1.jpg"
                alt="BURBAY Apollo Pro хүүхдийн машины суудал"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                quality={90}
                className="object-cover"
              />
            </Link>
            <div className="car-seat-copy">
              <p className="eyebrow">BURBAY APOLLO PRO</p>
              <h3>
                Аялал бүрд
                <br />
                сэтгэл амар.
              </h3>
              <p>
                Өсөлтийн үе шат бүрд тохируулах боломжтой, тав тухыг бодолцсон
                машины суудал.
              </p>
              <dl className="product-highlights">
                <div>
                  <dt>360°</dt>
                  <dd>Эргэдэг суудал</dd>
                </div>
                <div>
                  <dt>ISOFIX</dt>
                  <dd>Бэхэлгээний систем</dd>
                </div>
              </dl>
              <Link href="/products/apollo-pro" className="text-link">
                Дэлгэрэнгүй <ArrowIcon />
              </Link>
            </div>
          </div>
          <ProductGrid
            title="Машины суудлын цуглуулга"
            products={products.filter(
              (product) => product.category === "car-seats",
            )}
            grouped={false}
          />
        </div>
      </section>
      <div className="everyday-collection">
        {everyday.map((item, index) => (
          <section
            key={item.id}
            id={item.id}
            className={`everyday-section ${index % 2 ? "is-reversed" : ""}`}
            aria-labelledby={`${item.id}-heading`}
          >
            <Link
              className="everyday-image"
              href={`/products/${item.slug}`}
              aria-label={`${categoryMeta[item.id].label} — дэлгэрэнгүй мэдээлэл`}
            >
              <Image
                src={item.image}
                alt={`BURBAY ${categoryMeta[item.id].label}`}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                quality={82}
                className="object-cover"
              />
            </Link>
            <div className="everyday-copy">
              <p className="eyebrow">
                {item.number} / {item.english}
              </p>
              <p className="category-label">{categoryMeta[item.id].label}</p>
              <h2 id={`${item.id}-heading`}>{item.heading}</h2>
              <p className="everyday-description">{item.description}</p>
              <Link href={`/products/${item.slug}`} className="text-link">
                Бүтээгдэхүүнтэй танилцах <ArrowIcon />
              </Link>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
