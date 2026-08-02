# Visual AI Academy

A **static**, visual-first Generative AI learning platform for 2nd-year engineering students. No backend, no database, no auth, and no runtime AI API calls — all lessons, quizzes, and visualizations ship as local data.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

`npm run build` outputs a static site in `dist/`.

## Deploy (static hosting)

Deploy the `dist/` folder to any static host:

- **Vercel / Netlify**: import the repo; build command `npm run build`, output `dist`
- **GitHub Pages**: publish `dist` (set Vite `base` if serving from a subpath)

Client-side routes are used (`/`, `/generative-ai/...`). Configure the host for SPA fallback to `index.html`.

## Route map

| Route | Page |
| --- | --- |
| `/` | Home / hero |
| `/generative-ai` | Track overview (9 categories) |
| `/generative-ai/:categoryId` | Category concept grid + progress |
| `/generative-ai/:categoryId/:conceptId` | Full concept lesson |

## Curriculum (V1)

**9 categories · 103 concepts** under Generative AI:

1. AI Fundamentals  
2. How LLMs Work  
3. Training & Alignment  
4. Prompt Engineering & Context Engineering  
5. RAG  
6. AI Agents  
7. AI Frameworks  
8. Deployment  
9. Production AI  

Progress (completed concepts, quiz scores) is stored in `localStorage`.

### Beginner learning order

1. AI Fundamentals (start at **What is AI?**)  
2. How LLMs Work (especially Tokenization → Attention → Next-token → Temperature)  
3. Prompt Engineering  
4. RAG  
5. Training & Alignment (skim then deepen)  
6. AI Agents  
7. Frameworks (conceptual map)  
8. Deployment + Production AI  

## Flagship visualizations

Richest interactive labs:

- Tokenization  
- Embeddings  
- Self-Attention  
- Next-Token Prediction  
- Temperature / Top-k / Top-p  
- Chain of Thought  
- RAG retrieval pipeline  
- ReAct agent loop  

Other concepts use stepped diagram timelines with Play / Pause / Step / Reset / Speed.

## Content authoring

Concept data lives under `src/data/generative-ai/`. Seeds are generated via:

```bash
node scripts/make-seeds.mjs
node scripts/build-all-content.mjs
```

Adding a concept: extend the seed scripts (or edit a module under `src/data/generative-ai/concepts/`), register the id in `categories.ts`, and optionally add a flagship viz in `src/visualizations/flagship/` + `registry.ts`.

Then regenerate the card-level index so grids and prerequisite links pick the concept up:

```bash
npm run gen:index
```

`src/data/generative-ai/conceptIndex.ts` is generated — don't hand-edit it. Full lesson payloads load on demand per category (`loadConcept` / `loadCategoryConcepts`), so only these summaries ship in the entry bundle.

## Stack

- Vite + React + TypeScript  
- React Router  
- Framer Motion  
- Pure static CSS design tokens (Fraunces + Sora + IBM Plex Mono)
