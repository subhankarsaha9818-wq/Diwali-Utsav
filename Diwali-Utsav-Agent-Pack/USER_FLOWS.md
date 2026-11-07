# User Flows — Diwali Utsav

## Flow A: First-time visitor

1. Visitor opens the site.
2. Intro scene shows a dark festive atmosphere, diya, subtle particles, greeting line, and Begin Celebration button.
3. Visitor activates the button.
4. The diya brightens; the main experience fades/slides into view.
5. Main page loads at the hero section.
6. Visitor can navigate with the navbar or scroll naturally.

The intro must not trap the visitor. Provide a visible skip/continue action if the intro animation is running.

## Flow B: Personalized shared link

Example: `https://your-site.example/?name=Rahul&lang=en`

1. Parse `name` and `lang` on initial load.
2. Sanitize and trim the name as plain text; limit unreasonable length.
3. Show `Rahul` in the greeting and greeting generator defaults where appropriate.
4. Initialize the language to English.
5. Do not require a form or account.

If no name is supplied, use a warm generic greeting such as “Dear Friend”.

## Flow C: Interactive diyas

1. Visitor scrolls to the diya section.
2. Each diya has an obvious interactive state.
3. Click/tap or keyboard activation toggles the flame.
4. A short positive message may appear, but avoid intrusive popups.
5. Light All Diyas activates all lamps.
6. Optional Reset action returns them to the unlit state.

## Flow D: Rangoli

1. Visitor selects one of the curated rangoli designs.
2. Visitor selects a color palette or a simple customization option.
3. Preview updates immediately.
4. Reset restores the original design.
5. The experience remains simple and touch-friendly; do not build a complex drawing application for version 1.

## Flow E: Fireworks

1. Visitor activates Celebrate Now or taps the fireworks area.
2. Canvas launches a short burst of fireworks.
3. Animation ends automatically and returns to idle.
4. Provide a reduced-motion alternative (static celebratory glow or simple message).
5. Avoid continuous CPU-heavy animation when the section is off-screen.

## Flow F: Wishes generator and sharing

1. Visitor chooses recipient (friend, family, teacher, colleague, or general).
2. Visitor chooses a tone/category if offered (warm, traditional, cheerful).
3. Visitor selects English or Hindi.
4. Generate a greeting.
5. Visitor can edit the generated text before sharing.
6. Copy button copies text.
7. WhatsApp button opens a prefilled message containing the greeting and public site URL.

## Flow G: Surprise gift

1. Gift card appears closed with a clear “Open your surprise” action.
2. Visitor activates it.
3. Box opens with a brief animation and restrained confetti/particles.
4. A personalized greeting card appears.
5. Card includes “With love, [Creator Name] ❤️”.
6. Visitor can copy or share the card message.

## Flow H: Music

1. Music is initially off.
2. Visitor explicitly presses Play after interacting with the page.
3. If the audio asset is available, playback begins.
4. Pause stops playback and updates the accessible button label.
5. If audio is missing or blocked, show a graceful unavailable state without breaking the page.
