```markdown
# Design System Strategy: The Analog-Digital Nexus

## 1. Overview & Creative North Star
**Creative North Star: "The Neon Arcade Archive"**

This design system is not a mere reproduction of the 90s; it is a high-end editorial distillation of the "Arcade Age." We are moving beyond the cliché "glitch" effects to create a sophisticated, intentional interface that treats the digital screen as a physical CRT cathode-ray tube. 

The system breaks the "modern web template" through **Intentional Structural Brutalism**. We reject the fluid, rounded containers of the current era in favor of rigid, 0px border-radius geometry. By utilizing high-contrast tonal layering and "glowing" elevations, we create an energetic, nostalgic experience that feels like a premium collector's edition of a classic game.

---

## 2. Colors: High-Voltage Chromatics
Our palette is rooted in the deep void of a dark arcade hall, punctuated by the high-frequency radiation of neon gas.

*   **Primary (`#df8eff`):** Our "Hyper-Magenta." Used for interactive focal points and active states.
*   **Secondary (`#00fbfb`):** "Oxygen Cyan." Reserved for technical data, success states, and secondary navigation.
*   **Tertiary (`#ff51fa`):** "Electric Violet." Used for accents and celebratory moments.
*   **Background (`#140727`):** The "Deep Void." A dark, purple-tinted black that prevents the high-contrast neons from feeling "cheap" or "harsher" than intended.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. To separate content, use **Tonal Blocking**. A `surface-container-low` section should sit directly against a `surface` background. The boundary is defined by the shift in color, not a line.

### Surface Hierarchy & Nesting
Treat the UI as a physical PCB (Printed Circuit Board). 
*   **Lowest Level:** `surface-container-lowest` (#000000) for deep-set background wells.
*   **Base Level:** `surface` (#140727) for the main environment.
*   **Raised Level:** `surface-bright` (#352254) for interactive panels.

### Signature Textures: The CRT Bloom
To provide "soul," apply a subtle linear gradient to main headers and buttons, transitioning from `primary` to `primary-container`. This mimics the uneven light of a phosphorus screen.

---

## 3. Typography: Pixel-Perfect Editorial
While the prompt suggests 8-bit styles, we use a sophisticated scale to ensure readability without sacrificing the "Bit-Depth" aesthetic.

*   **Display & Headlines:** Utilize **Press Start 2P** (mapped to our `display` and `headline` tokens). These must be used sparingly—treat them like "Boss Level" titles. 
*   **Titles & Body:** We utilize **Space Grotesk** (as per the typography scale) to provide a modern, "Tech-Editorial" feel. It maintains the geometric rigidity of the pixel fonts but offers the legibility required for high-end digital experiences.
*   **The Hierarchy:** Use `display-lg` for heroic moments. Ensure all text on `primary` surfaces uses `on-primary` (#4f006d) to maintain a crushing, high-contrast readability.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to mimic "natural sunlight." We use "Glows" to mimic "Light Emission."

*   **The Layering Principle:** Stack `surface-container-highest` over `surface-dim` to create a "raised" console panel look.
*   **Ambient Glows:** For floating modals or "Power-Up" states, use a large, diffused glow (30px-50px blur) using the `primary` color at 15% opacity. It should look like a neon sign reflecting off a dark wall.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline-variant` (#4f4165) at 20% opacity. 
*   **Glassmorphism & Scanlines:** Use a semi-transparent `surface-container` with a `backdrop-blur`. Overlay a 2px repeating linear-gradient (black at 5% opacity) to simulate **Scanlines**. This makes the UI feel like it exists behind a glass monitor.

---

## 5. Components

### Buttons: The "Mechanical Switch"
Buttons must feel chunky and tactile. 
*   **Default:** 0px radius, solid `primary` fill.
*   **Pressed State:** Move the element 2px down and 2px right, changing the background to `primary-dim`. 
*   **Outer Shadow:** Use a "Hard Shadow"—a 4px solid block of `on-primary-container` to the bottom right.

### Input Fields: The "Command Line"
*   **Background:** `surface-container-lowest` (#000000).
*   **Border:** A 2px solid bottom-border of `secondary` (#00fbfb).
*   **Caret:** A blinking 8-bit block cursor using the `secondary` color.

### Cards: The "Game Cartridge"
*   **Structure:** No borders. Use `surface-container-high`. 
*   **Header:** A contrasting `surface-container-highest` bar at the top to mimic the "grip" of a cartridge.
*   **Separation:** Instead of divider lines, use a 16px vertical gap (`Spacing-4`) or a color shift.

### Additional Component: "The Health Bar" (Progress)
Instead of a smooth loading bar, use segmented blocks. Each block represents 10% progress, using the `tertiary` color to create a "charging" aesthetic.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use 0px border radius on everything. 
*   **Do** lean into asymmetry. A sidebar can be slightly wider than the grid to feel like a "Player 2" console attachment.
*   **Do** use "Vibrant Highlighting." When a user hovers over a list item, change the entire background to `surface-bright`.

### Don't:
*   **Don't** use soft "Material" shadows. If it doesn't look like light coming from a tube, it doesn't belong.
*   **Don't** use rounded icons. Use pixel-grid aligned iconography or sharp, geometric vectors.
*   **Don't** use 100% white. Use `on-background` (#eee0ff) to maintain the purple-tinted retro-atmosphere.

### Accessibility Note:
While we use high-contrast neons, ensure that all text-to-background ratios meet WCAG AA standards. Use the `on-primary` and `on-secondary` tokens specifically designed to provide the necessary contrast against their parent vibrant fills.```