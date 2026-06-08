# Houdiny.ai — AI Sales Concierge (Take-Home Assignment)

A faithful landing page clone + AI Sales Concierge for [Houdiny.ai](https://houdiny.ai), built as a take-home assignment.

The standout feature: instead of a static "book a demo" form, this uses **Houdiny's own value proposition** — an AI agent — to qualify leads, answer product questions, and demonstrate the product live by generating a hyper-personalized cold email on the spot.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** with custom brand design tokens
- **Vercel AI SDK v5** (`ai`, `@ai-sdk/react`, `@ai-sdk/google`)
- **Zod** for schema validation
- **Vitest** + **React Testing Library** (unit tests)
- **Playwright** (E2E tests)

## Quick Start

```bash
# Install dependencies
npm install

# Run in mock mode (no API key required)
DEMO_MODE=mock npm run dev

# Open http://localhost:3000
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Default | Description |
|----------|---------|-------------|
| `GOOGLE_GENERATIVE_AI_API_KEY` | — | Google Gemini API key (optional in mock mode) |
| `AI_PROVIDER` | `google` | AI provider (`google` · swap to `anthropic`/`groq` in `lib/ai/model.ts`) |
| `HOUDINY_MODEL_ID` | `gemini-2.0-flash` | Model ID (free-tier Gemini) |
| `DEMO_MODE` | — | Set to `mock` to use canned responses (no key needed) |

## Running Tests

```bash
# Unit tests
npm test

# Unit tests (watch mode)
npm run test:watch

# E2E tests (requires dev server, runs in mock mode automatically)
npm run test:e2e
```

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run typecheck    # TypeScript type check
npm run lint         # ESLint
npm run format       # Prettier format
```

## Vercel Deployment

1. Import this repo into [Vercel](https://vercel.com)
2. Set environment variables:
   - `GOOGLE_GENERATIVE_AI_API_KEY` = your Gemini API key
   - `AI_PROVIDER` = `google`
   - `HOUDINY_MODEL_ID` = `gemini-2.0-flash`
3. Deploy — previews work in mock mode without a key

## Swapping AI Provider

The AI provider is a one-line env-driven swap. In `src/lib/ai/model.ts`, add your provider:

```typescript
if (provider === 'anthropic') {
  const { createAnthropic } = await import('@ai-sdk/anthropic');
  return createAnthropic({ apiKey: process.env['ANTHROPIC_API_KEY'] })(modelId);
}
```

Then set `AI_PROVIDER=anthropic` and `HOUDINY_MODEL_ID=claude-opus-4-8`.

## Architecture

```
src/
  app/
    page.tsx              # Landing page (Header + Hero)
    book-demo/page.tsx    # AI Concierge shell
    leads/page.tsx        # Sales follow-up queue (demo store)
    api/chat/route.ts     # streamText + tools + mock fallback
    api/leads/route.ts    # Read captured leads
  components/
    layout/               # Header, NavMenu, NavDropdownPanel, MobileNav
    hero/                 # Hero section
    common/               # ToastProvider, ComingSoonToast
    concierge/            # ChatPanel, MessageList, MessageBubble, etc.
  lib/
    ai/                   # model.ts, system-prompt.ts, tools.ts, mock-stream.ts
    lead/                 # schema.ts, qualification.ts, store.ts (in-memory demo)
    nav-data.ts           # Single source of truth for all nav items
```

## Notes

- **In-memory leads store** (`lib/lead/store.ts`) resets on redeploy — it's a demo only. In production, replace with a real database.
- **No AI calls in tests** — CI sets `DEMO_MODE=mock` everywhere.
- **Provider-agnostic** — AI SDK v5 factory in `lib/ai/model.ts` makes swapping providers a one-liner.
