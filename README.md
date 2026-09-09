# Design Patterns with FixIt Pro

All 22 Gang of Four patterns, worked through a single running scenario rather than 22 unrelated toy examples. That scenario is **FixIt Pro** — a platform connecting homeowners with qualified handymen — and by the end it has a job card lifecycle, a pricing engine, an approval chain, and an inspection workflow, each built with the pattern that fits it.

Every pattern is implemented twice, once in **C#** and once in **TypeScript**, sitting side by side. Put them next to each other and it becomes obvious how little of a pattern is really about the language: the structure holds, and only the syntax moves.

**Full write-ups:** [lungameni.dev/blog/design-patterns-1](https://lungameni.dev/blog/design-patterns-1)

---

## Series Status

**Complete.** All 22 patterns, both languages.

| Block | Patterns | Episodes |
| --- | --- | --- |
| Creational | 5 | 01–05 |
| Structural | 7 | 06–12 |
| Behavioral | 10 | 13–22 |

---

## Episodes

### Creational Patterns — how objects are created

| # | Pattern | FixIt Pro Scenario | Code |
| --- | --- | --- | --- |
| 01 | [Factory Method](https://lungameni.dev/blog/design-patterns-1) | Creating typed job cards without coupling to concrete classes | [C#](csharp/Creational/01-FactoryMethod) · [TS](typescript/Creational/01-FactoryMethod) |
| 02 | [Abstract Factory](https://lungameni.dev/blog/design-patterns-2) | Matched notification kits for Homeowner vs Business clients | [C#](csharp/Creational/02-AbstractFactory) · [TS](typescript/Creational/02-AbstractFactory) |
| 03 | [Builder](https://lungameni.dev/blog/design-patterns-3) | Constructing complex job cards step by step | [C#](csharp/Creational/03-Builder) · [TS](typescript/Creational/03-Builder) |
| 04 | [Prototype](https://lungameni.dev/blog/design-patterns-4) | Cloning recurring job card templates | [C#](csharp/Creational/04-Prototype) · [TS](typescript/Creational/04-Prototype) |
| 05 | [Singleton](https://lungameni.dev/blog/design-patterns-5) | One thread-safe global job card registry | [C#](csharp/Creational/05-Singleton) · [TS](typescript/Creational/05-Singleton) |

### Structural Patterns — how objects are composed

| # | Pattern | FixIt Pro Scenario | Code |
| --- | --- | --- | --- |
| 06 | [Adapter](https://lungameni.dev/blog/design-patterns-6) | Legacy SMS gateway behind a modern `INotifier` | [C#](csharp/Structural/06-Adapter) · [TS](typescript/Structural/06-Adapter) |
| 07 | [Bridge](https://lungameni.dev/blog/design-patterns-7) | Urgency levels × notification channels without class explosion | [C#](csharp/Structural/07-Bridge) · [TS](typescript/Structural/07-Bridge) |
| 08 | [Composite](https://lungameni.dev/blog/design-patterns-8) | Compound job trees treated like single jobs | [C#](csharp/Structural/08-Composite) · [TS](typescript/Structural/08-Composite) |
| 09 | [Decorator](https://lungameni.dev/blog/design-patterns-9) | Urgent, insured, warrantied — stacked at runtime | [C#](csharp/Structural/09-Decorator) · [TS](typescript/Structural/09-Decorator) |
| 10 | [Facade](https://lungameni.dev/blog/design-patterns-10) | Five subsystems behind one `DispatchJob()` call | [C#](csharp/Structural/10-Facade) · [TS](typescript/Structural/10-Facade) |
| 11 | [Flyweight](https://lungameni.dev/blog/design-patterns-11) | 100,000 job cards sharing 3 metadata objects | [C#](csharp/Structural/11-Flyweight) · [TS](typescript/Structural/11-Flyweight) |
| 12 | [Proxy](https://lungameni.dev/blog/design-patterns-12) | Access control, logging, and lazy loading | [C#](csharp/Structural/12-Proxy) · [TS](typescript/Structural/12-Proxy) |

### Behavioral Patterns — how objects communicate

| # | Pattern | FixIt Pro Scenario | Code |
| --- | --- | --- | --- |
| 13 | [Chain of Responsibility](https://lungameni.dev/blog/design-patterns-13) | Approval escalation by cost threshold | [C#](csharp/Behavioral/13-ChainOfResponsibility) · [TS](typescript/Behavioral/13-ChainOfResponsibility) |
| 14 | [Command](https://lungameni.dev/blog/design-patterns-14) | Undoable, queueable job actions | [C#](csharp/Behavioral/14-Command) · [TS](typescript/Behavioral/14-Command) |
| 15 | [Iterator](https://lungameni.dev/blog/design-patterns-15) | Priority traversal without exposing internals | [C#](csharp/Behavioral/15-Iterator) · [TS](typescript/Behavioral/15-Iterator) |
| 16 | [Mediator](https://lungameni.dev/blog/design-patterns-16) | `DispatchCenter` routing between all actors | [C#](csharp/Behavioral/16-Mediator) · [TS](typescript/Behavioral/16-Mediator) |
| 17 | [Memento](https://lungameni.dev/blog/design-patterns-17) | State snapshots without breaking encapsulation | [C#](csharp/Behavioral/17-Memento) · [TS](typescript/Behavioral/17-Memento) |
| 18 | [Observer](https://lungameni.dev/blog/design-patterns-18) | Automatic notification on status change | [C#](csharp/Behavioral/18-Observer) · [TS](typescript/Behavioral/18-Observer) |
| 19 | [State](https://lungameni.dev/blog/design-patterns-19) | Job lifecycle with enforced valid transitions | [C#](csharp/Behavioral/19-State) · [TS](typescript/Behavioral/19-State) |
| 20 | [Strategy](https://lungameni.dev/blog/design-patterns-20) | Swappable pricing algorithms | [C#](csharp/Behavioral/20-Strategy) · [TS](typescript/Behavioral/20-Strategy) |
| 21 | [Template Method](https://lungameni.dev/blog/design-patterns-21) | Fixed inspection sequence, variable steps | [C#](csharp/Behavioral/21-TemplateMethod) · [TS](typescript/Behavioral/21-TemplateMethod) |
| 22 | [Visitor](https://lungameni.dev/blog/design-patterns-22) | New operations without touching job classes | [C#](csharp/Behavioral/22-Visitor) · [TS](typescript/Behavioral/22-Visitor) |

---

## Structure

```text
fixit-pro-design-patterns/
├── csharp/
│   ├── Creational/    01–05
│   ├── Structural/    06–12
│   └── Behavioral/    13–22
└── typescript/
    ├── Creational/    01–05
    ├── Structural/    06–12
    └── Behavioral/    13–22
```

Every episode folder is a self-contained project you can run on its own — no shared library, no build orchestration, nothing to set up first.

---

## Running the Examples

### Prerequisites

| Language | What you need |
| --- | --- |
| C# | [.NET 10 SDK](https://dotnet.microsoft.com/download) |
| TypeScript | [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io/installation) (`npm install -g pnpm`) |

### C\#

```bash
cd csharp/Creational/01-FactoryMethod
dotnet run
```

### TypeScript

```bash
cd typescript/Creational/01-FactoryMethod
pnpm install
pnpm build
pnpm start
```

> Swap the folder for any other episode — the steps are identical.

---

## Pattern Comparisons

Half the difficulty with these patterns isn't implementing them, it's telling them apart. Several share a class diagram almost exactly and differ only in intent, so each article takes on the ones its pattern is most often confused with:

| Comparison | Episode | The distinction |
| --- | --- | --- |
| Factory Method vs Abstract Factory | 02 | One product vs a family of products |
| Bridge vs Adapter | 07 | Design decision vs retrofit |
| Decorator vs Bridge vs Inheritance | 09 | Runtime wrapping vs two hierarchies vs subclassing |
| Facade vs Adapter vs Mediator | 10 | Simplify vs translate vs coordinate |
| Proxy vs Decorator | 12 | Control access vs add behaviour |
| Mediator vs Facade | 16 | Multi-directional hub vs one-way simplification |
| Command vs Memento | 17 | Per-action undo vs full state snapshot |
| State vs Strategy | 19, 20 | Objects transition vs client picks |
| Template Method vs Strategy | 21 | Inheritance vs composition |

---

## About the Series

Every episode follows the same shape:

- The **problem**, grounded in a FixIt Pro feature rather than shapes and animals
- A complete, runnable implementation in both languages
- A **C# vs TypeScript** table covering the syntax and the ergonomics — where one language makes the pattern read better, and why
- When to reach for the pattern, and when to leave it alone
- Where it already shows up in code you use: .NET, ASP.NET Core, Node.js, React, Angular, and others

---

## Author

**Anton Lungameni** — [lungameni.dev](https://lungameni.dev)
