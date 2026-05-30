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
- Level-aware learning path for Beginner, Intermediate, and Advanced students
- Separate lesson completion and practice mastery
- Geometry section
- Algebra section
- Practice section
- Progress section
- Mobile-first navigation and lesson layouts
- Student name and level onboarding
- Interactive circle radius demo
- Interactive number line, angle, area, Pythagoras, and algebra area-model demos
- Interactive circle area proof
- Interactive `(a + b)²` area model
- Color-coded formula explanations
- Multiple choice, fill-in-the-blank, and step-based practice questions
- Practice filters by topic and level
- Practice recap with mistake tracking
- Local progress tracking with badges and weak concept review
- First-time “How to use MathVista” intro

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

Run lint:

```bash
npm run lint
```

## Render Deployment

This app is fully static in the current phase. Lessons are bundled at build time, and student profile/progress data is stored in browser `localStorage`.

Use **Render Static Site** instead of **Render Web Service**. Static sites do not sleep on Render's free tier, while free web services can sleep after inactivity.

Recommended settings:

```txt
Type: Static Site
Build Command: npm install && npm run build
Publish Directory: out
```

No start command is needed for a static site.

## Deploy On Render Free Static Site

This is the recommended deployment option for the current app.

Steps:

1. Push this repository to GitHub.
2. Open Render and choose **New +**.
3. Select **Static Site**.
4. Connect the GitHub repository.
5. Use these settings:

```txt
Name: mathvista
Build Command: npm install && npm run build
Publish Directory: out
```

6. Leave environment variables empty for now.
7. Click **Create Static Site**.

Render will install dependencies, build the static Next.js export, and serve the generated files from `out`.

Notes for the free tier:

- Static sites do not sleep like free web services.
- Student progress is stored in each browser's `localStorage`, so it does not sync across devices.
- No database is needed for the current version.
- If you later add login, admin, server APIs, or cross-device progress, switch back to a Web Service or add a backend service.

## Project Structure

```txt
app/                  Next.js app routes
components/           Reusable UI and visual learning components
lib/lessons.ts        Local lesson and practice data
public/               Logo and favicon assets
spec.md               Product specification
plan.md               Implementation plan
req.md                Original requirement document
```

## Future Phases

Planned later additions:

- Backend persistence
- Optional authentication
- Admin content management
- Media upload support
- Teacher or classroom mode
- Printable worksheets
- Cross-device progress sync
