# Asset Manifest

The supplied archive contains eight PNG images. Each is 2752 × 1536 pixels, RGBA. The original archive is approximately 74 MB; optimize derivatives before shipping the site.

| Original filename | Suggested output filename | Intended usage |
|---|---|---|
| `Main Hero Background.png` | `main-hero-background.webp` | Hero background |
| `Diya image.png` | `diya-image.webp` | Diya section artwork / decorative reference |
| `Rangoli Image.png` | `rangoli-image.webp` | Rangoli section artwork |
| `Diwali Decoration.png` | `diwali-decoration.webp` | Gallery / decorative section |
| `Lakshmi-Ganesh.png` | `lakshmi-ganesh.webp` | Blessings section |
| `Fireworks.png` | `fireworks.webp` | Fireworks section background |
| `Festive Background.png` | `festive-background.webp` | Secondary decorative background |
| `Greeting Card Background.png` | `greeting-card-background.webp` | Greeting and surprise card background |

## Handling requirements

1. Extract the archive supplied by the owner.
2. Preserve the original files outside the production bundle until derivatives are verified.
3. Convert to WebP where browser support and visual quality are satisfactory.
4. Create responsive derivatives (for example, desktop and mobile widths) when useful.
5. Keep transparency where it is meaningful; do not flatten transparent artwork onto an arbitrary color.
6. Use `srcset`/`sizes` or `<picture>` where appropriate.
7. Lazy-load below-the-fold images.
8. Provide descriptive alt text for informative images; use empty alt text for purely decorative images.
9. Avoid stretching images. Use `object-fit`/`background-size` intentionally and position focal points appropriately.

## Missing asset

No music/audio file was present in the supplied archive. Do not pretend an audio track exists. Implement a graceful optional player and document where the owner can add a properly licensed instrumental file.
