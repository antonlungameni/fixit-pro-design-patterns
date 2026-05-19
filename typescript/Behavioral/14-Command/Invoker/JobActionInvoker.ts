import { ICommand } from "../Command/ICommand";

export class JobActionInvoker {
  private readonly history: ICommand[] = [];
  private readonly queue: ICommand[] = [];

  enqueue(command: ICommand): void {
    this.queue.push(command);
  }

  executeNext(): void {
    if (this.queue.length === 0) {
      console.log("  Queue is empty.");
      return;
    }
    const command = this.queue.shift()!;
    command.execute();
    this.history.push(command);
  }

  executeAll(): void {
    while (this.queue.length > 0) this.executeNext();
  }

  undo(): void {
    if (this.history.length === 0) {
      console.log("  Nothing to undo.");
      return;
    }
    this.history.pop()!.undo();
  }
}
