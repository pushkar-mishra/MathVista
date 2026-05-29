# MathVista

MathVista is a visual-first math learning web app for Geometry and Algebra. It helps students understand why formulas work through interactive diagrams, color-coded visual proofs, live calculations, short explanations, and practice questions.

## Current Scope

Phase 1 is student-focused:

- No login or signup
- No backend required
- No database required
- Lessons are stored locally in the app
- Progress is stored anonymously in browser `localStorage`
- Built for deployment as a single Next.js app on Render

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- SVG-based visual demos
- Browser `localStorage` for progress

## Features Implemented

- Student dashboard
- Geometry section
- Algebra section
- Practice section
- Progress section
- Interactive circle radius demo
- Interactive circle area proof
- Interactive `(a + b)²` area model
- Color-coded formula explanations
- Practice questions with feedback
- Local progress tracking

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Render Deployment

Deploy as a Render Web Service.

Recommended settings:

```txt
Environment: Node
Build Command: npm install && npm run build
Start Command: npm start
```

Render provides the `PORT` environment variable automatically. `next start` will use it.

## Deploy On Render Free Node

This project can run on Render's free Node web service because Phase 1 is a single Next.js app with no backend database.

Steps:

1. Push this repository to GitHub.
2. Open Render and choose **New +**.
3. Select **Web Service**.
4. Connect the GitHub repository.
5. Use these settings:

```txt
Name: mathvista
Runtime: Node
Instance Type: Free
Build Command: npm install && npm run build
Start Command: npm start
```

6. Leave environment variables empty for now.
7. Click **Create Web Service**.

Render will install dependencies, build the Next.js app, and run it with `npm start`.

Notes for the free tier:

- The first request after inactivity can be slow because free services may sleep.
- Student progress is stored in each browser's `localStorage`, so it does not sync across devices.
- No database is needed for the current version.
- If you later add login, admin, or cross-device progress, add a database or backend service.

## Project Structure

```txt
app/                  Next.js app routes
components/           Reusable UI and visual learning components
lib/lessons.ts        Local lesson and practice data
spec.md               Product specification
plan.md               Implementation plan
req.md                Original requirement document
```

## Future Phases

Planned later additions:

- More Geometry and Algebra lessons
- More practice question types
- Backend persistence
- Optional authentication
- Admin content management
- Media upload support
- Teacher or classroom mode
