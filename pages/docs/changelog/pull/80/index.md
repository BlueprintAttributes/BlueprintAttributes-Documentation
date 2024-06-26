---
title: "Pull Request #80"
description: "CI: Rework linux workflow"
---

*[on February 27th, 2024](https://github.com/BlueprintAttributes/BlueprintAttributes/pull/80)*

## CI: Rework linux workflow

Using <https://github.com/BlueprintAttributes/workflows>

credits to <https://github.com/outoftheboxplugins/BuildMachines>

It now runs package and test suite within containers on linux in parallel (on self hosted windows runner).

TODO: Do the same for windows, right now can do and have the prebuilt 5.3 image (but 5.2 and 5.1 image builds failed). One option is to only run it on windows 5.3. That plus the 3 builds on linux containers for 5.1, 5.2, 5.3 is enough to ensure plugin packages properly on different engine versions.

