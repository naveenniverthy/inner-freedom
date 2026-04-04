import HeroSection from "@/components/HeroSection";
import HomeSections from "@/components/HomeSections";

export default function HomePage() {
  return (
    <div className="grid gap-6">
      <HeroSection />
      <HomeSections />
    </div>
  );
}
