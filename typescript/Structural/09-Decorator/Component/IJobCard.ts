export interface IJobCard {
  readonly jobId: string;
  readonly title: string;
  readonly category: string;
  readonly cost: number;
  readonly description: string;
  execute(): void;
}
