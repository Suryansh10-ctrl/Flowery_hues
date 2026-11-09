# Flowery Hues — Premium Perfume E-commerce

A modern luxury perfume e-commerce web application inspired by [gdu20.weblium.site](https://gdu20.weblium.site/).

## 🌟 Highlights & Aesthetics

- **Visual Direction**: Haute Parfumerie aesthetic with warm off-white and cream backgrounds (`#fbfbfb`, `#f8f5f1`), signature burgundy accents (`#6f1e22`), dark taupe, and deep charcoal.
- **Typography**: Editorial serif headings powered by **Playfair Display**, paired with clean **Open Sans** body text and an authentic **Great Vibes** / **Alex Brush** Parisian cursive signature brand logo.
- **Photography**: Editorial-grade perfume flacons, minimalist glass bottles, soft shadows, natural lighting, and botanicals.

## 🧭 Multi-Page Architecture (React Router `<Link>`)

The application features instant client-side routing across 10 pages:

- `/` — **Home**: Complete flagship landing experience with all 15 reference sections.
- `/about` — **About Us & Philosophy**: Atelier heritage, 3 formulation pillars, 4-milestone timeline (2005–2025).
- `/best-sellers` — **Best Sellers**: Curated showcase of signature creations with Quick View and Add to Bag.
- `/new-scent` — **New Scent & Notes**: Olfactory notes breakdown (Jasmine, Rose, Green Tea, Vanilla, Sandalwood, Musk) + latest seasonal releases and Scent Profiler.
- `/catalog` — **Catalog Archive**: Full e-commerce store with category filters, price slider ($25–$150), search, sorting, active filter pills, and mobile filter drawer.
- `/faq` — **Client Concierge & FAQ**: Accordion questions on longevity, discovery samples, ordering, and delivery, plus direct concierge contact.
- `/testimonials` — **Client Reflections**: Verified customer stories and an interactive reflection submission form.
- `/wishlist` — **Wishlist**: Dedicated personal collection view with instant Move to Bag.
- `/product/:id` — **Product Details**: Olfactory pyramid (Top, Heart, Base notes), longevity/sillage metrics, flacon size selection (50ml/100ml), tabs (*The Scent Ritual*, *Artisanal Formulation*, *Client Reviews* with submission), and related pairings.
- `/cart` — **Shopping Bag**: Dedicated basket management page with live discount calculation (`WINTER15`), quantity controls, and checkout readiness summary.

## 📱 Mobile-First Responsive Design

- **2-Column Grids on Mobile**:
  - Category Cards (**Women**, **Men**, **New**, **Signature**) render in a 2-column grid on mobile viewports.
  - Product Cards (**Best Sellers**, **Catalog Archive**, and **Related Pairings**) render in clean 2-column grids on mobile devices.
- **Scroll Fixes & Modal Sizing**:
  - Background body-scroll locking prevents the underlying page from scrolling when modals or drawers are open, eliminating double scrollbars.
  - Transparent scrollbar tracks with slim 5px thumbs for modern rendering.
  - Quick View modal is capped at `max-h-[92vh]` on mobile with a compact top flacon banner.

## 🛍️ Core E-Commerce Features

- **Cart Drawer & Dedicated Cart Page**: Slide-over drawer and `/cart` page with quantity adjustment, flacon removal, live discount calculation (`WINTER15` for -15%), subtotal, free shipping threshold ($50), and total.
- **Interactive Scent Diagnostic Profiler**: Built-in 3-step fragrance profiler matching users with their ideal bottle based on mood, wear occasion, and note preference.
- **Toast Notifications**: Floating real-time feedback when items are added to bag, saved to wishlist, or when discount codes are applied.
- **LocalStorage Persistence**: Both Cart and Wishlist states persist across page reloads.

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
