# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev               # Start dev server (add DEMO_MODE=mock for no API key)
npm run build             # Production build
npm run typecheck         # tsc --noEmit
npm run lint              # ESLint
npm run test              # Vitest unit tests (run once)
npm run test:watch        # Vitest watch mode
npm run test:coverage     # Vitest with coverage report
npm run test:e2e          # Playwright E2E (requires running dev server)
npm run test:e2e:ui       # Playwright with interactive UI
npm run test:lighthouse   # Lighthouse perf audit via scripts/lighthouse.mjs
npm run format            # Prettier
```

Run a single test file: `npx vitest run src/__tests__/lib/qualification.test.ts`

Husky pre-commit hook runs lint-staged (ESLint + Prettier) on staged `.ts`/`.tsx` files.

## Architecture

**Pages (App Router):**

- `src/app/page.tsx` — landing page with `<Hero>`
- `src/app/book-demo/page.tsx` — AI concierge chat UI
- `src/app/leads/page.tsx` — internal demo queue showing captured leads

**API routes:**

- `POST /api/chat` — `streamText` with tools + mock fallback; `stopWhen: stepCountIs(5)`
- `GET /api/leads` — returns `listLeads()` from in-memory store

**AI lib (`src/lib/ai/`):**

- `model.ts` — factory driven by `AI_PROVIDER` + `HOUDINY_MODEL_ID` env vars; only Google implemented
- `system-prompt.ts` — builds the concierge system prompt
- `tools.ts` — three tools: `generate_sample_email`, `capture_lead`, `book_demo`
- `mock-stream.ts` — canned response stream when `DEMO_MODE=mock` or no API key

**Lead lib (`src/lib/lead/`):**

- `schema.ts` — Zod schema for `LeadInput`
- `qualification.ts` — BANT-lite scorer (0–100), `isQualified` threshold is 50
- `store.ts` — module-level array; resets on process restart (demo-only)

**Components:**

- `src/components/layout/` — `Header`, `NavMenu`, `NavDropdownPanel`, `MobileNav`
- `src/components/concierge/` — `ChatPanel` (orchestrates chat), `MessageList`, `MessageBubble`, `ChatComposer`, `ToolCallRenderer`, `LeadSummaryCard`, `SampleEmailCard`
- `src/components/hero/Hero.tsx` — landing hero
- `src/components/common/` — `PostHogProvider`, `ToastProvider`, `ComingSoonToast`

**Other:**

- `src/lib/nav-data.ts` — single nav source of truth; all items `comingSoon: true` except Book/Schedule Demo
- `src/lib/analytics.ts` — thin PostHog wrapper (`capture`)
- Path alias `@` → `src/`

## Key Rules

- **No real AI calls in tests** — always use `DEMO_MODE=mock` in CI and unit tests
- **Provider/model** are env-driven: `AI_PROVIDER` + `HOUDINY_MODEL_ID` in `.env.local`
- **Default model**: `gemini-2.0-flash` (free tier); add new providers in `lib/ai/model.ts`
- **In-memory store** resets on redeploy — documented, demo-only
- **Next.js version** has breaking changes from training data — read `node_modules/next/dist/docs/` before writing Next.js-specific code (per AGENTS.md)

## UI Work

Design skills in `.claude/skills/`:

- **ui-ux-pro-max** — design-system generator for B2B SaaS palettes/fonts
- **taste-skill** — anti-slop frontend principles (layout, typography, motion, spacing)

Use these skills for any UI additions or changes to maintain design quality.

## AI SDK v5 Notes

- `MockLanguageModelV3` from `ai/test` (not V2)
- `DefaultChatTransport` exported from `ai` (not `@ai-sdk/react`)
- `sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls` from `ai`
- Tool parts: `part.type === 'tool-invocation'`, `part.state`, `part.input`, `part.output`
- Wire format: `text-start` → `text-delta` → `text-end` (not `{ type: 'text', text }`)
