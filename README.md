# Design Patterns with FixIt Pro

A 22-episode series exploring the Gang of Four design patterns through a real-world scenario: **FixIt Pro**, a platform that connects homeowners with qualified handymen.

Every pattern is implemented in both **C#** and **TypeScript** side-by-side, so you can see that patterns are language-agnostic — only the syntax changes.

---

## Structure

```text
fixit-pro-design-patterns/
├── csharp/
│   ├── Creational/
│   │   ├── 01-FactoryMethod/
│   │   ├── 02-AbstractFactory/
│   │   ├── 03-Builder/
│   │   ├── 04-Prototype/
│   │   └── 05-Singleton/
│   ├── Structural/
│   │   ├── 06-Adapter/
│   │   ├── 07-Bridge/
│   │   ├── 08-Composite/
│   │   ├── 09-Decorator/
│   │   ├── 10-Facade/
│   │   ├── 11-Flyweight/
│   │   └── 12-Proxy/
│   └── Behavioral/
│       ├── 13-ChainOfResponsibility/
│       ├── 14-Command/
│       ├── 15-Iterator/
│       ├── 16-Mediator/
│       ├── 17-Memento/
│       ├── 18-Observer/
│       ├── 19-State/
│       └── 20-Strategy/
└── typescript/
    ├── Creational/
    │   ├── 01-FactoryMethod/
    │   ├── 02-AbstractFactory/
    │   ├── 03-Builder/
    │   ├── 04-Prototype/
    │   └── 05-Singleton/
    ├── Structural/
    │   ├── 06-Adapter/
    │   ├── 07-Bridge/
    │   ├── 08-Composite/
    │   ├── 09-Decorator/
    │   ├── 10-Facade/
    │   ├── 11-Flyweight/
    │   └── 12-Proxy/
    └── Behavioral/
        ├── 13-ChainOfResponsibility/
        ├── 14-Command/
        ├── 15-Iterator/
        ├── 16-Mediator/
        ├── 17-Memento/
        ├── 18-Observer/
        ├── 19-State/
        └── 20-Strategy/
```

Each episode folder contains a self-contained, runnable project.

---

## Episodes

### Creational Patterns

