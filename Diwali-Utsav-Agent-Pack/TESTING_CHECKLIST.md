# Testing Checklist

## Setup and build

- [ ] `npm install` completes.
- [ ] `npm run dev` starts without errors.
- [ ] `npm run build` succeeds.
- [ ] `npm run preview` serves the production build.
- [ ] No uncaught browser console errors.

## Welcome and navigation

- [ ] Welcome screen appears.
- [ ] Begin Celebration works.
- [ ] Visitor can skip/continue without waiting for a long animation.
- [ ] Navbar anchors reach the correct sections.
- [ ] Mobile menu opens, closes, and closes on Escape.
- [ ] Back-to-top works.

## Personalization and language

- [ ] `?name=Rahul` displays Rahul.
- [ ] URL-encoded Hindi name displays correctly.
- [ ] Empty/missing name uses generic greeting.
- [ ] Very long name is safely limited.
- [ ] Name is rendered as text, not HTML.
- [ ] `?lang=hi` selects Hindi.
- [ ] `?lang=en` selects English.
- [ ] Language switch updates all visible UI strings.

## Interactive features

- [ ] Individual diya toggles.
- [ ] Light All Diyas works.
- [ ] Reset works.
- [ ] Rangoli presets change.
- [ ] Rangoli palette/customization works.
- [ ] Fireworks trigger from button.
- [ ] Fireworks stop and clean up.
- [ ] Reduced-motion mode avoids intense effects.
- [ ] Random blessing changes message.
- [ ] Gift opens and reveals card.

## Wishes and sharing

- [ ] Recipient selection works.
- [ ] Language/tone selection works.
- [ ] Generated text is editable.
- [ ] Copy works where clipboard permission is available.
- [ ] Copy failure gives useful feedback.
- [ ] WhatsApp share opens a prefilled message.
- [ ] URL and message are properly encoded.
- [ ] Site does not falsely claim a message was sent.

## Music

- [ ] Music starts only after explicit interaction.
- [ ] Play/Pause works when audio exists.
- [ ] Missing audio does not break the app.
- [ ] Rejected playback promise is handled.

## Responsive and accessibility

- [ ] Test 360px, 390px, 768px, 1024px, and 1440px.
- [ ] No horizontal overflow.
- [ ] Text is readable over backgrounds.
- [ ] Buttons are touch-friendly.
- [ ] Keyboard can reach and activate all controls.
- [ ] Focus is visible.
- [ ] Images have correct alt behavior.
- [ ] Screen reader labels are meaningful.
- [ ] `prefers-reduced-motion` is respected.

## Assets and deployment

- [ ] All eight supplied images are used appropriately.
- [ ] Optimized derivatives are used in production.
- [ ] No 74 MB ZIP or original full-size PNG set is shipped unnecessarily.
- [ ] Images do not appear stretched.
- [ ] Public deployment URL loads over HTTPS.
- [ ] Refreshing the root URL works.
- [ ] Query-string personalization works on deployed site.
