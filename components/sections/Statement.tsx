import { site } from "@/content/site";

export function Statement() {
  return (
    <section
      id="about"
      className="about-section shell"
      aria-labelledby="about-heading"
    >
      <p className="eyebrow">A LITTLE WORLD. A BIG LOVE.</p>
      <h2 id="about-heading">
        Хүүхдийн ертөнцийг
        <br />
        хайраар хүрээлнэ.
      </h2>
      <p className="about-description">
        Бяцхан үртэйгээ өнгөрүүлэх мөч бүхэн үнэ цэнтэй. BURBAY нь гэр бүлийн
        өдөр тутмын амьдралд тав тух, хэрэглэхэд хялбар шийдэл, бодолцсон
        загварыг авчирна.
      </p>
      <div className="about-signature">
        <span className="fine-line" />
        <p>
          BURBAY MONGOLIA<span>{site.brand.role}</span>
        </p>
        <span className="fine-line" />
      </div>
    </section>
  );
}