| # | Pattern | FixIt Pro Scenario | C# | TypeScript |
| --- | --- | --- | --- | --- |
| 01 | [Factory Method](https://lungameni.dev/blog/design-patterns-1) | Creating typed job cards (Plumbing, Electrical, Carpentry) without coupling to concrete classes | `csharp/Creational/01-FactoryMethod` | `typescript/Creational/01-FactoryMethod` |
| 02 | [Abstract Factory](https://lungameni.dev/blog/design-patterns-2) | Building notification kits (alert + email + dashboard widget) for Homeowner vs Business clients | `csharp/Creational/02-AbstractFactory` | `typescript/Creational/02-AbstractFactory` |
| 03 | [Builder](https://lungameni.dev/blog/design-patterns-3) | Constructing complex `JobCard` objects step by step with optional parts, scheduling, and instructions | `csharp/Creational/03-Builder` | `typescript/Creational/03-Builder` |
| 04 | [Prototype](https://lungameni.dev/blog/design-patterns-4) | Cloning recurring job card templates for monthly boiler services and weekly fire inspections without rebuilding from scratch | `csharp/Creational/04-Prototype` | `typescript/Creational/04-Prototype` |
| 05 | [Singleton](https://lungameni.dev/blog/design-patterns-5) | One `JobCardRegistry` shared across dispatcher, billing, and reporting — ensuring a single, consistent store of active jobs | `csharp/Creational/05-Singleton` | `typescript/Creational/05-Singleton` |

---

### Structural Patterns

| # | Pattern | FixIt Pro Scenario | C# | TypeScript |
| --- | --- | --- | --- | --- |
| 06 | [Adapter](https://lungameni.dev/blog/design-patterns-6) | Bridging a legacy `LegacySmsGateway` into the modern `INotifier` interface without touching the legacy class | `csharp/Structural/06-Adapter` | `typescript/Structural/06-Adapter` |
| 07 | [Bridge](https://lungameni.dev/blog/design-patterns-7) | Decoupling notification urgency levels (Normal, High, Urgent) from delivery channels (Email, SMS, Push, WhatsApp) to avoid a class-explosion matrix | `csharp/Structural/07-Bridge` | `typescript/Structural/07-Bridge` |
| 08 | [Composite](https://lungameni.dev/blog/design-patterns-8) | Treating a single `JobCard` and a nested `CompoundJob` (Full Kitchen Renovation → Countertop Installation → leaf jobs) through the same `IJobComponent` interface | `csharp/Structural/08-Composite` | `typescript/Structural/08-Composite` |
| 09 | [Decorator](https://lungameni.dev/blog/design-patterns-9) | Stacking `UrgentDecorator`, `InsuredDecorator`, and `WarrantiedDecorator` around a base `JobCard` at runtime — avoiding exponential subclass explosion | `csharp/Structural/09-Decorator` | `typescript/Structural/09-Decorator` |
| 10 | [Facade](https://lungameni.dev/blog/design-patterns-10) | Hiding `Scheduler`, `HandymanAssigner`, `NotificationService`, `JobCardRegistry`, and `BillingService` behind a single `JobDispatchFacade.DispatchJob()` call | `csharp/Structural/10-Facade` | `typescript/Structural/10-Facade` |
| 11 | [Flyweight](https://lungameni.dev/blog/design-patterns-11) | Sharing one immutable `JobCategoryMetadata` (tools, safety checklist, regulatory note) per category across every job card, instead of duplicating it on each one | `csharp/Structural/11-Flyweight` | `typescript/Structural/11-Flyweight` |
| 12 | [Proxy](https://lungameni.dev/blog/design-patterns-12) | Guarding `JobCardRegistry` behind a `JobCardAccessProxy` that checks handyman certifications, plus a lazy virtual proxy that defers loading the real registry until first use | `csharp/Structural/12-Proxy` | `typescript/Structural/12-Proxy` |

---

### Behavioral Patterns

| # | Pattern | FixIt Pro Scenario | C# | TypeScript |
| --- | --- | --- | --- | --- |
| 13 | [Chain of Responsibility](https://lungameni.dev/blog/design-patterns-13) | Escalating job approvals by cost up a chain of Handyman → Supervisor → Manager → Director, each handler approving within its own limit or passing the request on | `csharp/Behavioral/13-ChainOfResponsibility` | `typescript/Behavioral/13-ChainOfResponsibility` |
| 14 | [Command](https://lungameni.dev/blog/design-patterns-14) | Turning assign, pause, complete, and cancel into objects a `JobActionInvoker` can queue, execute, and undo — including a `MacroCommand` that runs several as one | `csharp/Behavioral/14-Command` | `typescript/Behavioral/14-Command` |
| 15 | [Iterator](https://lungameni.dev/blog/design-patterns-15) | Walking a `HandymanJobQueue` in priority order through a hand-written `PriorityJobIterator`, then again through the language's native `IEnumerable<T>` / `Symbol.iterator` protocol | `csharp/Behavioral/15-Iterator` | `typescript/Behavioral/15-Iterator` |
| 16 | [Mediator](https://lungameni.dev/blog/design-patterns-16) | Routing `JobRequested` and `JobCompleted` events through a `DispatchCenter` so Homeowner, Handyman, Scheduler, and BillingService never hold references to each other | `csharp/Behavioral/16-Mediator` | `typescript/Behavioral/16-Mediator` |
| 17 | [Memento](https://lungameni.dev/blog/design-patterns-17) | Snapshotting a `JobCard` before each edit so a `JobCardHistory` caretaker can undo an accidental pause or cost change — without exposing the job card's internals | `csharp/Behavioral/17-Memento` | `typescript/Behavioral/17-Memento` |
| 18 | [Observer](https://lungameni.dev/blog/design-patterns-18) | Broadcasting every job card status change to `HomeownerNotifier`, `SupervisorAlert`, `BillingService`, and `AuditLog` — with observers free to unsubscribe mid-job | `csharp/Behavioral/18-Observer` | `typescript/Behavioral/18-Observer` |
| 19 | [State](https://lungameni.dev/blog/design-patterns-19) | Moving a job card through Draft → Assigned → InProgress → Paused → PendingReview → Closed, with each state class owning its own valid transitions instead of one giant conditional | `csharp/Behavioral/19-State` | `typescript/Behavioral/19-State` |
| 20 | [Strategy](https://lungameni.dev/blog/design-patterns-20) | Swapping Fixed Rate, Hourly Rate, Emergency Surcharge, and Contract Rate pricing on a `BillingService` at runtime — the surcharge and discount strategies wrap another strategy, so they compose | `csharp/Behavioral/20-Strategy` | `typescript/Behavioral/20-Strategy` |

---

## Running the Examples

Each episode is a self-contained project. Pick the pattern you want to explore and follow the steps for your language.

### Prerequisites

| Language | What you need |
| --- | --- |
| C# | [.NET 10 SDK](https://dotnet.microsoft.com/download) |
| TypeScript | [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io/installation) (`npm install -g pnpm`) |

### C\#

Navigate into any episode folder and run it with a single command — .NET handles the rest.

```bash
cd csharp/Creational/01-FactoryMethod
dotnet run
```

### TypeScript

Install dependencies first (only needed once per episode), then build and run.

```bash
cd typescript/Creational/01-FactoryMethod
pnpm install   # downloads typescript into node_modules
pnpm build     # compiles .ts files to dist/
pnpm start     # runs the compiled output with Node
```

> Swap `01-FactoryMethod` for any other episode folder — the steps are identical.

---

## About the Series

Each episode covers:

- The **problem** the pattern solves, grounded in a FixIt Pro feature
- A full, working implementation in both languages
- A **C# vs TypeScript** comparison table highlighting syntax differences
- When to use the pattern — and when not to
