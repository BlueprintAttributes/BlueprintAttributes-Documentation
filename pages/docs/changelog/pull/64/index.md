---
title: "Pull Request #64"
description: "Docs"
---

*[on September 15th, 2023](https://github.com/BlueprintAttributes/BlueprintAttributes/pull/64)*

## Docs

* HandleRepNotifyForGameplayAttributeData now works out of property directly (not an FName anymore)
* New Slate Window (only accessible via `GBA.Test` command for now) to test ReferencerViewer on Attributes in 5.3
* Few tweaks in class / method descriptions
* GetAttributeValue now returns a bool indicating if the Attribute was found (and now using UAbilitySystemBlueprint internally)
* UGBAAttributeSetBlueprintBase is now Blueprintable (remove NotBlueprintable from UCLASS), related to Attribute Wizard and ability to reparent prev Blueprint to generated C++ class.
  * TODO: Might split the class in two
* Removed old docs folder
* New `Documentation/` folder with website
  * Most docs page done, remains TODO:
    * Further docs / check on Attribute Wizard doc - Instructions on how to replace old Attribute references
    * Referencer handler documentation TODO

