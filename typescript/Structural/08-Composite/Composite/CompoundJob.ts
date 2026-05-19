import { IJobComponent } from "../Component/IJobComponent";

export class CompoundJob implements IJobComponent {
  private children: IJobComponent[] = [];

  constructor(readonly name: string) {}

  get cost(): number {
    return this.children.reduce((sum, child) => sum + child.cost, 0);
  }

  add(component: IJobComponent): void {
    this.children.push(component);
  }

  remove(component: IJobComponent): void {
    this.children = this.children.filter((c) => c !== component);
  }

  execute(): void {
    console.log(
      `\n🔧 Starting compound job: ${this.name} (Total: N$${this.cost.toFixed(2)})`,
    );
    for (const child of this.children) child.execute();
    console.log(`✔️  Compound job complete: ${this.name}`);
  }

  display(depth: number = 0): void {
    console.log(
      `${"  ".repeat(depth)}📁 ${this.name} [Compound — ${this.children.length} tasks, N$${this.cost.toFixed(2)}]`,
    );
    for (const child of this.children) child.display(depth + 1);
  }
}
