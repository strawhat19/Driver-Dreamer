# Driver Dreamer — Grand Tourer Crest, v3

This round refines the selected **v1 Grand Tourer Crest**. The original shield, navy/red/white palette and Driver Dreamer wordmark anchor all four directions.

## Concepts

| File prefix | Direction | Idea and likely use |
| --- | --- | --- |
| `00-grand-tourer-original` | Original reference | Copies of the selected v1 artwork for comparison. |
| `01-grand-tourer-dream-bubbles` | Exact crest, dream bubbles | Original visible artwork preserved except the three red collection rows, replaced with three outlined thought bubbles growing toward the car. Closest match for the header, app icon or avatar. |
| `02-grand-tourer-dream-cloud` | Small dream cloud | Original crest and car with a scalloped red thought cloud and two smaller bubbles replacing the lower rows. A more literal dream motif for a community or saved-vehicle collection. |
| `03-grand-tourer-sculpted-dream` | Sculpted GT | Slimmer crown, lower/wider front-facing car, split headlight details and a gently staggered trail of filled red thought bubbles. A more polished automotive badge. |
| `04-grand-tourer-cloud-car` | Car inside a dream | A white thought cloud encloses the car within the original shield, with red bubbles below it. A stronger dream-led identity for discovery and wishlists. |

Each direction includes a horizontal `.svg` logo and a standalone `-icon.svg`, with matching `.png` previews. SVG canvases are transparent; PNG previews use white backgrounds to match the selected v1 presentation.

Start with [the comparison sheet](05-comparison.png), or open [the editable comparison](05-comparison.svg). The exact-match request is [01-grand-tourer-dream-bubbles.svg](01-grand-tourer-dream-bubbles.svg) and [its icon](01-grand-tourer-dream-bubbles-icon.svg).

## Palette and artwork

- Deep navy: `#07162F`
- Racing red: `#E32636`
- White: `#FFFFFF`

The four final directions use native editable SVG geometry. The original live-text wordmark and its Avenir Next, Inter and Arial fallbacks remain in place; the selected font can be outlined when preparing production artwork. Vehicle drawings are generic and contain no manufacturer badges.

## Image exploration

`explorations/04-cloud-car-imagegen.png` is the supporting raster exploration made with the built-in `image_gen` tool. Its two-step prompt set is saved in `explorations/prompts.txt`. The final cloud-car SVG is a native geometric interpretation of this direction, with the original crest and wordmark retained.

Earlier concept rounds and application code remain untouched. This folder is a design round for review, without adopting a logo into the app.
