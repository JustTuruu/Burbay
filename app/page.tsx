import { Categories } from "@/components/sections/Categories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { SystemBanner } from "@/components/sections/SystemBanner";
import { TrustBar } from "@/components/sections/TrustBar";

export default function Home() {
  return (
    <>
      <Hero />
      <SystemBanner />
      <Categories />
      <FeaturedProducts />
      <Statement />
      <TrustBar />
    </>
  );
}
