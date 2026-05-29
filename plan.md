# MathVista Implementation Plan

## Phase 0: Project Setup

Deliverables:

- Create a Next.js + TypeScript app.
- Add Tailwind CSS.
- Add Framer Motion.
- Establish app routes and base layout.
- Add linting and formatting.
- Create initial content/data directories.

Verification:

- App starts locally.
- Home/dashboard route loads on desktop and mobile widths.
- Lint command passes.

## Phase 1: Student-Focused App Shell

Deliverables:

- Build primary navigation for Dashboard, Geometry, Algebra, Practice, and Progress.
- Create subject landing pages for Geometry and Algebra.
- Add three-level browsing structure for each subject.
- Create reusable layout components for lesson pages.
- Do not add login, signup, account settings, or role-based navigation in this phase.

Implementation notes:

- Keep navigation simple and scan-friendly.
- Avoid a marketing landing page; the first screen should let students continue learning or pick a topic.
- Use route structure such as `/geometry`, `/geometry/level-1`, and `/lesson/[slug]`.
- Treat the app as a student self-learning experience first.
- Use local/static content and anonymous local progress until the learning flow is validated.

Verification:

- Users can navigate between Geometry and Algebra.
- Level pages list available lessons in order.
- Layout works on mobile and desktop.
- No page blocks access behind login.

## Phase 2: Lesson Engine

Deliverables:

- Define TypeScript types for lessons, lesson steps, formulas, demos, and practice.
- Store initial lessons as local JSON or TypeScript data.
- Render lesson title, explanation, formula, why-it-works section, visual demo, practice, and next lesson action.
- Map lesson demo IDs to React visualization components.

Initial lessons:

- Circle basics.
- Circle circumference proof.
- Circle area proof.
- Rectangle area.
- Triangle area.
- Variables and expressions.
- Meaning of square.
- `(a + b)²` visual proof.

Verification:

- All initial lessons render from shared lesson data.
- Lesson pages do not require custom page code for ordinary text/formula/practice sections.
- Next lesson navigation works.

## Phase 3: Visualization Components

Deliverables:

- Circle explorer with radius slider and live diameter, circumference, and area updates.
- Circle circumference proof animation.
- Circle area slice rearrangement demo.
- Rectangle area grid demo.
- Triangle area rearrangement demo.
- Algebra area model for `(a + b)²`.
- Algebra area model for `(a - b)²`.
- Algebra difference of squares demo for `(a + b)(a - b)`.
- Balance scale model for simple equations.

Implementation notes:

- Prefer SVG for diagrams with labels and interactive shapes.
- Keep controls stable in size to avoid layout shifts.
- Include reduced-motion behavior.
- Use clear labels and non-color-only distinctions.

Verification:

- Slider changes update formulas and visuals immediately.
- Diagrams remain readable on mobile.
- Animations do not overlap labels or controls.
- Visual components can be reused by multiple lessons.

## Phase 4: Practice and Quiz Engine

Deliverables:

- Define question model with type, difficulty, answer, explanation, and concept tags.
- Implement multiple choice questions.
- Implement fill-in-the-blank questions.
- Implement matching formula with diagram.
- Implement step-by-step solving for selected questions.
- Show correctness feedback, explanation, visual correction, and try-again flow.
- Track score per lesson attempt.

MVP question coverage:

- 3 easy, 3 medium, and 3 application questions for each MVP concept where practical.
- Start with multiple choice and fill-in-the-blank if drag-and-drop needs more time.

Verification:

- Correct answers are accepted reliably.
- Incorrect answers show useful explanations.
- Practice completion records score and mistakes.
- Question components work on touch devices.

## Phase 5: Progress Tracking

Deliverables:

- Store anonymous progress in local storage for MVP.
- Track completed lessons, current lesson, quiz scores, mistakes, and mastered concepts.
- Build student dashboard.
- Build progress page for Geometry and Algebra.
- Recommend next lesson based on incomplete lessons and mistakes.

Verification:

- Progress persists after page refresh.
- Completing a lesson updates dashboard and subject progress.
- Quiz mistakes appear in review recommendations.

## Phase 6: Content Expansion

Deliverables:

- Add remaining Geometry Level 1 topics: point, line, line segment, angle, triangle, square, rectangle, circle, area, perimeter.
- Add remaining Geometry Level 2 topics: visual angle explanation and deeper area/perimeter comparisons.
- Add Geometry Level 3 word problems and mixed quiz.
- Add remaining Algebra Level 1 topics: terms, coefficients, like and unlike terms, simple equations.
- Add Algebra Level 2 topics: expanding brackets and factorization using area model.
- Add Algebra Level 3 solve, expand, simplify, word problems, and mixed quiz.

Verification:

- Each level has enough lessons for a coherent path.
- Content follows the same lesson structure.
- Practice coverage meets the 3 easy, 3 medium, 3 application target per concept.

## Phase 7: Backend and Optional Authentication

Deliverables:

- Choose backend path: Supabase or Node.js API with PostgreSQL.
- Add authentication only if persistent cross-device progress or admin publishing is needed.
- Add user roles such as student and admin only after authentication is introduced.
- Persist progress records to database.
- Migrate local lesson content to database-backed content where needed.
- Add secure API routes for progress and content reads.

Verification:

- Users can sign in and resume progress across devices.
- Anonymous local progress can be migrated or gracefully replaced.
- Role checks prevent non-admin users from changing content.

## Phase 8: Admin Content Management

Deliverables:

- Admin lesson list.
- Lesson create/edit form.
- Formula and explanation editor.
- Question create/edit form.
- Difficulty and concept tag controls.
- Publish/unpublish workflow.
- Media upload or media URL management.

Implementation notes:

- Start with structured forms rather than a fully freeform CMS.
- Validate content before publishing.
- Keep demo selection controlled through known demo IDs.

Verification:

- Admin can create a draft lesson.
- Admin can publish a lesson and see it in the student flow.
- Invalid questions or missing required fields are blocked.

## Phase 9: Quality, Accessibility, and Performance

Deliverables:

- Add unit tests for formula calculations and quiz scoring.
- Add component tests for key lesson and quiz interactions.
- Add end-to-end tests for lesson completion and progress tracking.
- Audit keyboard navigation and screen-reader labels.
- Audit mobile layouts.
- Optimize large visual components and animation performance.

Verification:

- Test suite passes.
- Lighthouse accessibility issues are addressed.
- Interactive demos remain smooth on common mobile devices.

## Phase 10: Future Enhancements

Potential additions:

- AI tutor for doubt solving.
- Voice explanations.
- Hindi and regional language support.
- Teacher classroom mode.
- Printable worksheets.
- Leaderboards.
- Parent dashboard.
- Offline mode.
- Broader topic library beyond Geometry and Algebra.

## Suggested First Milestone

Build a local-only MVP with:

- Next.js app shell.
- Geometry and Algebra navigation.
- Shared lesson engine.
- Circle explorer.
- `(a + b)²` visual proof.
- Basic practice engine.
- Local storage progress dashboard.
- No login requirement.
- Student-focused screens only.

This milestone validates the core product experience before adding backend, admin, and full content management.
