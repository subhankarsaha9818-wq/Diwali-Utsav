# Animations and Audio

## Motion principles

- Motion should feel gentle, warm, and celebratory.
- Prefer CSS transforms and opacity for decorative movement.
- Use Framer Motion selectively for meaningful entrances/transitions only.
- Avoid long blocking intros; the visitor should be able to continue immediately.
- Avoid rapid flashing, strobing, or excessive particle density.

## Required animations

- Welcome diya flame and glow.
- Welcome-to-main transition.
- Subtle hero particle/light movement.
- Diya flame on/off state.
- Rangoli selection transition.
- Firework bursts.
- Slow floating lanterns.
- Gift opening and brief reveal particles.
- Small feedback animation for copied/generated messages.

## Reduced motion

When `prefers-reduced-motion: reduce` is active:
- Disable or greatly simplify floating lanterns and particles.
- Replace long transitions with immediate state changes or short fades.
- Fireworks should use a static visual/brief low-motion alternative.
- All content and interactions must remain available.

## Fireworks implementation

- Canvas 2D is preferred over a large animation dependency.
- Scale canvas for device pixel ratio.
- Bound particle count and lifetime.
- Use `requestAnimationFrame` only while an effect is active.
- Pause when document is hidden or the section is not visible.
- Clean up animation frames and event listeners on unmount.

## Audio behavior

- Music starts off.
- Start playback only after a visitor presses the music control or an explicitly labeled enable-music action.
- Provide accessible Play/Pause labels and state.
- Handle rejected `play()` promises and missing audio files.
- Do not make sound effects mandatory; they are optional and must have independent controls if added.
- No audio file was supplied. Use `/assets/audio/diwali-instrumental.mp3` as the documented optional location.
