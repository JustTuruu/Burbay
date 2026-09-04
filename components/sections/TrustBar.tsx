import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

const { trust } = site;

/** "As featured in" маягийн итгэлийн мөр: стандарт, гэрчилгээ */
export function TrustBar() {
  return (
    <section aria-labelledby="trust-heading" className="border-y border-line bg-white">
      <div className="shell py-12 lg:py-14">
        <Reveal>
          <h2 id="trust-heading" className="meta text-center text-muted">
            {trust.heading}
          </h2>
          <dl className="mt-8 grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {trust.items.map((item) => (
              <div key={item.value}>
                <dt className="text-[1.25rem] font-medium tracking-tight lg:text-[1.5rem]">
                  {item.value}
                </dt>
                <dd className="mt-2 text-[0.75rem] text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
