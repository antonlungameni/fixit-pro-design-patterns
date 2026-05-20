import { JobCardMemento } from "../Memento/JobCardMemento";

export class JobCardHistory {
  private history: JobCardMemento[] = [];

  push(memento: JobCardMemento): void {
    this.history.push(memento);
    console.log(`  [History] Saved: ${memento}`);
  }

  pop(): JobCardMemento | undefined {
    if (this.history.length === 0) {
      console.log("  [History] Nothing to restore.");
      return undefined;
    }

    const memento = this.history.pop()!;
    console.log(`  [History] Restoring: ${memento}`);
    return memento;
  }

  printAll(): void {
    console.log(`  [History] ${this.history.length} snapshot(s):`);
    for (const m of [...this.history].reverse()) console.log(`    ${m}`);
  }
}
