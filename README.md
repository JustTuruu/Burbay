# Burbay Mongolia

Brand site for Burbay baby gear — strollers, car seats, playpens, walkers and accessories — in
Mongolian, for Mongolia. It is a catalogue only: no cart, no checkout, no payment code. Ordering and
payment happen on the owner's existing Zochil storefront, [Bolorhon Kids
Store](https://bolorhonkids.mn).

Updating a price, adding a product or rewriting a headline is a data edit; no component needs to be
touched. Site copy is Mongolian. The codebase and this document are English.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16.3.4, App Router |
| UI | React 19.2.8 |
| Language | TypeScript 5, `strict: true`, `@/*` aliased to the repository root |
| Styles | Tailwind CSS v4 through `@tailwindcss/postcss`, one stylesheet |
| Linting | ESLint 9 flat config: `eslint-config-next` core-web-vitals + typescript |

No database, no API route, no server action, no environment variable.

## Quick start

Node 20.9 or newer, as required by Next 16.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server on port 3000 |
| `npm run build` | Production build |
| `npm start` | Serves the production build; run `build` first |
| `npm run lint` | ESLint over the whole repository |

There is no test script and no test framework.

## Routes

| Route | File | Renders |
| --- | --- | --- |
| `/` | `app/page.tsx` | Hero, system banner, categories, featured products, statement, trust bar |
| `/products` | `app/products/page.tsx` | All 23 products, one section per category |
| `/categories/[category]` | `app/categories/[category]/page.tsx` | One category; an unknown value returns 404 |
| `/products/[slug]` | `app/products/[slug]/page.tsx` | Gallery, colour variants, specs, description, Order button, related items |

Both dynamic routes declare `generateStaticParams`, so all 5 category pages and all 23 product pages
are prerendered at build time.

## Project layout

```
app/
  layout.tsx                   metadata, Montserrat, skip link, header and footer
  page.tsx                     home page
  globals.css                  the only stylesheet: design tokens + component classes
  icon.svg                     favicon
  products/page.tsx
  products/[slug]/page.tsx
  categories/[category]/page.tsx
components/
  sections/                    Hero, SystemBanner, Categories, FeaturedProducts, Statement, TrustBar
  product/                     ProductCard, ProductGrid, Gallery
  site/                        SiteHeader, SiteFooter
  ui/                          EditorialImage, Icons, Reveal, SmartLink
content/
  site.ts                      marketing copy and navigation
  products.ts                  the catalogue, its types and lookup helpers
lib/
  images.ts                    editorial imagery and the productImage helper
public/
  brand/logo.png               945×275, used by the header, the mobile drawer and the footer
  products/                    23 card images plus 8 large editorial crops
  products/gallery/            94 product gallery images
```

`public/` is about 20 MB. Only three files are client components: `SiteHeader`, `Gallery` and
`Reveal`. Everything else renders on the server.

## Content model

Three files hold everything a maintainer edits.

| File | Holds | Read by |
| --- | --- | --- |
| `content/site.ts` | Brand, store links, navigation, header labels, hero, banner, category blurbs, statement, trust bar, footer | Header, footer and the home page sections |
| `content/products.ts` | The 23 products, category and group metadata, lookup helpers | Product pages, category pages, the featured block |
| `lib/images.ts` | The seven editorial images used by the home page, and `productImage()` | Marketing sections and product cards |

`content/site.ts` exports one `site` object, frozen with `as const`. The `STORE` constant at the top
is the storefront origin for the links defined in that file. It does not reach
`content/products.ts`,
where every product carries its own absolute `storeUrl`.

`content/products.ts` exports:

| Export | Purpose |
| --- | --- |
| `Category` | Union of the five category ids |
| `Product`, `ProductSection` | Row types |
| `categoryOrder`, `categoryMeta` | Display order, plus a label and description per category |
| `groupMeta` | Label per group id, used as subheadings inside a category |
| `products` | The 23 entries |
| `getProduct(slug)` | Single lookup |
| `getVariants(product)` | Same `name` and `group` — drives the colour switcher |
| `getRelated(product, limit = 4)` | Same category, different `name` |

Product fields:

| Field | Notes |
| --- | --- |
| `slug` | URL segment, and the filename of the card image |
| `storeId` | Zochil `categoryId/productId` pair |
| `title`, `name` | Full store title; short model name used on cards and headings |
| `group` | Key into `groupMeta`: `3in1`, `2in1`, `single`, `light`, `carseat`, `booster`, `playpen`, `walker` |
| `category` | Key into `categoryMeta` |
| `age`, `color`, `code` | Facts listed on the detail page; use `""` when not applicable |
| `price` | Display string such as `1,399,000₮`, never a number |
| `badge` | Optional label drawn over the card image: `Шинэ`, `Luxury`, `Бестселлер` |
| `featured` | `true` adds it to the featured row on the home page; 8 today |
| `swatches` | Hex colours; the first is the dot in the variant switcher |
| `short` | One-line summary shown under the price |
| `sections` | `{ title, items[] }` bullet blocks |
| `paragraphs` | Free paragraphs below the bullet blocks |
| `images` | Gallery paths under `/products/gallery/` |
| `storeUrl` | The Zochil page the Order button opens; always `https://bolorhonkids.mn/products/<storeId>` |

Counts today: strollers 16, car seats 4, playpens 1, walkers 1, accessories 1.

Derived, never stored: the product URL (`/products/<slug>`), the card image path, the per-category
counts, and the colour variants — all computed from the fields above.

## Everyday tasks

**Change a price.** Edit `price` on that product in `content/products.ts`. Nothing else refers to
it.

**Add a product.**

1. Save a square card image as `public/products/<slug>.jpg`.
2. Save gallery images as `public/products/gallery/<slug>-1.jpg`, `-2.jpg`, and so on.
3. Append an entry to `products`, listing the gallery paths in `images` and pointing `storeUrl`
   at the live store page.

The product then appears on `/products`, on its category page and at `/products/<slug>`.

**Add a colour variant.** Add a second product with the same `name` and `group` and a different
`color`. `getVariants` picks it up and both pages show a switcher.

**Change marketing copy.** Edit `content/site.ts`. The one exception is the delivery and instalment
sentence under the Order button, which is written into `app/products/[slug]/page.tsx`.

**Add a category.** Extend `Category`, `categoryOrder` and `categoryMeta` in `content/products.ts`,
then add a navigation entry in `content/site.ts`.

## Images

Every image is local. `next.config.ts` configures no remote host, so files must live under
`public/`.

| Path | Contents | Found by |
| --- | --- | --- |
| `public/products/<slug>.jpg` | Card images | Derived from the slug by `productImage()` |
| `public/products/*-lg.jpg` | Large editorial crops | Listed by hand in `lib/images.ts` |
| `public/products/gallery/` | Detail galleries | Listed by hand in each product's `images` |
| `public/brand/logo.png` | Wordmark | Referenced directly, rendered `unoptimized` |

`lib/images.ts` exposes `hero`, `banner`, `strollers`, `carSeats`, `playpen`, `walker` and
`booster`,
each with `src`, `alt`, `tone` (the colour shown behind the image while it loads) and `ratio`.

`EditorialImage` wraps `next/image` for the marketing sections and cards. `Gallery` handles the
product detail view. Both request quality 82; gallery thumbnails request 70. `next.config.ts`
allowlists `[70, 82, 90]`, and any other value is coerced to the nearest allowed one, so add the
value there before using it.

Unreferenced and safe to delete: `logo.webp` in the repository root,
`public/products/pc600-grey-lg.jpg`, and the `create-next-app` leftovers `file.svg`, `globe.svg`,
`next.svg`, `vercel.svg` and `window.svg`.

## Design system

`app/globals.css` is the whole design system. Its Tailwind v4 `@theme` block defines the colours
`navy`, `navy-deep`, `slate`, `muted`, `line`, `stone`, `sand` and `white`, the `--font-sans` stack
and the `--ease-soft` easing token. Tokens become utilities, so `--color-navy` gives you `bg-navy`,
`text-navy` and `border-navy`.

Montserrat is loaded in `app/layout.tsx` with the `latin`, `cyrillic` and `cyrillic-ext` subsets at
weights 300, 400, 500 and 600, with `display: swap`. Cyrillic coverage is why this family was
chosen.

Build pages from these classes rather than re-inventing type scales and spacing:

| Class | Use |
| --- | --- |
| `.shell` | Page gutter and 90rem max width |
| `.section` | Full-width band padding, `clamp(4rem, 8vw, 7.5rem)` |
| `.display-xl` `.display-lg` `.display-md` | Heading sizes |
| `.lede` `.body-copy` `.statement-text` | Body copy at three weights of emphasis |
| `.eyebrow` | Uppercase label above a heading, 0.22em tracking |
| `.meta` | The same at 0.18em, for field labels and grid subheadings |
| `.btn` + `.btn-solid` `.btn-outline` `.btn-light` | Pill buttons |
| `.text-link` | Underlined uppercase link |
| `.card` | Product card surface: border, radius, hover lift |
| `.scroll-row` | Product list: a snapping horizontal carousel below 640px, a two-column grid from 640px, four columns from 1024px |
| `.img-zoom` | Slow zoom on hover |

`Reveal` sets `data-reveal` and flips `data-visible` through an `IntersectionObserver`. The rules
that
hide content are scoped to a `.js` class added by an inline script in the layout, so the page stays
fully readable with JavaScript disabled, and `prefers-reduced-motion` turns the animation off.

## Conventions

- **Product links stay on this site.** Cards, images and titles all point at `/products/<slug>`.
  Only
  the Order button on a product page, the bag icon in the header and a few footer links go to
  bolorhonkids.mn. `SmartLink` enforces the split: internal hrefs go through `next/link`, anything
  matching `^https?://` opens in a new tab with `rel="noreferrer"`.
- **No discounts.** `Product` has a single `price` field, by decision. Do not add an old price or a
  percentage badge.
- **No comments in the source.** The owner asked for them to be removed. Name things clearly
  instead.
- **Match the accessibility pattern.** Give every new section an `aria-labelledby` pointing at its
  heading, or an `aria-label`. Mark the current entry in a list of links with `aria-current`. Do not
  remove the skip link or the global `:focus-visible` outline.
- **Run `npm run lint` and `npm run build` before committing.** Both are clean today.

## Next.js 16 notes

This project depends on four behaviours that differ from older Next.js:

- `params` is a `Promise` and must be awaited in both dynamic pages.
- `PageProps<"/products/[slug]">` and `LayoutProps<"/">` are generated types. They come from
  `.next/dev/types`, which `tsconfig.json` includes, so run the dev server or a build before
  typechecking a new route.
- `next/image` uses `preload` for above-the-fold images. `priority` is deprecated and appears
  nowhere
  in this codebase.
- `images.qualities` is an allowlist, not a hint.

## Build, deployment and data

The build is fully static, but the deployment target still needs a Node 20.9+ runtime because
`next/image` optimises on request.

Catalogue data was captured from the live storefront on 5 September 2026. There is no sync: when the
store changes a price, a photo or a product, update this repository by hand.

`next dev` writes `AGENTS.md`, and `CLAUDE.md` imports it. Leave both in place — deleting them only
produces an uncommitted change that `next dev` recreates.
