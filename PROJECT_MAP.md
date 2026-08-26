# Project Map

<!-- Generator: RepoLocus 0.2.1; deterministic source map. -->

## What this repository does

**Needs review:** No descriptive README paragraph was found. The scanned files primarily use typescript, config, javascript; inspect the entry points below before assigning a purpose.

## Quick start for readers

- **Confirmed:** Start with [course/README.md:1](course/README.md#L1).
- **Confirmed:** Start with [course/package.json:1](course/package.json#L1).
- **Confirmed:** Start with [flightdiaries/backend/README.md:1](flightdiaries/backend/README.md#L1).
- **Confirmed:** Start with [flightdiaries/backend/package.json:1](flightdiaries/backend/package.json#L1).
- **Confirmed:** Start with [flightdiaries/frontend/README.md:1](flightdiaries/frontend/README.md#L1).

## Repository layout

| Area | Files | Main languages | Evidence |
|---|---:|---|---|
| `(repository root)` | 1 | config | [.gitignore:1](.gitignore#L1) |
| `.github` | 3 | config | [.github/workflows/healthapp-e2e-tests.yml:1](.github/workflows/healthapp-e2e-tests.yml#L1) |
| `course` | 16 | config, javascript, markdown | [course/.gitignore:1](course/.gitignore#L1) |
| `flightdiaries` | 36 | config, javascript, markdown | [flightdiaries/backend/.gitignore:1](flightdiaries/backend/.gitignore#L1) |
| `healthapp` | 8 | config, javascript, typescript | [healthapp/.gitignore:1](healthapp/.gitignore#L1) |
| `healthapp-tests` | 5 | config, markdown, typescript | [healthapp-tests/README.md:1](healthapp-tests/README.md#L1) |
| `patientor` | 38 | config, javascript, markdown | [patientor/backend/.gitignore:1](patientor/backend/.gitignore#L1) |
| `patientor-api-tests` | 4 | config, typescript | [patientor-api-tests/package-lock.json:1](patientor-api-tests/package-lock.json#L1) |
| `patientor-tests` | 4 | config, typescript | [patientor-tests/package-lock.json:1](patientor-tests/package-lock.json#L1) |

## Main entry points

- **Confirmed:** `course/src/main.tsx` matches an entry-point convention ([course/src/main.tsx:1](course/src/main.tsx#L1)).
- **Confirmed:** `flightdiaries/backend/src/index.ts` matches an entry-point convention ([flightdiaries/backend/src/index.ts:1](flightdiaries/backend/src/index.ts#L1)).
- **Confirmed:** `flightdiaries/frontend/src/main.tsx` matches an entry-point convention ([flightdiaries/frontend/src/main.tsx:1](flightdiaries/frontend/src/main.tsx#L1)).
- **Confirmed:** `healthapp/index.ts` matches an entry-point convention ([healthapp/index.ts:1](healthapp/index.ts#L1)).
- **Confirmed:** `patientor/backend/src/index.ts` matches an entry-point convention ([patientor/backend/src/index.ts:1](patientor/backend/src/index.ts#L1)).
- **Confirmed:** `patientor/frontend/src/main.tsx` matches an entry-point convention ([patientor/frontend/src/main.tsx:1](patientor/frontend/src/main.tsx#L1)).

## Core modules

- **Inferred:** `patientor` is a module area with 38 indexed files and 5186 extracted symbols; representative source: [patientor/backend/.gitignore:1](patientor/backend/.gitignore#L1).
- **Inferred:** `flightdiaries` is a module area with 36 indexed files and 4474 extracted symbols; representative source: [flightdiaries/backend/.gitignore:1](flightdiaries/backend/.gitignore#L1).
- **Inferred:** `course` is a module area with 16 indexed files and 2124 extracted symbols; representative source: [course/.gitignore:1](course/.gitignore#L1).
- **Inferred:** `healthapp` is a module area with 8 indexed files and 1989 extracted symbols; representative source: [healthapp/.gitignore:1](healthapp/.gitignore#L1).
- **Inferred:** `healthapp-tests` is a module area with 5 indexed files and 99 extracted symbols; representative source: [healthapp-tests/README.md:1](healthapp-tests/README.md#L1).
- **Inferred:** `patientor-api-tests` is a module area with 4 indexed files and 86 extracted symbols; representative source: [patientor-api-tests/package-lock.json:1](patientor-api-tests/package-lock.json#L1).
- **Inferred:** `patientor-tests` is a module area with 4 indexed files and 86 extracted symbols; representative source: [patientor-tests/package-lock.json:1](patientor-tests/package-lock.json#L1).
- **Inferred:** `.github` is a module area with 3 indexed files and 101 extracted symbols; representative source: [.github/workflows/healthapp-e2e-tests.yml:1](.github/workflows/healthapp-e2e-tests.yml#L1).
- **Inferred:** `(repository root)` is a module area with 1 indexed files and 0 extracted symbols; representative source: [.gitignore:1](.gitignore#L1).

## Runtime and data flow

- **Inferred:** `course/src/main.tsx` begins a static dependency flow toward `react-dom/client`, `course/src/App.tsx` ([course/src/main.tsx:1](course/src/main.tsx#L1)).
- **Inferred:** `flightdiaries/backend/src/index.ts` begins a static dependency flow toward `express`, `flightdiaries/backend/src/routes/diaries.ts` ([flightdiaries/backend/src/index.ts:1](flightdiaries/backend/src/index.ts#L1)).
- **Inferred:** `flightdiaries/frontend/src/main.tsx` begins a static dependency flow toward `react-dom/client`, `flightdiaries/frontend/src/App.tsx` ([flightdiaries/frontend/src/main.tsx:1](flightdiaries/frontend/src/main.tsx#L1)).
- **Inferred:** `healthapp/index.ts` begins a static dependency flow toward `express`, `express`, `healthapp/bmiCalculator.ts`, `healthapp/exerciseCalculator.ts` ([healthapp/index.ts:1](healthapp/index.ts#L1)).
- **Inferred:** `patientor/backend/src/index.ts` begins a static dependency flow toward `express`, `patientor/backend/src/routes/diagnoses.ts`, `patientor/backend/src/routes/patients.ts`, `patientor/backend/src/utils/middleware.ts` ([patientor/backend/src/index.ts:1](patientor/backend/src/index.ts#L1)).
- **Inferred:** `patientor/frontend/src/main.tsx` begins a static dependency flow toward `react-dom/client`, `patientor/frontend/src/App.tsx` ([patientor/frontend/src/main.tsx:1](patientor/frontend/src/main.tsx#L1)).

## External dependencies

| Dependency | References | Evidence |
|---|---:|---|
| `express` | 13 | [flightdiaries/backend/package.json:25](flightdiaries/backend/package.json#L25) |
| `@eslint/js` | 12 | [course/eslint.config.js:1](course/eslint.config.js#L1) |
| `typescript-eslint` | 12 | [course/eslint.config.js:5](course/eslint.config.js#L5) |
| `zod` | 11 | [flightdiaries/backend/package.json:26](flightdiaries/backend/package.json#L26) |
| `react` | 10 | [course/package.json:13](course/package.json#L13) |
| `@playwright/test` | 9 | [healthapp-tests/package.json:15](healthapp-tests/package.json#L15) |
| `@mui/material` | 9 | [patientor/frontend/package.json:16](patientor/frontend/package.json#L16) |
| `axios` | 7 | [flightdiaries/frontend/package.json:13](flightdiaries/frontend/package.json#L13) |
| `globals` | 6 | [course/eslint.config.js:2](course/eslint.config.js#L2) |
| `eslint-plugin-react-hooks` | 6 | [course/eslint.config.js:3](course/eslint.config.js#L3) |
| `eslint-plugin-react-refresh` | 6 | [course/eslint.config.js:4](course/eslint.config.js#L4) |
| `@types/node` | 6 | [course/package.json:18](course/package.json#L18) |
| `@vitejs/plugin-react` | 6 | [course/package.json:21](course/package.json#L21) |
| `eslint` | 6 | [course/package.json:22](course/package.json#L22) |
| `typescript` | 6 | [course/package.json:26](course/package.json#L26) |
| `vite` | 6 | [course/package.json:28](course/package.json#L28) |
| `@stylistic/eslint-plugin` | 4 | [flightdiaries/backend/eslint.config.mjs:3](flightdiaries/backend/eslint.config.mjs#L3) |
| `react-dom` | 3 | [course/package.json:14](course/package.json#L14) |
| `@types/react` | 3 | [course/package.json:19](course/package.json#L19) |
| `@types/react-dom` | 3 | [course/package.json:20](course/package.json#L20) |

## Configuration and environment

- **Confirmed:** `.github/workflows/healthapp-e2e-tests.yml` is a configuration or build file ([.github/workflows/healthapp-e2e-tests.yml:1](.github/workflows/healthapp-e2e-tests.yml#L1)).
- **Confirmed:** `.github/workflows/patientor-api-tests.yml` is a configuration or build file ([.github/workflows/patientor-api-tests.yml:1](.github/workflows/patientor-api-tests.yml#L1)).
- **Confirmed:** `.github/workflows/patientor-e2e-tests.yml` is a configuration or build file ([.github/workflows/patientor-e2e-tests.yml:1](.github/workflows/patientor-e2e-tests.yml#L1)).
- **Confirmed:** `course/package.json` is a configuration or build file ([course/package.json:1](course/package.json#L1)).
- **Confirmed:** `course/tsconfig.json` is a configuration or build file ([course/tsconfig.json:1](course/tsconfig.json#L1)).
- **Confirmed:** `flightdiaries/backend/package.json` is a configuration or build file ([flightdiaries/backend/package.json:1](flightdiaries/backend/package.json#L1)).
- **Confirmed:** `flightdiaries/backend/tsconfig.json` is a configuration or build file ([flightdiaries/backend/tsconfig.json:1](flightdiaries/backend/tsconfig.json#L1)).
- **Confirmed:** `flightdiaries/frontend/package.json` is a configuration or build file ([flightdiaries/frontend/package.json:1](flightdiaries/frontend/package.json#L1)).
- **Confirmed:** `flightdiaries/frontend/tsconfig.json` is a configuration or build file ([flightdiaries/frontend/tsconfig.json:1](flightdiaries/frontend/tsconfig.json#L1)).
- **Confirmed:** `healthapp-tests/package.json` is a configuration or build file ([healthapp-tests/package.json:1](healthapp-tests/package.json#L1)).
- **Confirmed:** `healthapp/package.json` is a configuration or build file ([healthapp/package.json:1](healthapp/package.json#L1)).
- **Confirmed:** `healthapp/tsconfig.json` is a configuration or build file ([healthapp/tsconfig.json:1](healthapp/tsconfig.json#L1)).
- **Confirmed:** `patientor-api-tests/package.json` is a configuration or build file ([patientor-api-tests/package.json:1](patientor-api-tests/package.json#L1)).
- **Confirmed:** `patientor-tests/package.json` is a configuration or build file ([patientor-tests/package.json:1](patientor-tests/package.json#L1)).
- **Confirmed:** `patientor/backend/package.json` is a configuration or build file ([patientor/backend/package.json:1](patientor/backend/package.json#L1)).
- **Confirmed:** `patientor/backend/tsconfig.json` is a configuration or build file ([patientor/backend/tsconfig.json:1](patientor/backend/tsconfig.json#L1)).
- **Confirmed:** `patientor/frontend/package.json` is a configuration or build file ([patientor/frontend/package.json:1](patientor/frontend/package.json#L1)).
- **Confirmed:** `patientor/frontend/tsconfig.json` is a configuration or build file ([patientor/frontend/tsconfig.json:1](patientor/frontend/tsconfig.json#L1)).

## Tests and quality gates

- **Confirmed:** `healthapp-tests` contains 1 test-like files; example: [healthapp-tests/tests/api.test.ts:1](healthapp-tests/tests/api.test.ts#L1).
- **Confirmed:** `patientor-api-tests` contains 1 test-like files; example: [patientor-api-tests/tests/api.test.ts:1](patientor-api-tests/tests/api.test.ts#L1).
- **Confirmed:** `patientor-tests` contains 1 test-like files; example: [patientor-tests/tests/e2e.test.ts:1](patientor-tests/tests/e2e.test.ts#L1).

## High-change or high-risk areas

- **Inferred:** `patientor/frontend/package-lock.json` is relatively large (3952 lines) and may deserve focused review ([patientor/frontend/package-lock.json:1](patientor/frontend/package-lock.json#L1)).
- **Inferred:** `flightdiaries/frontend/package-lock.json` is relatively large (3008 lines) and may deserve focused review ([flightdiaries/frontend/package-lock.json:1](flightdiaries/frontend/package-lock.json#L1)).
- **Inferred:** `course/package-lock.json` is relatively large (2701 lines) and may deserve focused review ([course/package-lock.json:1](course/package-lock.json#L1)).
- **Inferred:** `flightdiaries/backend/package-lock.json` is relatively large (2593 lines) and may deserve focused review ([flightdiaries/backend/package-lock.json:1](flightdiaries/backend/package-lock.json#L1)).
- **Inferred:** `patientor/backend/package-lock.json` is relatively large (2559 lines) and may deserve focused review ([patientor/backend/package-lock.json:1](patientor/backend/package-lock.json#L1)).
- **Needs review:** The scanner intentionally skipped files (default_ignored=9, gitignored=7, parse_error=2, unsupported=11); conclusions do not cover excluded content.
- **Needs review:** Import and call relationships are static approximations; reflection, generated code, dependency injection, and runtime plugins may change actual behavior.

## Suggested reading order

1. **Inferred:** Read [course/README.md:1](course/README.md#L1) for core symbols and module boundaries.
2. **Inferred:** Read [flightdiaries/backend/README.md:1](flightdiaries/backend/README.md#L1) for documentation/build context.
3. **Inferred:** Read [flightdiaries/frontend/README.md:1](flightdiaries/frontend/README.md#L1) for core symbols and module boundaries.
4. **Inferred:** Read [healthapp-tests/README.md:1](healthapp-tests/README.md#L1) for core symbols and module boundaries.
5. **Inferred:** Read [patientor/frontend/README.md:1](patientor/frontend/README.md#L1) for core symbols and module boundaries.
6. **Inferred:** Read [course/package.json:1](course/package.json#L1) for core symbols and module boundaries.
7. **Inferred:** Read [course/tsconfig.json:1](course/tsconfig.json#L1) for core symbols and module boundaries.
8. **Inferred:** Read [flightdiaries/backend/package.json:1](flightdiaries/backend/package.json#L1) for core symbols and module boundaries.
9. **Inferred:** Read [flightdiaries/backend/tsconfig.json:1](flightdiaries/backend/tsconfig.json#L1) for core symbols and module boundaries.
10. **Inferred:** Read [flightdiaries/frontend/package.json:1](flightdiaries/frontend/package.json#L1) for core symbols and module boundaries.
11. **Inferred:** Read [flightdiaries/frontend/tsconfig.json:1](flightdiaries/frontend/tsconfig.json#L1) for core symbols and module boundaries.
12. **Inferred:** Read [healthapp-tests/package.json:1](healthapp-tests/package.json#L1) for core symbols and module boundaries.

## Generated metadata

- Generator: RepoLocus 0.2.1
- Repository: `fullstackopen-2026-part9`
- Indexed files: 115
- Indexed bytes: 706617
- Languages: config (39), javascript (6), markdown (5), typescript (65)
- Source link base: generated-document-relative
- Evidence labels: **Confirmed** = direct source fact; **Inferred** = deterministic static-analysis inference; **Needs review** = insufficient or incomplete evidence.
