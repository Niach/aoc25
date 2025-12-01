# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Advent of Code 2025 solutions repository using TypeScript with Bun as the runtime.

## Commands

### Development (Recommended)
```bash
bun run dev
# or
bun run start
```
Runs TypeScript files directly without compilation. Fast and efficient for development.

### Run Specific Day
```bash
DAY=1 bun run day
```
Runs a specific day's solution (e.g., `src/day1/day1.ts`).

### Build
```bash
bun run build
```
Builds the project for production using Bun's bundler.

### Build with Watch Mode
```bash
bun run build:watch
```
Rebuilds automatically when files change.

### Type Checking
```bash
bun run type-check
```
Runs TypeScript type checker without emitting files.

### Clean Build Artifacts
```bash
bun run clean
```
Removes the `dist/` directory.

## Architecture

### Project Structure

The codebase follows a day-based organization pattern for Advent of Code challenges:

- `src/index.ts` - Main entry point that orchestrates running solutions
- `src/dayN/` - Each day's solution in its own directory
  - `dayN.ts` - Solution implementation
  - `input.txt` - Puzzle input data

### TypeScript Configuration

- **Target**: ESNext (Bun supports the latest ES features)
- **Module**: ESNext with bundler resolution
- **Types**: Includes `bun-types` for Bun-specific APIs
- **Path Aliases**: `@/*` maps to `src/*`
- **Strict mode**: Enabled for type safety

The tsconfig is optimized for Bun's native TypeScript support, allowing direct execution without transpilation.

### Adding New Day Solutions

When creating a new day's solution:
1. Create a new directory `src/dayN/` where N is the day number
2. Add `dayN.ts` for the solution code
3. Add `input.txt` for the puzzle input
4. Run with `DAY=N bun run day` or through the main entry point