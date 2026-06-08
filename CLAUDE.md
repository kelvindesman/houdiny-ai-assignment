# CLAUDE.md — Houdiny.ai Assignment

## Commands

```bash
npm run dev          # Start dev server (add DEMO_MODE=mock for no API key)
npm run build        # Production build
npm run typecheck    # tsc --noEmit
npm run lint         # ESLint
npm run test         # Vitest unit tests
npm run test:watch   # Vitest watch mode
npm run test:e2e     # Playwright E2E
npm run format       # Prettier
```

## Architecture

- **App Router** pages: `src/app/page.tsx` (landing), `src/app/book-demo/page.tsx` (concierge), `src/app/leads/page.tsx` (demo queue)
- **AI route**: `src/app/api/chat/route.ts` — `streamText` + tools + mock fallback
- **AI lib**: `src/lib/ai/` — model factory, system prompt, tools, mock stream
- **Lead lib**: `src/lib/lead/` — Zod schema, qualification scorer, in-memory store
- **Nav data**: `src/lib/nav-data.ts` — single source of truth; all items `comingSoon: true` except Book/Schedule Demo

## Key Rules

- **No real AI calls in tests** — always use `DEMO_MODE=mock` in CI and unit tests
- **Provider/model** are env-driven: `AI_PROVIDER` + `HOUDINY_MODEL_ID` in `.env.local`
- **Default model**: `gemini-2.0-flash` (free tier); swap to Claude/Groq by editing `lib/ai/model.ts`
- **In-memory store** resets on redeploy — documented, demo-only

## UI Work

This project has design skills installed in `.claude/skills/`:
- **ui-ux-pro-max** — design-system generator for B2B SaaS palettes/fonts
- **taste-skill** — anti-slop frontend principles (layout, typography, motion, spacing)

Use these skills for any UI additions or changes to maintain design quality.

## AI SDK v5 Notes

- `MockLanguageModelV3` from `ai/test` (not V2)
- `DefaultChatTransport` exported from `ai` (not @ai-sdk/react)
- `sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls` from `ai`
- Tool parts: `part.type === 'tool-invocation'`, `part.state`, `part.input`, `part.output`
- Wire format: `text-start` → `text-delta` → `text-end` (not `{ type: 'text', text }`)
