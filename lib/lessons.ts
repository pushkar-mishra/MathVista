export type Subject = "geometry" | "algebra";
export type Level = 1 | 2 | 3;
export type DemoId =
  | "geometry-basics"
  | "perimeter-area"
  | "circle-explorer"
  | "rectangle-area"
  | "square-area"
  | "circle-circumference"
  | "triangle-area"
  | "circle-area"
  | "variable-balance"
  | "like-terms"
  | "linear-equation"
  | "algebra-square"
  | "algebra-minus-square"
  | "difference-squares"
  | "word-problem";

export type PracticeQuestion = {
  id: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type Lesson = {
  slug: string;
  title: string;
  subject: Subject;
  level: Level;
  accent: "blue" | "green" | "amber" | "rose" | "violet";
  summary: string;
  concept: string;
  formula: string;
  symbols: string[];
  why: string[];
  demoId: DemoId;
  practice: PracticeQuestion[];
};

export const lessons: Lesson[] = [
  {
    slug: "point-line-angle-basics",
    title: "Point, Line, Segment, and Angle",
    subject: "geometry",
    level: 1,
    accent: "blue",
    summary: "Start with the smallest visual building blocks of Geometry.",
    concept:
      "Geometry begins with points, lines, line segments, and angles. These help us describe every shape clearly.",
    formula: "Angle = turn between two rays",
    symbols: [
      "A point marks a position.",
      "A line goes on forever in both directions.",
      "A segment has two endpoints.",
      "An angle measures how much one ray turns from another ray."
    ],
    why: [
      "Shapes are built from connected points and segments.",
      "Angles tell how sharply two sides meet.",
      "Before measuring area or perimeter, we need to know what sides and corners mean."
    ],
    demoId: "geometry-basics",
    practice: [
      {
        id: "g1",
        prompt: "Which object has two endpoints?",
        options: ["Line segment", "Line", "Point"],
        correctAnswer: "Line segment",
        explanation: "A line segment stops at two endpoints."
      },
      {
        id: "g2",
        prompt: "What does an angle measure?",
        options: ["A turn", "An inside space", "A curved edge"],
        correctAnswer: "A turn",
        explanation: "An angle measures the turn between two rays."
      },
      {
        id: "g3",
        prompt: "A point is used to show:",
        options: ["A position", "A full area", "A formula"],
        correctAnswer: "A position",
        explanation: "A point marks an exact position."
      }
    ]
  },
  {
    slug: "perimeter-vs-area",
    title: "Perimeter vs Area",
    subject: "geometry",
    level: 1,
    accent: "green",
    summary: "See the difference between walking around a shape and filling inside it.",
    concept:
      "Perimeter measures the boundary around a shape. Area measures the square units that fill the inside.",
    formula: "Perimeter = outside distance, Area = inside space",
    symbols: [
      "Perimeter follows the outline.",
      "Area fills the surface.",
      "Two shapes can have similar perimeter but different area."
    ],
    why: [
      "If you walk around a rectangle, you are measuring perimeter.",
      "If you cover the rectangle with tiles, you are measuring area.",
      "These are different questions, so they need different formulas."
    ],
    demoId: "perimeter-area",
    practice: [
      {
        id: "pa1",
        prompt: "Which one measures the boundary?",
        options: ["Perimeter", "Area", "Radius"],
        correctAnswer: "Perimeter",
        explanation: "Perimeter is the distance around a shape."
      },
      {
        id: "pa2",
        prompt: "Which one counts square units inside?",
        options: ["Area", "Diameter", "Angle"],
        correctAnswer: "Area",
        explanation: "Area counts the filled space inside a shape."
      },
      {
        id: "pa3",
        prompt: "Fencing a garden uses:",
        options: ["Perimeter", "Area", "Only height"],
        correctAnswer: "Perimeter",
        explanation: "A fence goes around the outside boundary."
      }
    ]
  },
  {
    slug: "circle-radius-diameter",
    title: "Circle: Radius, Diameter, Area",
    subject: "geometry",
    level: 1,
    accent: "blue",
    summary: "Move the radius and watch every circle measurement change together.",
    concept:
      "A circle is the set of all points at the same distance from the center. That distance is the radius.",
    formula: "Diameter = 2r, Circumference = 2πr, Area = πr²",
    symbols: [
      "r is the radius, the distance from center to edge.",
      "Diameter is the full width through the center.",
      "π is about 3.14 and appears whenever round distance is compared with straight distance."
    ],
    why: [
      "When the radius grows, the diameter grows at the same pace because it is two radii placed back to back.",
      "The boundary grows with radius because the same round shape is being scaled larger.",
      "Area grows faster than circumference because the circle spreads in two directions, not just along the edge."
    ],
    demoId: "circle-explorer",
    practice: [
      {
        id: "c1",
        prompt: "If the radius is 5, what is the diameter?",
        options: ["5", "10", "25"],
        correctAnswer: "10",
        explanation: "Diameter is two radii, so 2 x 5 = 10."
      },
      {
        id: "c2",
        prompt: "Which measurement covers the boundary of a circle?",
        options: ["Area", "Radius", "Circumference"],
        correctAnswer: "Circumference",
        explanation: "Circumference is the distance around the outside edge."
      },
      {
        id: "c3",
        prompt: "What happens to area when radius increases?",
        options: ["It grows faster", "It stays same", "It becomes negative"],
        correctAnswer: "It grows faster",
        explanation: "Area uses r², so it grows in two directions as radius increases."
      }
    ]
  },
  {
    slug: "square-area-units",
    title: "Why Square Area Is Side x Side",
    subject: "geometry",
    level: 1,
    accent: "violet",
    summary: "Build a square from equal rows and columns of unit squares.",
    concept:
      "A square has equal side lengths. Its area is the number of unit squares that fit inside.",
    formula: "Area = side x side = s²",
    symbols: [
      "s is the side length.",
      "s² means s multiplied by itself.",
      "Square units tell how much surface is covered."
    ],
    why: [
      "Each row has s unit squares.",
      "There are s equal rows.",
      "That makes s groups of s.",
      "So square area is s x s, or s²."
    ],
    demoId: "square-area",
    practice: [
      {
        id: "sq1",
        prompt: "A square has side 5. What is its area?",
        options: ["10", "20", "25"],
        correctAnswer: "25",
        explanation: "Area is side x side, so 5 x 5 = 25."
      },
      {
        id: "sq2",
        prompt: "What does s² mean?",
        options: ["s x s", "s + 2", "2 x s x s"],
        correctAnswer: "s x s",
        explanation: "Squaring means multiplying a value by itself."
      },
      {
        id: "sq3",
        prompt: "Why does square area use multiplication?",
        options: ["Equal rows repeat", "The side is curved", "It has no corners"],
        correctAnswer: "Equal rows repeat",
        explanation: "The square is filled by equal rows and equal columns."
      }
    ]
  },
  {
    slug: "circle-area-proof",
    title: "Why Circle Area Is πr²",
    subject: "geometry",
    level: 2,
    accent: "green",
    summary: "See circle slices rearrange into a rectangle-like shape.",
    concept:
      "A circle can be divided into equal slices. When those slices alternate and line up, they look more and more like a rectangle.",
    formula: "Area = πr²",
    symbols: [
      "The rectangle-like height is close to r.",
      "The rectangle-like width is close to half the circumference, which is πr.",
      "Rectangle area is width x height."
    ],
    why: [
      "The circle edge is the circumference, 2πr.",
      "Alternating slices place half of that curved edge along the top and half along the bottom.",
      "That makes the new shape close to a rectangle with width πr and height r.",
      "So the area becomes πr x r = πr²."
    ],
    demoId: "circle-area",
    practice: [
      {
        id: "a1",
        prompt: "In the slice proof, the rectangle-like height is closest to what?",
        options: ["r", "2r", "π"],
        correctAnswer: "r",
        explanation: "Each slice reaches from the center to the edge, so its height is the radius."
      },
      {
        id: "a2",
        prompt: "Half of the circumference 2πr is:",
        options: ["πr", "2r", "πr²"],
        correctAnswer: "πr",
        explanation: "Half of 2πr is πr."
      },
      {
        id: "a3",
        prompt: "Why does the final formula include r²?",
        options: ["Width and height both include r", "Because π = r", "Because diameter is r"],
        correctAnswer: "Width and height both include r",
        explanation: "The rectangle-like width is πr and height is r, so their product has r x r."
      }
    ]
  },
  {
    slug: "circle-circumference-proof",
    title: "Why Circumference Is 2πr",
    subject: "geometry",
    level: 2,
    accent: "blue",
    summary: "Unroll the circle boundary and compare it with the diameter.",
    concept:
      "Circumference is the distance around a circle. π tells how many diameters fit around that boundary.",
    formula: "Circumference = πd = 2πr",
    symbols: [
      "d is the diameter.",
      "d = 2r because the diameter is two radii.",
      "π means the circumference is about 3.14 diameters."
    ],
    why: [
      "Start with the distance across the circle: the diameter.",
      "The round boundary unwraps into a straight length.",
      "That straight length is about 3.14 copies of the diameter.",
      "Because d = 2r, circumference becomes π x 2r = 2πr."
    ],
    demoId: "circle-circumference",
    practice: [
      {
        id: "cc1",
        prompt: "If d = 2r, then πd equals:",
        options: ["2πr", "πr²", "r + π"],
        correctAnswer: "2πr",
        explanation: "Replace d with 2r, so πd = π x 2r = 2πr."
      },
      {
        id: "cc2",
        prompt: "Circumference means:",
        options: ["Distance around the circle", "Space inside the circle", "Only half the circle"],
        correctAnswer: "Distance around the circle",
        explanation: "Circumference is the boundary distance."
      },
      {
        id: "cc3",
        prompt: "π compares circumference with:",
        options: ["Diameter", "Area", "Color"],
        correctAnswer: "Diameter",
        explanation: "π is the ratio circumference divided by diameter."
      }
    ]
  },
  {
    slug: "rectangle-area-grid",
    title: "Why Rectangle Area Is Length x Breadth",
    subject: "geometry",
    level: 1,
    accent: "amber",
    summary: "Count rows and columns to see why rectangle area is multiplication.",
    concept:
      "A rectangle can be filled with equal square units. Area counts how many unit squares fit inside.",
    formula: "Area = length x breadth",
    symbols: [
      "Length counts how many squares fit across.",
      "Breadth counts how many rows fit from top to bottom.",
      "Multiplication counts equal groups quickly."
    ],
    why: [
      "Each row has the same number of square units as the length.",
      "The number of rows is the breadth.",
      "Total squares are length repeated breadth times.",
      "So area is length x breadth."
    ],
    demoId: "rectangle-area",
    practice: [
      {
        id: "r1",
        prompt: "A rectangle has length 6 and breadth 4. What is its area?",
        options: ["10", "24", "20"],
        correctAnswer: "24",
        explanation: "Area is length x breadth, so 6 x 4 = 24 square units."
      },
      {
        id: "r2",
        prompt: "What does area count?",
        options: ["Boundary length", "Inside square units", "Only corners"],
        correctAnswer: "Inside square units",
        explanation: "Area tells how much surface is covered inside the shape."
      },
      {
        id: "r3",
        prompt: "Why is rectangle area multiplication?",
        options: ["Equal rows repeat", "The sides are curved", "Area is always 2"],
        correctAnswer: "Equal rows repeat",
        explanation: "A rectangle has equal rows of square units, so multiplication counts them."
      }
    ]
  },
  {
    slug: "triangle-area-half-rectangle",
    title: "Why Triangle Area Is 1/2 x Base x Height",
    subject: "geometry",
    level: 2,
    accent: "rose",
    summary: "Use a matching triangle to build a rectangle and see the half.",
    concept:
      "A triangle with a base and height can be paired with a copy of itself to make a rectangle or parallelogram.",
    formula: "Area = 1/2 x base x height",
    symbols: [
      "Base is the bottom side used for measurement.",
      "Height is the straight up-and-down distance from base to top.",
      "The one half appears because two matching triangles make the full rectangle-like area."
    ],
    why: [
      "A rectangle with the same base and height has area base x height.",
      "Two matching triangles fill that same rectangle-like space.",
      "One triangle is half of the combined shape.",
      "So triangle area is 1/2 x base x height."
    ],
    demoId: "triangle-area",
    practice: [
      {
        id: "t1",
        prompt: "A triangle has base 8 and height 5. What is its area?",
        options: ["20", "40", "13"],
        correctAnswer: "20",
        explanation: "Use 1/2 x 8 x 5 = 20 square units."
      },
      {
        id: "t2",
        prompt: "Why do we multiply by 1/2?",
        options: ["A triangle is half of a matching rectangle-like shape", "Height is always half", "Base is always half"],
        correctAnswer: "A triangle is half of a matching rectangle-like shape",
        explanation: "Two matching triangles can make the full base x height area."
      },
      {
        id: "t3",
        prompt: "Height should be measured:",
        options: ["Along a slanted side", "Straight from base to top", "Around the triangle"],
        correctAnswer: "Straight from base to top",
        explanation: "Height is perpendicular to the base, even when the side is slanted."
      }
    ]
  },
  {
    slug: "variables-and-expressions",
    title: "Variables and Expressions",
    subject: "algebra",
    level: 1,
    accent: "green",
    summary: "See a variable as a box whose value can change while the rule stays the same.",
    concept:
      "A variable is a symbol for a number that can change. An expression combines numbers, variables, and operations.",
    formula: "x + 3",
    symbols: [
      "x is the variable.",
      "3 is a constant because it does not change.",
      "x + 3 means start with x, then add 3 more."
    ],
    why: [
      "The same expression can describe many situations.",
      "When x changes, the result changes.",
      "The rule stays fixed: always add 3.",
      "That is why variables are useful for patterns."
    ],
    demoId: "variable-balance",
    practice: [
      {
        id: "v1",
        prompt: "In x + 3, which part can change?",
        options: ["x", "3", "+"],
        correctAnswer: "x",
        explanation: "x is the variable, so it can stand for different numbers."
      },
      {
        id: "v2",
        prompt: "If x = 4, what is x + 3?",
        options: ["7", "12", "1"],
        correctAnswer: "7",
        explanation: "Replace x with 4, then add 3."
      },
      {
        id: "v3",
        prompt: "Which is an expression?",
        options: ["a + 5", "=", "Only a question mark"],
        correctAnswer: "a + 5",
        explanation: "An expression combines a variable, number, or operation without needing an equals sign."
      }
    ]
  },
  {
    slug: "terms-coefficients-like-terms",
    title: "Terms, Coefficients, and Like Terms",
    subject: "algebra",
    level: 1,
    accent: "amber",
    summary: "Sort algebra tiles to see which terms can be combined.",
    concept:
      "A term is a part of an expression. A coefficient tells how many of a variable term we have.",
    formula: "3x + 2x = 5x",
    symbols: [
      "3x means three x tiles.",
      "2x means two x tiles.",
      "Like terms have the same variable part."
    ],
    why: [
      "Only matching objects can be grouped directly.",
      "x tiles combine with x tiles.",
      "Number tiles combine with number tiles.",
      "That is why 3x + 2x becomes 5x."
    ],
    demoId: "like-terms",
    practice: [
      {
        id: "lt1",
        prompt: "Combine 3x + 2x.",
        options: ["5x", "5x²", "6x"],
        correctAnswer: "5x",
        explanation: "Three x tiles plus two x tiles make five x tiles."
      },
      {
        id: "lt2",
        prompt: "Which are like terms?",
        options: ["2x and 5x", "2x and 5", "x and x²"],
        correctAnswer: "2x and 5x",
        explanation: "Both terms have the same variable part, x."
      },
      {
        id: "lt3",
        prompt: "In 7x, the coefficient is:",
        options: ["7", "x", "7x²"],
        correctAnswer: "7",
        explanation: "The coefficient tells how many x terms there are."
      }
    ]
  },
  {
    slug: "simple-linear-equations",
    title: "Simple Equations as Balance",
    subject: "algebra",
    level: 1,
    accent: "rose",
    summary: "Use a balance model to see why we do the same thing to both sides.",
    concept:
      "An equation says two sides are equal. To keep equality true, any change must happen to both sides.",
    formula: "x + 3 = 7, so x = 4",
    symbols: [
      "The equals sign means both sides balance.",
      "x is the unknown value.",
      "Undoing +3 means subtracting 3 from both sides."
    ],
    why: [
      "The left side and right side start equal.",
      "Removing 3 from the left isolates x.",
      "Removing 3 from the right keeps the balance.",
      "The remaining value shows x = 4."
    ],
    demoId: "linear-equation",
    practice: [
      {
        id: "eq1",
        prompt: "Solve x + 3 = 7.",
        options: ["4", "10", "3"],
        correctAnswer: "4",
        explanation: "Subtract 3 from both sides: x = 4."
      },
      {
        id: "eq2",
        prompt: "Why do we subtract from both sides?",
        options: ["To keep the balance", "To make numbers bigger", "To remove the equals sign"],
        correctAnswer: "To keep the balance",
        explanation: "An equation stays equal only when both sides get the same change."
      },
      {
        id: "eq3",
        prompt: "In x + 5 = 9, x is:",
        options: ["4", "5", "14"],
        correctAnswer: "4",
        explanation: "Subtract 5 from both sides: x = 4."
      }
    ]
  },
  {
    slug: "algebra-square-identity",
    title: "Why (a + b)² = a² + 2ab + b²",
    subject: "algebra",
    level: 2,
    accent: "violet",
    summary: "Change a and b to see the identity as four colored areas.",
    concept:
      "Squaring a sum means building a square whose side is a + b. The total area is the sum of its four parts.",
    formula: "(a + b)² = a² + 2ab + b²",
    symbols: [
      "a² is the square made by side a.",
      "b² is the square made by side b.",
      "ab appears twice because there are two rectangles with sides a and b."
    ],
    why: [
      "The full square has side a + b, so its area is (a + b)².",
      "Splitting each side into a and b divides the square into four regions.",
      "Those regions are a², ab, ab, and b².",
      "Combining the two ab rectangles gives a² + 2ab + b²."
    ],
    demoId: "algebra-square",
    practice: [
      {
        id: "s1",
        prompt: "How many ab rectangles appear in (a + b)²?",
        options: ["1", "2", "3"],
        correctAnswer: "2",
        explanation: "One rectangle is a by b and another is b by a, so there are two ab parts."
      },
      {
        id: "s2",
        prompt: "Expand (x + 3)².",
        options: ["x² + 6x + 9", "x² + 3x + 9", "x² + 9"],
        correctAnswer: "x² + 6x + 9",
        explanation: "Use a² + 2ab + b² with a = x and b = 3."
      },
      {
        id: "s3",
        prompt: "Which visual part represents b²?",
        options: ["Square with side b", "Rectangle a by b", "Full square side a + b"],
        correctAnswer: "Square with side b",
        explanation: "b² means b x b, so it is a square with side b."
      }
    ]
  },
  {
    slug: "algebra-minus-square-identity",
    title: "Why (a - b)² = a² - 2ab + b²",
    subject: "algebra",
    level: 2,
    accent: "rose",
    summary: "Start with a², remove two strips, then add back the overlap.",
    concept:
      "The square with side a - b can be seen by cutting b from both the width and height of a larger a by a square.",
    formula: "(a - b)² = a² - 2ab + b²",
    symbols: [
      "a² is the original large square.",
      "Two ab strips are removed.",
      "The b² corner is removed twice, so it must be added back once."
    ],
    why: [
      "Begin with an a by a square.",
      "Remove a strip of width b from the right: ab.",
      "Remove a strip of height b from the bottom: another ab.",
      "The b by b corner was counted in both removals, so add b² back."
    ],
    demoId: "algebra-minus-square",
    practice: [
      {
        id: "ms1",
        prompt: "Expand (x - 3)².",
        options: ["x² - 6x + 9", "x² - 3x + 9", "x² + 6x + 9"],
        correctAnswer: "x² - 6x + 9",
        explanation: "Use a² - 2ab + b² with a = x and b = 3."
      },
      {
        id: "ms2",
        prompt: "Why is b² added back?",
        options: ["It was removed twice", "It was never removed", "It equals a"],
        correctAnswer: "It was removed twice",
        explanation: "The overlapping b by b corner belongs to both removed strips."
      },
      {
        id: "ms3",
        prompt: "The middle term in (a - b)² is:",
        options: ["-2ab", "+2ab", "-b²"],
        correctAnswer: "-2ab",
        explanation: "Two ab strips are removed, so the middle term is negative."
      }
    ]
  },
  {
    slug: "difference-of-squares",
    title: "Why (a + b)(a - b) = a² - b²",
    subject: "algebra",
    level: 2,
    accent: "amber",
    summary: "Rearrange two side lengths to reveal a large square minus a small square.",
    concept:
      "The product (a + b)(a - b) makes a rectangle whose area matches the area left after removing b² from a².",
    formula: "(a + b)(a - b) = a² - b²",
    symbols: [
      "a² is the large square.",
      "b² is the small square removed.",
      "The remaining area can rearrange into a rectangle with sides a + b and a - b."
    ],
    why: [
      "Start with a large square of area a².",
      "Remove a smaller b by b square.",
      "Cut and slide the remaining parts.",
      "They form a rectangle with side lengths a + b and a - b."
    ],
    demoId: "difference-squares",
    practice: [
      {
        id: "ds1",
        prompt: "Expand (x + 4)(x - 4).",
        options: ["x² - 16", "x² + 16", "x² - 8x + 16"],
        correctAnswer: "x² - 16",
        explanation: "Use a² - b² with a = x and b = 4."
      },
      {
        id: "ds2",
        prompt: "(a + b)(a - b) has no middle ab term because:",
        options: ["+ab and -ab cancel", "b is zero", "a² disappears"],
        correctAnswer: "+ab and -ab cancel",
        explanation: "The positive and negative ab terms balance out."
      },
      {
        id: "ds3",
        prompt: "The expression a² - b² means:",
        options: ["Large square minus small square", "Two equal rectangles", "Only b squared"],
        correctAnswer: "Large square minus small square",
        explanation: "It is the area left after removing b² from a²."
      }
    ]
  },
  {
    slug: "mixed-word-problems",
    title: "Mixed Word Problems",
    subject: "geometry",
    level: 3,
    accent: "green",
    summary: "Choose whether a situation needs perimeter, area, or algebra.",
    concept:
      "Word problems become easier when you first decide what the question is asking you to measure or find.",
    formula: "Choose the model, then calculate",
    symbols: [
      "Fence, border, and boundary usually point to perimeter.",
      "Cover, tile, paint, and surface usually point to area.",
      "Unknown values can be represented with variables."
    ],
    why: [
      "A word problem hides the math inside a situation.",
      "Visual clues tell whether to use perimeter, area, or an equation.",
      "Once the model is chosen, the calculation becomes straightforward."
    ],
    demoId: "word-problem",
    practice: [
      {
        id: "wp1",
        prompt: "A garden needs fencing around it. Which idea is needed?",
        options: ["Perimeter", "Area", "Like terms"],
        correctAnswer: "Perimeter",
        explanation: "Fencing goes around the outside boundary."
      },
      {
        id: "wp2",
        prompt: "A floor needs tiles to cover it. Which idea is needed?",
        options: ["Area", "Circumference", "Angle only"],
        correctAnswer: "Area",
        explanation: "Tiles cover the inside surface, so use area."
      },
      {
        id: "wp3",
        prompt: "A number plus 3 equals 9. Which model helps?",
        options: ["Equation", "Circle area", "Triangle height"],
        correctAnswer: "Equation",
        explanation: "An unknown number can be represented by a variable in an equation."
      }
    ]
  }
];

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getLessonsBySubject(subject: Subject) {
  return lessons.filter((lesson) => lesson.subject === subject).sort((a, b) => a.level - b.level);
}

export function getNextLesson(slug: string) {
  const orderedLessons = [...lessons].sort((a, b) => {
    if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
    return a.level - b.level;
  });
  const index = orderedLessons.findIndex((lesson) => lesson.slug === slug);
  return index >= 0 ? orderedLessons[index + 1] : undefined;
}
