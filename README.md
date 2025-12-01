# 🎄 Advent of Code 2025

Solutions for [Advent of Code 2025](https://adventofcode.com/2025) written in TypeScript with Bun.

## ✨ Prerequisites

- [Bun](https://bun.sh/) (v1.0+) 🚀

## 📦 Setup

Install dependencies:

```bash
bun install
```

## 🏃 Running Solutions

### Run all solutions

```bash
bun run dev
# or
bun run start
```

### Run a specific day

```bash
DAY=1 bun run day
```

This will execute the solution for the specified day (e.g., `src/day1/day1.ts`).

## 🛠️ Development

### Type checking

```bash
bun run type-check
```

### Build

```bash
bun run build
```

### Build with watch mode 👀

```bash
bun run build:watch
```

### Clean build artifacts 🧹

```bash
bun run clean
```

## 📁 Project Structure

```
aoc25/
├── src/
│   ├── index.ts          # 🚪 Main entry point
│   └── dayN/             # 📅 Each day's solution
│       ├── dayN.ts       # 💻 Solution code
│       └── input.txt     # 📝 Puzzle input
├── package.json
├── tsconfig.json
└── README.md
```

## ➕ Adding a New Day

1. Create a new directory: `src/dayN/` 📂
2. Add the solution file: `src/dayN/dayN.ts` ✍️
3. Add your puzzle input: `src/dayN/input.txt` 📋
4. Export a function from `dayN.ts` and call it from `src/index.ts` 🔌

Example:

```typescript
// src/day2/day2.ts
export async function day2() {
  const input = await Bun.file('src/day2/input.txt').text();
  // Your solution here 🧩
  console.log('Day 2 result:', result);
}
```

```typescript
// src/index.ts
import { day1 } from '@/day1/day1';
import { day2 } from '@/day2/day2';

await day1();
await day2();
```

## 🔧 Technologies

- **Runtime**: [Bun](https://bun.sh/) 🥟 - Fast JavaScript runtime with native TypeScript support
- **Language**: TypeScript with strict mode enabled 📘
- **Module System**: ESNext with path aliases (`@/*` → `src/*`) 🎯

---

Happy coding! 🎅⭐