import { HomeHero } from "./HomeHero";
import { HomeFeatures } from "./HomeFeatures";
import { HomeLetter } from "./HomeLetter";
import { GradientSectionBorder } from "../home-shared/GradientSectionBorder";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";

export default function Home() {
  return (
    <>
      <LandingPageGlobalStyles />
      <main className="relative">
        <HomeHero />
        <GradientSectionBorder>
          <HomeFeatures />
        </GradientSectionBorder>
        <GradientSectionBorder>
          <HomeLetter />
        </GradientSectionBorder>
      </main>
    </>
  );
}
