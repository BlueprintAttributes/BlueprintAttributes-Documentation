import { FadeIn } from "../home-shared/FadeIn";
import { FeaturesBento } from "../home-shared/FeaturesBento";

import RefreshIconDark from "../../../public/images/docs/shared/feature-icons/refresh-dark.svg";
import RefreshIconLight from "../../../public/images/docs/shared/feature-icons/refresh-light.svg";
import FingerprintIconDark from "../../../public/images/docs/shared/feature-icons/fingerprint-dark.svg";
import FingerprintIconLight from "../../../public/images/docs/shared/feature-icons/fingerprint-light.svg";
import { Features } from "../../../content/features";

const HOME_FEATURES: Features = [
  {
    name: "Quicker iterations",
    description: `Empower Game Designers and Blueprint Developers to quickly iterate on their Attribute design.`,
    iconDark: RefreshIconDark,
    iconLight: RefreshIconLight,
    page: "home",
  },
  {
    name: "Define Attributes in Blueprint",
    description: ` Create an Attribute property variable in the Blueprint Editor, use it immediately in Gameplay Effects and K2 Nodes (GetFloatAttribute(), ...) or any other places where a Gameplay Attribute picker can appear.`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  },
  {
    name: "Built-in Clamping",
    description: `Built-in support for clamping via Data Table initialization and handling of "Min Value" and "Max Value" columns. Or using a special Gameplay Clamped Attribute Data property (child of FGameplayAttributeData) with float or Attribute based clamping.`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  },
  {
    name: "Customized Blueprint Editor",
    description: `Blueprint Editor with Data Validation, Toolbar with buttons to quickly add a Gameplay Attribute property, to create Data Tables or port the BP Attribute Set to a standard C++ Attribute Set. Along with Details Customizations to expose Attribute BaseValue to Blueprint and set it directly from the Details panel.`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  },
  {
    name: "Interactions with Gameplay Effects",
    description: `There are several functions that an Attribute Set can override to deal with the way an Attribute responds when a Gameplay Effect attempts to modify it. Most of this API is exposed to Blueprints (PostGameplayEffectExecute, Pre/PostAttributeChange, ...).`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  },
  {
    name: "Replication",
    description: `For multiplayer projects, you can replicate your Gameplay Attribute defined in Blueprints similar to how you would replicate any other property. LifetimeReplicatedProps is handled, and using rep notifies you can handle attributes that will be predictively modified by clients (Blueprint equivalent of C++ GAMEPLAYATTRIBUTE_REPNOTIFY helper macro).`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  },
  {
    name: "Integration with K2 Nodes",
    description: `Any K2 Nodes (Blueprint nodes we use in the Editor) such as GetFloatAttribute() that have a FGameplayAttribute parameter for one of its Pins will now also display the list of Attributes defined in Blueprints in the combo box, just like Gameplay Attribute properties in Gameplay Effects.`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  },
  {
    name: "Wizard to port Blueprint defined Attributes to C++",
    description: `Depending on your team, you may want to eventually move your BP Attributes to the usual pattern of having them defined in C++. The Attribute Wizard and Scaffold module will help in the transition. From a Blueprint defined Attribute Set, it will generate the proper C++ header and source (with preview!) file based on the defined Gameplay Attributes in the BP Attribute Set.`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  },
  {
    name: "Referencer Handlers",
    description: `Whenever an Attribute is renamed in the Blueprint Editor, the plugin can detect the operation and offers to replace the previous references to it, in Gameplay Effects, to the new Attribute name. Doing so, it will display the list of modified properties and Blueprint nodes (K2Nodes such as GetFloatAttribute()) in the message log with links you can click navigate to the referencers.`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  }
];

export function HomeFeatures() {
  return (
    <FadeIn className="py-16 md:py-24 lg:py-32">
      <FeaturesBento
        header="Why BlueprintAttributes?"
        body="Blueprint Attributes enables a workflow 100% within the Editor and Blueprints, when working with Attribute Sets and Gameplay Attributes."
        features={HOME_FEATURES}
      />
    </FadeIn>
  );
}
