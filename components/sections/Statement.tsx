import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

const { statement } = site;

export function Statement() {
  return (
    <section id="about" aria-label="Бидний зорилго" className="section bg-white">
      <div className="shell">
        <Reveal className="mx-auto max-w-[52rem] text-center">
          <p className="statement-text">
            {statement.text}
          </p>
          <Link href={statement.cta.href} className="btn btn-outline mt-10">
            {statement.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
