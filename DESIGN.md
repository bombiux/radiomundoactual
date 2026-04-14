# Design System Document: The Global Pulse

## 1. Overview & Creative North Star
This design system is built to transform a traditional radio broadcast identity into a high-end, editorial digital experience. We are moving away from the "generic corporate portal" and toward a signature identity defined as **"The Global Pulse."**

The Creative North Star focuses on the intersection of **Authoritative Journalism** and **Cinematic Audio**. We achieve this through:
*   **Intentional Asymmetry:** Breaking the standard 12-column grid with overlapping elements and offset typography to create movement.
*   **Atmospheric Depth:** Using a "Navy-first" philosophy where the interface feels like an immersive, dark-mode environment by default, punctuated by high-energy lime accents.
*   **Editorial Scale:** Using extreme contrast in typography—pairing massive, confident headlines with tight, technical metadata labels.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the deep authority of Navy and the electric energy of Lime Green. To maintain a premium feel, we never use pure black; we use layered depths of primary blue.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be created through:
1.  **Background Shifts:** Transitioning from `surface` (#f8f9fa) to `surface_container_low` (#f3f4f5).
2.  **Tonal Nesting:** Placing a `surface_container_lowest` (#ffffff) card inside a `surface_container` (#edeeef) section.

### Glass & Gradient Signature
To elevate the "Mundo Actual" brand beyond flat design, utilize **Glassmorphism** for all persistent floating elements (like the Radio Player). Use a backdrop-blur of 12px-20px combined with a semi-transparent `primary_container` (#003366 at 80% opacity).

For Hero sections, use a "Signature Texture" gradient:
*   **Direction:** 135deg
*   **From:** `primary` (#001e40)
*   **To:** `primary_container` (#003366)
*   **Accent:** A subtle 5% radial glow using `secondary_fixed` (#92fc5e) in the corner to mimic a broadcast signal.

---

## 3. Typography: The Editorial Voice
We use two distinct typefaces to balance modern technology with journalistic credibility.

*   **Display & Headlines (Manrope):** This is our "Broadcaster." Use `display-lg` and `headline-lg` for top-tier news and show titles. The wide apertures of Manrope feel global and transparent.
*   **Body & Labels (Inter):** This is our "Precision." Used for all functional data, schedules, and long-form articles. It provides a technical, clean-room aesthetic that builds trust.

**Visual Hierarchy Tip:** Always pair a `headline-sm` title with a `label-md` uppercase tag in `secondary` (#286c00) to create that "Breaking News" urgency.

---

## 4. Elevation & Depth
In this system, depth is not "fake 3D"—it is **Tonal Layering.**

*   **The Layering Principle:** Treat the UI as stacked sheets of glass. 
    *   Base: `surface`
    *   Section: `surface_container_low`
    *   Card: `surface_container_lowest`
*   **Ambient Shadows:** For floating elements, use a shadow with a 32px blur, 0px offset, and 6% opacity. The shadow color must be derived from `on_surface` (#191c1d), never pure black.
*   **The Ghost Border Fallback:** If a layout requires a container definition on a busy background, use a "Ghost Border": `outline_variant` (#c3c6d1) at **15% opacity**. It should be felt, not seen.

---

## 5. Component Guidelines

### The "Live Pulse" Radio Player
*   **Style:** Fixed at the viewport bottom. Use Glassmorphism with `primary_container` and a `secondary` (#66CC33) "Glow" indicator for the "Live" state.
*   **Corners:** Use `xl` (1.5rem) for the outer container and `full` (9999px) for play/pause buttons to contrast the sharp editorial layout above.

### News & Media Cards
*   **Structure:** No divider lines. Use `surface_container_highest` for the image hover state.
*   **Typography:** Overlay headlines directly on imagery using a `primary` to transparent gradient scrim (bottom-to-top).
*   **Rounding:** `lg` (1rem) for all news cards to maintain the "Corporate yet Dynamic" feel.

### Schedule Lists
*   **Logic:** Forbid dividers. Use vertical white space (`spacing-32`) to separate show times.
*   **Active State:** The "On Air" show should utilize a `secondary_container` (#92fc5e) background with `on_secondary_container` text, making it the undeniable focal point of the page.

### Buttons & Inputs
*   **Primary Button:** `primary` (#001e40) background with `on_primary` text. Use `DEFAULT` (0.5rem) rounding—keep it slightly sharper than the player for a "Corporate" anchor.
*   **Input Fields:** Use `surface_container_low` with a `Ghost Border`. On focus, transition the border to `secondary` (#66CC33) at 100% opacity.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use intentional white space. Let the `display-lg` typography breathe.
*   **Do** use the `secondary` lime green sparingly as a "high-voltage" accent (buttons, live indicators, playheads).
*   **Do** overlap images with text blocks to create a custom, high-end editorial feel.

### Don't:
*   **Don't** use 1px solid black or grey borders. This immediately cheapens the brand.
*   **Don't** use standard drop shadows. Always use the Ambient Shadow or Tonal Layering.
*   **Don't** crowd the interface. If a screen feels full, increase the container tier rather than adding a divider.
*   **Don't** use Lime Green for body text; it is strictly for interaction cues and high-visibility labels. Use `on_surface_variant` (#43474f) for secondary text.

---

## 7. Roundedness Scale Reference
*   **sm (0.25rem):** Minor tags and tooltips.
*   **DEFAULT (0.5rem):** Corporate buttons and input fields.
*   **lg (1rem):** News cards and content containers.
*   **xl (1.5rem):** Main player housing and hero sections.
*   **full (9999px):** Status pills, play buttons, and avatars.