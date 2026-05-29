# MathVista Product Specification

## 1. Overview

MathVista is a visual-first web learning app for school-level Geometry and Algebra. Its purpose is to help students understand why formulas work through interactive diagrams, animated proofs, guided explanations, and practice.

Tagline: Don't memorize formulas. See why they work.

## 2. Goals

- Teach Geometry and Algebra through visual understanding before memorization.
- Provide interactive demonstrations for formulas and identities.
- Guide students through levels of increasing depth: basics, visual proof, and practice.
- Track student progress, quiz performance, and recommended next lessons without requiring login in the first release.
- Defer admin workflows until after the student learning experience is working well.

## 3. Target Users

- School students learning basic Geometry and Algebra.
- Teachers explaining concepts visually in class.
- Parents helping children learn math at home.
- Beginners who struggle with formula memorization.

## 4. Information Architecture

The app has two primary learning sections:

- Geometry
- Algebra

Each section contains three learning levels:

- Level 1: Basic Understanding
- Level 2: Visual Explanation
- Level 3: Practice and Application

The first release should be student-focused and should expose:

- Dashboard
- Geometry
- Algebra
- Practice
- Progress

The first release should not require login, signup, or student accounts. Progress should be anonymous and stored locally.

Future admin users may additionally see:

- Admin Lessons
- Admin Questions
- Admin Media

## 5. MVP Scope

The MVP should include a complete learning path for selected core lessons rather than shallow coverage of every listed topic.

The MVP is student-focused. It should not include login, signup, account management, or required authentication. Admin/content management can remain in the specification as a future capability, but it is not part of the current implementation phase.

### Geometry MVP Lessons

- Circle basics: radius, diameter, circumference, area.
- Rectangle area: length x breadth.
- Triangle area: one half x base x height.
- Circle circumference proof: `2πr`.
- Circle area proof: `πr²`.

### Algebra MVP Lessons

- Variables and expressions.
- Meaning of square.
- Visual proof of `(a + b)² = a² + 2ab + b²`.
- Visual proof of `(a - b)² = a² - 2ab + b²`.
- Visual proof of `(a + b)(a - b) = a² - b²`.
- Simple linear equations using a balance scale model.

### Deferred From MVP

- Pythagoras theorem proof.
- Full factorization content library.
- AI tutor.
- Voice explanations.
- Regional language support.
- Teacher classroom mode.
- Parent dashboard.
- Offline mode.
- Leaderboards.
- Login and student accounts.
- Admin content management UI.

These can be added after the core lesson, quiz, visualization, and progress systems are stable.

## 6. Lesson Page Requirements

Every lesson page must contain:

- Lesson title.
- Short concept explanation.
- Interactive visual demo.
- Formula section.
- "Why this works" section.
- Step-by-step explanation.
- Practice section.
- Next lesson action.

The page should be visual-first. Text should be concise and should support the diagram rather than replace it.

## 7. Learning Level Requirements

### Level 1: Basic Understanding

Purpose: introduce vocabulary and simple visual meaning.

Geometry examples:

- Point, line, line segment.
- Angle.
- Triangle, square, rectangle, circle.
- Radius, diameter, circumference.
- Area and perimeter.

Algebra examples:

- Numbers and variables.
- Expressions.
- Terms and coefficients.
- Like and unlike terms.
- Meaning of square.
- Simple equations.

### Level 2: Visual Explanation

Purpose: show why formulas and identities work.

Required Geometry proofs:

- Rectangle area is length x breadth.
- Triangle area is one half x base x height.
- Circle circumference is `2πr`.
- Circle area is `πr²`.
- Visual angle explanation.

Required Algebra proofs:

- `(a + b)²`.
- `(a - b)²`.
- `(a + b)(a - b)`.
- Balance scale method for equations.
- Factorization using area model.

### Level 3: Practice and Application

Purpose: apply concepts through exercises and real examples.

Geometry practice:

- Calculate circumference and area from radius values.
- Use radius slider and observe live formula updates.
- Compare small and large circles.
- Solve word problems.
- Complete mixed practice quizzes.

Algebra practice:

- Expand expressions such as `(x + 3)²`, `(a + 5)²`, and `(p + q)²`.
- Match visual blocks with algebraic expressions.
- Solve simple equations step by step.
- Complete mixed practice quizzes.

## 8. Interactive Canvas Requirements

The learning canvas should support:

