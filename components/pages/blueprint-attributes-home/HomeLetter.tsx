import { HeroText } from "../home-shared/Headings";
import cn from "classnames";
import gradients from "../home-shared/gradients.module.css";
import { FadeIn } from "../home-shared/FadeIn";
import { CTAButton } from "../home-shared/CTAButton";
import Link from "next/link";
import { Gradient } from "../home-shared/Gradient";

export function HomeLetter() {
  return (
    <section className="relative flex flex-col items-center px-6 py-16 font-sans md:py-24 lg:py-32 gap-14">
      <FadeIn>
        <HeroText className="lg:text-[65px]">
          Scaling your project
          <br />
          shouldn&apos;t be so difficult
        </HeroText>
      </FadeIn>
      <div className="flex flex-col max-w-xl leading-6 md:text-lg lg:text-lg">
        <FadeIn className="opacity-70">
          <p>
            Especially for Blueprint Developers.
          </p>
          <br />

          <p>
            By default and without BlueprintAttributes plugin, Attributes and Attribute Sets must be created in native code - they cannot be created in Blueprints.
          </p>
          <br />

          <p>
            This is an engine limitation and BlueprintAttributes aims to alleviate that issue and empower Game Designers and Blueprint Developers to quickly iterate
            on their Attribute design.
          </p>
          <br />

          <p>
            The bigger your project grows, the slower it gets. Especially if the team has limited C++ resources and few or no C++ developers in the team.
          </p>
          <br />

          <p>
            Things like defining new Attribute Sets, adding, renaming or removing Gameplay Attributes begin to take time and creates bottlenecks on C++ engineers.
          </p>
          <br />

          <p>
            With BlueprintAttributes, we're trying to improve that.
          </p>
          <br />

          <p>
            The plugin comes with nearly 100 C++ classes to try to provide the best developer experience, and stay true to the Gameplay Abilities ecosystem and workflow.
            Ranging from runtime module with UAttributeSet to inherit from, custom UBlueprint and FBlueprintEditor, to editor modules and dozens of Details Customizations classes and Slate widgets.
          </p>
          <br />

          <p>
            This also includes a fancy "Attribute Wizard" module to help transitioning from Attributes defined in Blueprints to C++ classes when the prototype phase is completed, with header and source preview.
            The wizard uses the AttributeSet created in Blueprints and the Attributes it defines to generate the proper C++ class that you can then either inherit from
            (Attribute properties that were defined in Blueprints would be now defined in native, like before. The engine will detect the same type and variable name and update the references),
            or simply get rid of the previous Blueprint implementation and update each and every Gameplay Attribute references (in Gameplay Effects, K2 Nodes, etc.) to their new natives counterpart.
          </p>
        </FadeIn>
        <FadeIn noVertical viewTriggerOffset className="relative h-2 md:h-12">
          <span
            className={cn(
              "w-full h-[1px] -bottom-8 md:-bottom-4 lg:-bottom-4 absolute",
              gradients.letterLine
            )}
          />
        </FadeIn>
      </div>
      <FadeIn noVertical className="relative flex justify-center w-full mt-16">
        <div className="max-w-[180px] w-full">
          <CTAButton>
            <Link href="/docs" className="block py-3 font-sans">
              Start Blueprinting
            </Link>
          </CTAButton>
        </div>
        <Gradient
          width={1200}
          height={300}
          className="bottom-[-200px] -z-10 opacity-20"
          blue
        />
      </FadeIn>
    </section>
  );
}
