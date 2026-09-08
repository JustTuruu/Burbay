# BURBAY Mongolia

An image-led Mongolian brand catalogue for BURBAY's official representative in Mongolia.
The landing page contains every collection, brand information, and a contact section for
wholesale enquiries and partnerships. Product images open detailed specifications and galleries.
There are no prices, shopping carts, payment options, or retail-store integrations.

## Development

Next.js 16.3.4 App Router, React 19, TypeScript, and Tailwind CSS v4.
Node 20.9 or newer is required.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run lint` and `npm run build` to verify changes.
Use `npm start` to serve the production build. All images are local; Next.js optimizes them
at request time, so the deployment needs a Node runtime.

Read the applicable documentation under `node_modules/next/dist/docs/` before changing Next.js code.
`AGENTS.md` and `CLAUDE.md` are maintained by Next.js and should remain in the repository.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, collection index, every product category, brand introduction, contact QR section |
| `/#strollers` | Strollers, grouped into 3-in-1, 2-in-1, single and travel models |
| `/#car-seats` | Car seats, including the Apollo Pro feature |
| `/#beds` | Playpen |
| `/#walkers` | Walker |
| `/#accessories` | Accessories |
| `/#about` | Brand introduction |
| `/#contact` | Wholesale, partnership and quotation contact section |
| `/products/[slug]` | Product gallery, variants, specifications, enquiry link and related images |
| `/products` | Redirects to `/#collections` |
| `/categories/[category]` | Redirects to its landing-page section; unknown categories return 404 |

Product and legacy category routes are prerendered. Unknown product slugs return 404.

## Contact QR setup

The contact section intentionally displays a labelled WeChat placeholder until a real QR image
is supplied. It does not submit enquiries or display a fake success message.

1. Add the real image as `public/contact/wechat-qr.png`.
2. In `content/site.ts`, set the WeChat entry's `qrImage` to `/contact/wechat-qr.png`.
3. Optionally set `account` to the real WeChat ID.

The site then replaces the placeholder with the QR image and scanning instructions.
Preserve the QR image's quiet zone. QR images render without image optimization.
Add entries to `contactChannels` to display additional channels.

## Content and design

- `content/site.ts`: brand details, collection index, hero copy, contact channels and footer copy.
- `content/products.ts`: product information, specifications, image paths and variant lookups.
- `components/sections/Categories.tsx`: the editorial category sections and featured models.
- `lib/images.ts`: local image metadata.
- `app/globals.css`: neutral palette, typography, responsive layouts and interaction styles.

Product listings use portrait image stages with model names and short captions. Collections scroll
horizontally with arrow controls, keyboard navigation, and native touch scrolling. There are no
price fields, promotional badges, or checkout destinations.
All five categories are available on the landing page. The header contains the brand,
region label and contact link; the collection index and footer navigate to page sections.
The catalogue has a sticky side navigation on desktop and a sticky horizontal navigation on smaller
screens. The highlighted category follows the current scroll position.

Add a product by saving `public/products/<slug>.jpg`, its detail images under
`public/products/gallery/`, and an entry in `content/products.ts`. Strollers and car seats appear
automatically in their landing-page lists. For another playpen, walker or accessory, extend the
corresponding editorial section in `components/sections/Categories.tsx` as well.

Shared product names and groups determine variants. Give models distinct names when they are
not variants. Product information is maintained locally; there is no automatic external sync.

Montserrat includes Cyrillic and Latin subsets. Image quality values are configured in
`next.config.ts`. Maintain the skip link, visible keyboard focus, accessible image labels and
reduced-motion support when making changes.

## Replace catalogue photos

Edit `content/catalogue.ts` to select a photo for each product without changing components or
product specifications. Existing standalone gallery photos are used where available; other models
keep their existing images. Product names, colours, ages and codes come from `content/products.ts`.

Save new photos locally under `public/products/` and set the product slug's `src`.
The image stages use a consistent 3:4 portrait ratio; 1200×1600 images work well.
Use `fit: "contain"` for a whole product on a plain background and `fit: "cover"` for a
finished portrait photograph. `position` controls framing.

The default `blend: "multiply"` blends white-background images into the neutral stage using CSS.
For a finished photo, set `blend: "normal"` to preserve its original background and colours.
Optionally set `background` to a CSS colour. The original image files remain unchanged.

Example entry in `catalogueImages`:

```ts
"e83-black": {
  src: "/products/e83-black-portrait.jpg",
  fit: "cover",
  position: "center",
  blend: "normal",
  background: "#ededeb",
},
```
