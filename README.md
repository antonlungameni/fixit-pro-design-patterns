# Design Patterns with FixIt Pro

A 22-episode series exploring the Gang of Four design patterns through a real-world scenario: **FixIt Pro**, a platform that connects homeowners with qualified handymen.

Every pattern is implemented in both **C#** and **TypeScript** side-by-side, so you can see that patterns are language-agnostic — only the syntax changes.

---

## Structure

```text
fixit-pro-design-patterns/
├── csharp/
│   └── Creational/
│       ├── 01-FactoryMethod/
│       ├── 02-AbstractFactory/
│       └── 03-Builder/
└── typescript/
    └── Creational/
        ├── 01-FactoryMethod/
        ├── 02-AbstractFactory/
        └── 03-Builder/
```

Each episode folder contains a self-contained, runnable project.

---

## Episodes

### Creational Patterns

| # | Pattern | FixIt Pro Scenario | C# | TypeScript |
| --- | --- | --- | --- | --- |
| 01 | [Factory Method](https://lungameni.dev/blog/design-patterns-1) | Creating typed job cards (Plumbing, Electrical, Carpentry) without coupling to concrete classes | `csharp/Creational/01-FactoryMethod` | `typescript/Creational/01-FactoryMethod` |
| 02 | [Abstract Factory](https://lungameni.dev/blog/design-patterns-2) | Building notification kits (alert + email + dashboard widget) for Homeowner vs Business clients | `csharp/Creational/02-AbstractFactory` | `typescript/Creational/02-AbstractFactory` |
| 03 | Builder | Constructing complex `JobCard` objects step by step with optional parts, scheduling, and instructions | `csharp/Creational/03-Builder` | `typescript/Creational/03-Builder` |

---

## Running the Examples

### C# (.NET 10)

```bash
cd csharp/Creational/01-FactoryMethod
dotnet run
```

### TypeScript

```bash
cd typescript/Creational/01-FactoryMethod
pnpm install
pnpm tsc
node dist/app.js
```

---

## About the Series

Each episode covers:

- The **problem** the pattern solves, grounded in a FixIt Pro feature
- A full, working implementation in both languages
- A **C# vs TypeScript** comparison table highlighting syntax differences
- When to use the pattern — and when not to
