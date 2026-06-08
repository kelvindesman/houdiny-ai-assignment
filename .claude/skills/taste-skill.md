# design-taste-frontend SKILL

## Layout Principles
- Use consistent spacing scale (4/8/12/16/24/32/48/64px)
- Prefer grid and flexbox over absolute positioning
- Respect visual hierarchy: size, weight, color, spacing
- Breathing room is a feature, not wasted space

## Typography Principles
- Max 2 typefaces per project (heading + body)
- Line height: 1.4–1.6 for body, 1.0–1.2 for headings
- Limit line length: 60–80 characters for reading comfort
- Font weight variation drives hierarchy more than size alone

## Color Principles
- Start with a 5-shade monochromatic base (bg, surface, border, text-secondary, text)
- One brand accent color, used sparingly (CTAs, highlights, active states)
- Maintain WCAG AA contrast (4.5:1 for text, 3:1 for large text/UI)
- Dark themes: layer surfaces with 5–10% lightness steps, not opacity

## Motion Principles
- Default: 200ms ease-out for interactions, 300ms for page transitions
- Respect prefers-reduced-motion; provide no-animation fallback
- Transitions should feel responsive, not theatrical
- Animate properties the GPU can handle: opacity, transform (translate, scale, rotate)

## Component Anti-Patterns to Avoid
- Generic gradients that scream "AI tool" (purple-to-blue diagonal everywhere)
- Every element having a shadow + gradient + glow + rounded corners at once
- Animations on every element (cognitive overload)
- Low information density + giant padding (makes the UI feel empty)
- Mismatched border radii (pick 1–2: sm for inputs/chips, lg for cards, full for pills)
