@AGENTS.md

# Project Rules

## Stack

- Next.js App Router, TypeScript, Tailwind CSS v4, classnames, SVGR
- Static export — no SSR, no API routes

### Layout & animation

Always wrap components content in `<Container>` — it handles all horizontal padding. Never add horizontal padding manually.
Always use `<FadeIn>` for entrance animations. Never use Framer Motion, CSS keyframes, or other animation approaches. Use `<FadeIn>` as a wrapper for each element.

## Components

- Flat folder structure: `/components/hero/HeroSplit.tsx`
- No new dependencies without approval
- Use `cx()` from `classnames` for conditional classes
- SVGs imported as React components from `@/public/icons/`

## Content

- All content lives in `/content/*.ts`
- Never hardcode content inside components
- Components always import from `/content`

## Styling

- Use Tailwind v4 CSS variables defined in `globals.css`
- Never add new color tokens without approval
- Never add new spacing tokens without approval
- Use existing tokens: `--spacing-main-container`, `--spacing-main-container-wider`

## Buttons

- Use existing button components from `/components/ui/`
- Never create inline button styles

## Showcase

- `/app/showcase` imports from `/content/dummy`
- `/page.tsx` imports from `/content`

## TypeScript

- No `any` types
- All content files must be typed
