# Reproducible visual QA checklist

Record the route, commit, browser, viewport, theme, and date for every run.

- At 1440px and 390px, verify the primary action remains visible, readable, and reachable without horizontal scrolling.
- Navigate with keyboard only: logical order, visible focus, usable controls, and no keyboard trap.
- Verify semantic names, labels, error messages, loading, empty, disabled, selected, hover, and focus-visible states.
- Inspect light and dark appearance for contrast and non-color status cues.
- Enable `prefers-reduced-motion` and confirm meaningful feedback remains while nonessential motion is reduced.
- Check text at 200% zoom/reflow and touch targets near 44 CSS pixels where the platform permits.
- Save screenshots or Playwright traces as review evidence when available; describe findings and fixes rather than issuing a quality score.