- Sliders for numeric values such as radius, side length, `a`, and `b`.
- Drag or resize interactions for selected shapes.
- Live formula updates.
- Animated visual transformations.
- Labels on important diagram parts.
- Responsive rendering on desktop and mobile.

Examples:

- Changing circle radius updates radius, diameter, circumference, area, and circle size.
- Changing `a` and `b` updates the four area-model blocks for `(a + b)²`.
- A circle area demo shows slices rearranging into a rectangle-like shape.

SVG should be preferred for structured diagrams and labels. Canvas can be used for animation-heavy visuals if SVG becomes awkward.

## 9. Practice and Quiz Requirements

Each concept should include:

- 3 easy questions.
- 3 medium questions.
- 3 application questions.

Supported question types:

- Multiple choice.
- Fill in the blank.
- Drag and drop.
- Match formula with diagram.
- Step-by-step solving.

After each answer, the app must show:

- Correct or incorrect state.
- Explanation.
- Visual correction when relevant.
- Try again option.

Quiz scoring should record:

- Attempted questions.
- Correct answers.
- Mistakes.
- Difficulty level.
- Concept tags.

## 10. Progress Tracking Requirements

The app should track:

- Lessons completed.
- Current lesson.
- Level completed.
- Quiz score.
- Concepts mastered.
- Mistakes made.
- Recommended next lesson.
- Badges earned.

The student dashboard should show:

- Geometry progress.
- Algebra progress.
- Current level.
- Recent activity.
- Continue learning button.
- Weak concepts or recommended review.

For MVP, local storage should be used for anonymous progress. Persistent user accounts should be deferred until a later phase.

## 11. Admin Requirements

Admin is not required for the current student-focused phase. The requirements below describe a later content management phase.

Admin users should be able to:

- Add lessons.
- Edit lessons.
- Publish or unpublish lessons.
- Add formulas.
- Upload diagrams or media.
- Add quiz questions.
- Set question difficulty.
- Organize content under Geometry or Algebra.
- Assign lessons to levels.

Admin content should be structured enough for the frontend lesson engine to render lessons without hardcoding every page.

## 12. Data Model

Core entities:

- User
- Lesson
- LessonStep
- VisualDemo
- Formula
- Question
- AnswerOption
- QuizAttempt
- ProgressRecord
- Badge
- MediaAsset

Lesson fields:

- id
- slug
- title
- subject: `geometry` or `algebra`
- level: `1`, `2`, or `3`
- summary
- status: `draft` or `published`
- order
- steps
- practiceQuestionIds

Question fields:

- id
- conceptTags
- subject
- level
- difficulty: `easy`, `medium`, or `application`
- type
- prompt
- options
- correctAnswer
- explanation
- visualCorrection

Progress fields:

- userId
- lessonId
- status: `not_started`, `in_progress`, or `completed`
- score
- mistakes
- completedAt
- updatedAt

## 13. Technical Specification

Recommended stack:

- Frontend: Next.js with React and TypeScript.
- Styling: Tailwind CSS.
- Animation: Framer Motion.
- Visuals: SVG-first React components, Canvas where appropriate.
- Backend: Node.js with NestJS or Express.
- Database: PostgreSQL.
- Hosted backend option for later phases: Supabase.

MVP implementation can start as a Next.js app with local JSON lesson content and local storage progress, then move content and progress to PostgreSQL/Supabase once the interaction model is validated.

## 14. Accessibility Requirements

- Keyboard-accessible navigation and controls.
- Labels for sliders and inputs.
- Sufficient color contrast.
- Diagram labels must not rely on color alone.
- Reduced-motion support for animations.
- Mobile touch targets should be large enough for children.
- Feedback states should include text, not only color.

## 15. Responsive Requirements

- Desktop layout should place lesson text and controls beside or near the visual canvas.
- Mobile layout should stack the visual canvas, controls, explanation, and practice sections.
- Interactive diagrams must remain readable on small screens.
- Text should not overlap visual elements or controls.

## 16. Non-Functional Requirements

- Fast initial load.
- Smooth interactive updates.
- Maintainable modular lesson structure.
- Secure login and role checks when authentication is added in a later phase.
- Scalable content model for more math topics.
- Clear separation between lesson content, visual demo components, quiz logic, and progress tracking.

## 17. Success Criteria

The app is successful when:

- Students can explain formulas visually after completing lessons.
- Students can complete lessons without teacher help.
- Practice scores improve over time.
- Teachers can use the app for classroom explanation.
- Adding a new lesson does not require rewriting core app logic.
