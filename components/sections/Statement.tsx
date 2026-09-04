import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

const { statement } = site;

/** Брэндийн зорилгын том, төвд байрлах мэдэгдэл */
export function Statement() {
  return (
    <section id="about" aria-label="Бидний зорилго" className="section bg-white">
      <div className="shell">
        <Reveal className="mx-auto max-w-[52rem] text-center">
          <p className="statement-text">
            {statement.text}
          </p>
          <a href={statement.cta.href} className="btn btn-outline mt-10">
            {statement.cta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
