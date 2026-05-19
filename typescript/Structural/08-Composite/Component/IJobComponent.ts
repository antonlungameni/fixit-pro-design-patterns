export interface IJobComponent {
  readonly name: string;
  readonly cost: number;
  execute(): void;
  display(depth?: number): void;
}
