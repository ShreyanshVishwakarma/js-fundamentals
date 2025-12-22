# js-fundamentals
One day I felt like all this time that I have spend writing and building things in javascript is a joke.

I dont understand javascript well enough. So this is just me trying to refresh my knowledge of js and ts and hopefully learn something new.


GPT :

Phase 1: The Building Blocks (The "What")

    Variables & Constants: let vs const vs var (and why to avoid var).

    Primitive Data Types: String, Number, Boolean, Null, Undefined, Symbol.

    Operators: Arithmetic, Assignment, Logical (&&, ||, !), and Comparison (== vs ===).

    Control Flow: if/else, switch, Ternary Operator (condition ? true : false).

    Loops: for, while, and for...of.

Phase 2: Data & Logic (The "How")

    Functions Basics: Function Declarations vs. Expressions.

    Arrow Functions: Syntax differences and implicit returns.

    Arrays & Methods: push, pop, shift, unshift, splice, slice.

    Higher-Order Array Methods: Crucial. Master .map(), .filter(), .reduce(), .find(), .some().

    Objects: Dot notation vs. bracket notation, Object destructuring, Spread operator (...).

Phase 3: The Interactive Web (The DOM)

    DOM Selectors: querySelector, getElementById.

    DOM Manipulation: Creating elements (createElement), modifying text/styles, adding classes.

    Event Listeners: addEventListener, Click/Submit/Input events.

    Event Flow: Bubbling, Capturing, and Delegation.

Phase 4: Advanced Concepts (The "Why")

    Scope: Global, Function, and Block scope.

    Hoisting & TDZ: Variable hoisting vs. Function hoisting; Temporal Dead Zone.

    Closures: Understanding lexical scoping and data encapsulation.

    The this Keyword: How it behaves in global, function, object, and arrow contexts.

    Prototypes: The prototype chain and inheritance.

    Classes (ES6): class, constructor, extends, super.

Phase 5: Asynchronous JavaScript (The "When")

    Callbacks: Understanding the callback pattern.

    Promises: Creating and consuming promises (.then, .catch).

    Async/Await: Writing synchronous-looking async code.

    Fetch API: Making HTTP requests to external APIs.

    The Event Loop: Call Stack, Web APIs, Task Queue, Microtask Queue.

Phase 6: Professional Practices

    Modules: ES Modules (import / export).

    Error Handling: try / catch / finally blocks.

    Storage: LocalStorage vs. SessionStorage.

TypeScript Learning Path

Start this only after you are comfortable with JS Phase 4.
Phase 1: The Transition

    Environment Setup: Installing TS, tsc compiler, understanding tsconfig.json.

    Basic Static Typing: Annotating variables (string, number, boolean).

    The any Type: Why it exists and why you should avoid it.

    Arrays & Tuples: Typed arrays (string[]) and fixed-length arrays (Tuples).

Phase 2: Defining Shapes

    Interfaces: Defining object contracts.

    Type Aliases: Creating custom types and when to use them vs Interfaces.

    Optional Properties: Marking fields as optional (?).

    Functions: Typing arguments, return values, and void.

Phase 3: Logic & Safety

    Union Types: Accepting multiple types (string | number).

    Literal Types: Restricting to exact values ("success" | "error").

    Enums: Numeric and String enums.

    Type Narrowing: Using typeof checks to refine types inside code blocks.

    Unknown & Never: The safer alternatives to any.

Phase 4: Advanced Patterns

    Generics (Basics): Generic functions and interfaces (Using <T>).

    Generics (Constraints): Limiting what <T> can be (extends).

    Utility Types: Partial, Pick, Omit, Readonly, Record.

    Keyof & Typeof: Dynamic type extraction.
