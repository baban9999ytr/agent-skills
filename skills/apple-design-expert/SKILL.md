---
name: apple-design-expert
description: Design or review polished, accessible interfaces inspired by Apple Human Interface Guidelines. Use for web, native, and responsive product UI; do not copy Apple proprietary interfaces or assets.
---

# Apple Design Expert

Use Apple design principles as a decision framework: purpose, agency, responsibility, familiarity, flexibility, simplicity, craft, and delight. Adapt to the product and platform instead of reproducing Apple screens.

## Workflow

1. Identify the user's primary task, the platform, existing component system, and responsive constraints.
2. Establish semantic tokens before styling one-off elements. Read [spacing and layout](references/spacing-layout.md), [typography](references/typography.md), and [color](references/color-system.md) when creating a system.
3. Implement platform-appropriate patterns, complete interaction states, and accessible semantics. Read [interaction and motion](references/interaction-motion.md) and [accessibility](references/accessibility.md) for interactive work.
4. Run the [visual review](references/visual-quality-review.md) before completion. Review desktop and narrow layouts when a rendered environment is available. Use the repeatable checks in `tests/visual-qa-checklist.md`; screenshots and Playwright evidence are observations, never a certification.

## Non-negotiable boundaries

- Do not use Apple logos, proprietary interface assets, or source code. Use SF symbols or Apple system typography only when the target platform and license permit it.
- Prefer HTML semantics, keyboard behavior, visible focus, sufficient contrast, and `prefers-reduced-motion` before adding visual polish.
- Avoid generic AI visual noise: decorative gradients, arbitrary shadows, excessive glass, dense card grids, inconsistent spacing, and animation without an interaction purpose.
- Use the existing design system when present. New tokens and components must solve a repeated need, not merely make one screen look different.

## Implementation routes

- For HTML/CSS, read [component patterns](references/component-patterns.md) and the `examples/html-css/` example.
- For Vue and Tailwind, use `examples/vue-tailwind/` as a pattern for semantic markup, responsive layout, and focus states.
- For React and TypeScript, use `examples/react/` as a pattern; preserve the host application's conventions.
- For platform adaptation and breakpoints, read [responsive design](references/responsive-design.md). For native design context, read [design philosophy](references/design-philosophy.md).

## Evidence-led visual QA

For a runnable interface, capture a wide (1440px) and narrow (390px) viewport, then test keyboard-only navigation, visible focus, text zoom/reflow, light and dark appearance, loading/error/empty states, and reduced motion. Record the viewport, browser, route, and concrete observations. Do not convert subjective aesthetics into a numeric score, and do not claim compliance or certification.
