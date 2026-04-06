# Frontend Assessment – Content Explorer

A production-minded Content Explorer built with Next.js App Router, TypeScript, and Tailwind CSS.  
This project fetches product data from DummyJSON and presents it in a searchable, filterable, paginated interface with server-side data fetching, loading/error states, and dynamic detail pages.

## Live Demo

https://contentexplorer.vercel.app/

## Repository

https://github.com/Elitecrafttech/Assessment.git

---

## Tech Stack

- Next.js 15+ App Router
- TypeScript (strict mode)
- Tailwind CSS
- Vitest
- React Testing Library
- DummyJSON API

---

## Features

### Listing Page
- Server-rendered product listing
- Displays 20 items per page
- Product cards include:
  - title
  - image
  - price
  - category
- Responsive grid:
  - 1 column on mobile
  - 2 columns on tablet
  - 4 columns on desktop
- Pagination

### Detail Page
- Dynamic route: `/products/[id]`
- Server-side data fetching
- Metadata generation for SEO:
  - title
  - description
  - Open Graph image
- Back navigation to the listing page

### Search and Filtering
- Debounced search input (300ms)
- Category filter
- URL-driven state using query params
- Shareable search/filter URLs

### States
- Loading skeletons via `loading.tsx`
- Friendly error boundary via `error.tsx`
- Empty state when no results match

### Testing
- ProductCard component test
- SearchInput component test

---

## API Choice

I chose **DummyJSON** because it is stable, free, paginated, and requires no authentication.  
This allowed me to focus on component architecture, server data fetching, URL state management, and performance rather than API setup complexity.

---

## Deployment

I chose Vercel for rapid deployment and seamless Next.js integration.

---

## Project Structure

```bash
app/
  components/
    CategoryFilter.tsx
    ProductCard.tsx
    SearchInput.tsx
    Skeleton.tsx
  features/
    services/
      product.service.ts
  lib/
    api.ts
  products/
    [id]/
      page.tsx
  types/
    product.ts
  error.tsx
  loading.tsx
  layout.tsx
  page.tsx