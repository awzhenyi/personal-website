# Design System Document

## 1. Overview & Creative North Star: "The Tactile Cartridge"
This design system is a sophisticated reimagining of 1990s handheld computing. It moves beyond the "pixel art" cliché to embrace a high-end, editorial aesthetic inspired by the industrial design of vintage consoles. The Creative North Star is **The Tactile Cartridge**: a philosophy where UI elements feel like physical objects slotted into a premium, cream-colored chassis.

We achieve this through "Low-Fi Elegance"—balancing the rigid, jagged nature of pixel-inspired display type with the clean, techy precision of modern neo-grotesk body text. We break the standard flat-web template by using intentional asymmetry, "chunky" architectural framing, and dithered textures that evoke the soul of a cathode-ray tube (CRT) through a modern lens.

---

## 2. Colors & Materiality
The palette is a curated journey through warm neutrals and high-energy hardware accents. We avoid the harshness of pure black, opting instead for deep, organic browns that provide a softer, more premium contrast.

### The Palette
*   **Primary Background:** `surface` (#FBFBE2) — A warm, "aged plastic" beige that feels lived-in and nostalgic.
*   **Hero Accent:** `primary_container` (#FFD54F) — The classic "Game Boy Yellow," used sparingly for high-visibility CTAs and key interactive moments.
*   **High Contrast:** `on_surface` (#1B1D0E) — A deep, "bitter chocolate" brown used for all text and structural framing.

### The "No-Line" Architectural Rule
While individual components use chunky borders for a tactile feel, **architectural sectioning** must never use 1px solid lines. Instead:
*   **Tonal Transitions:** Define page sections by shifting from `surface` to `surface_container_low` (#F5F5DC).
*   **The "Shadow Offset" Section:** Instead of a divider, use a 4px vertical offset of a darker surface color to simulate the physical depth of a console casing.

### Signature Textures: Dithered Gradients
To move beyond a "flat" vector look, use dithered gradients for hero backgrounds. These should transition from `primary` (#735C00) to `primary_container` (#FFD54F) using a 2x2 or 4x4 pixel noise pattern. This provides a "visual soul" that feels rendered by an 8-bit processor rather than a modern browser.

---

## 3. Typography: The Grid vs. The Groove
The typography strategy relies on the tension between the "Display" (The Machine) and the "Body" (The Information).

*   **Display & Headlines:** Use **'Press Start 2P'**. This is our "System Voice." It is used for Display-LG through Headline-SM. To maintain a premium feel, use wide letter-spacing (2-4%) for headers and never scale it below 12px to prevent anti-aliasing blur.
*   **Body & Utility:** Use **'Space Grotesk'**. This brings a "NASA-tech" precision to the system. It is used for all Title, Body, and Label roles. Its monospaced-adjacent aesthetic bridges the gap between the pixel fonts and modern legibility.

**Identity Hierarchy:**
*   **H1 (Display-LG):** Press Start 2P | 3.5rem | All Caps. This is the "Title Screen" moment.
*   **Body-MD:** Space Grotesk | 0.875rem | Regular. Used for long-form reading, providing a high-contrast break from the blocky headers.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, depth is not a shadow; it is a physical displacement. 

### The Layering Principle
We treat the UI as a series of nested physical shells.
1.  **Base:** `surface` (The console body).
2.  **Inlay:** `surface_container` (The screen bezel).
3.  **Component:** `surface_container_highest` (The buttons/cartridges).

### Ambient "Hard" Shadows
Avoid soft, blurry CSS shadows. Instead, use "Hard-Offset" shadows for floating elements. 
*   **Value:** 4px 4px 0px 0px.
*   **Color:** `on_surface` at 20% opacity.
*   **Effect:** This creates a "sticker" or "pop-up" effect consistent with 90s UI paradigms.

### Glassmorphism & CRT Overlays
For floating tooltips or overlays, use a semi-transparent `surface_container_highest` with a `backdrop-blur` of 8px. Apply a subtle scanline texture (horizontal 1px lines at 5% opacity) to these elements to create a "glass screen" feel.

---

## 5. Components

### Buttons
*   **Primary:** Background `primary_container`, 3px solid `on_surface` border. Text in `on_primary_fixed` (Deep Brown).
*   **Interaction:** On `:hover`, the button should shift 2px down and 2px right, with the shadow disappearing to simulate a physical "click" into the socket.
*   **Corner Radius:** Strict `0px` (Square).

### Cards
*   **Style:** No borders for the card itself. Use a `surface_container_low` background with a `primary` top-border (4px) to denote importance.
*   **Spacing:** High internal padding (24px - 32px) to maintain an editorial, airy feel despite the "chunky" elements.

### Input Fields
*   **Style:** Inset appearance. Use a 2px "inner shadow" (hard) using `outline` (#7F7662). 
*   **Label:** Always in 'Space Grotesk' Label-MD, All Caps, in `on_surface_variant`.

### 8-Bit Icons
*   Icons must be designed on a 16x16 or 24x24 grid with no anti-aliasing.
*   Stroke weight must be consistent (1px or 2px "chunks").

---

## 6. Do's and Don'ts

### Do
*   **DO** use asymmetric layouts. Place a large pixel header on the left with a massive margin-right to create an editorial look.
*   **DO** use "Game Boy Yellow" (#FFD54F) as a highlighter for text selections.
*   **DO** use deep browns for high-contrast text; it is more readable against beige than pure black.

### Don't
*   **DON'T** use border-radius. This system is strictly 0px. Rounded corners break the "hardware" metaphor.
*   **DON'T** use 1px dividers. If you need to separate content, use a 16px block of `surface_container_low` color.
*   **DON'T** use "Press Start 2P" for body text. It is a display face; using it for paragraphs destroys accessibility.
*   **DON'T** use standard Material Design "Drop Shadows." Only use hard-offset or tonal shifts.

---

## 7. Interaction States
Interaction should feel "mechanical." 
*   **Active States:** When a list item is selected, fill it with `primary_container` (#FFD54F) and change the text color to `on_primary_container`. 
*   **Loading:** Use a dithered "fill" animation where a container fills with color through a pixel-scatter pattern rather than a smooth fade.