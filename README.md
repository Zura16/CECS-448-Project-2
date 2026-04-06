# Galaxy Fitness

A modern gym app focused on **tracking progress**, **building consistency**, and **keeping users motivated through quest-style goals**.

This project is a front-end fitness experience built for users who want more than a simple workout logger. Instead of only recording sessions, Galaxy Fitness turns training into a progress loop: log your workouts, monitor your streaks, review your history, and stay engaged with challenges that reward consistency.

![Tech Stack Flowchart](./stack-flowchart.png)

## Overview

Galaxy Fitness is designed around three core ideas:

- **Tracking** - make it easy to record sessions, sets, focus areas, duration, and workout intensity.
- **Consistency** - visualize active days and training history so users can stay accountable.
- **Motivation** - use quest-style progression, elite-style ranks, and progress prompts to keep workouts engaging.

The current interface presents the app as a premium fitness dashboard with multiple mobile-first screens, including login, dashboard, workout entry, workout logs, and account management.

## Core Experience

### 1. Workout Tracking
Users can log sessions by choosing:
- workout type
- muscle group focus
- total sets
- session duration
- notes and comments

### 2. Consistency Visualization
The dashboard emphasizes training adherence through:
- activity heatmaps
- recent workout history
- summary metrics
- account-level performance stats

### 3. Quest-Based Motivation
The product direction includes game-like reinforcement such as:
- weekly quests
- level progression
- rank-based identity
- rewards for staying consistent

## Current Screens

### Login Screen
A branded entry screen with email/password authentication UI and social login options.

### Dashboard Screen
Shows a member profile, barcode-based gym access card, activity heatmap, premium support card, workout logs shortcut, and additional gym services.

### Workout Screen
Lets users log a workout session by selecting training type, muscle group, set count, duration, and comments.

### Workout Logs Screen
Displays recent sessions with date, workout type, focus area, sets, duration, and load/intensity.

### Account Screen
Shows member profile details, performance metrics, membership info, settings, account history, rank, level, and a quest/progression panel.

## Tech Stack Analysis

### Frontend
- **React 19** for building the interface as reusable components
- **TypeScript** for safer, typed development
- **Vite** for fast development and bundling
- **React Router DOM** for screen-based navigation

### Styling and UI
- **Tailwind CSS v4** for utility-first styling
- **Lucide React** for iconography
- **Motion** for animation support
- **Google Fonts (Inter)** for typography
- **clsx + tailwind-merge** for cleaner class composition

### Project Architecture
- `src/screens` contains page-level views
- `src/components` contains shared UI pieces like the top bar and bottom navigation
- `src/lib` contains small reusable helpers

### Backend / Integration Readiness
The repository also includes packages that suggest room for expansion:
- **Express** for backend/API support
- **dotenv** for environment variable management
- **@google/genai** for future AI-powered features

At the moment, the visible implementation is primarily a **frontend prototype / UI-first app**, but the dependency setup makes it ready to grow into a fuller product.

## Why This Stack Fits the App

This stack works well for a gym motivation app because it supports:

- **fast UI iteration** for testing new screens and engagement features
- **strong component reuse** across dashboard, logging, and account pages
- **mobile-friendly styling** through utility classes
- **easy future expansion** into authentication, APIs, analytics, and AI coaching

## Suggested Future Features

To push the concept further, these would be strong next steps:

- persistent workout storage with a real database
- user authentication and protected routes
- streak tracking and calendar analytics
- quest completion engine with badges and rewards
- push notifications and reminders
- AI-powered workout suggestions or progress summaries
- social accountability features like friends, teams, or challenges

## Project Structure

```text
CECS-448-Project-2/
├── src/
│   ├── components/
│   │   ├── BottomNav.tsx
│   │   └── TopBar.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── screens/
│   │   ├── AccountScreen.tsx
│   │   ├── DashboardScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── WorkoutLogsScreen.tsx
│   │   └── WorkoutScreen.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Available Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the app in your browser on the port configured by Vite.

## Positioning Statement

**Galaxy Fitness** is a workout tracking app that blends performance logging with streak-building and game-inspired motivation. It is built to help users stay consistent, see progress clearly, and feel rewarded for showing up.

## Notes

This README is written to match the current repository structure while also framing the app as a clear product concept. If you later add a database, authentication, or AI coaching workflows, this README can be extended into a production-style project document.
