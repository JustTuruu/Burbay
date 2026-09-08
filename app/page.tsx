import { CatalogueNavigation } from "@/components/sections/CatalogueNavigation";
import { Categories } from "@/components/sections/Categories";
import { CollectionIndex } from "@/components/sections/CollectionIndex";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";

export default function Home() {
  return (
    <>
      <Hero />
      <CollectionIndex />
      <div className="catalogue-layout">
        <CatalogueNavigation />
        <div className="catalogue-content">
          <Categories />
        </div>
      </div>
      <Statement />
      <Contact />
    </>
  );
}
