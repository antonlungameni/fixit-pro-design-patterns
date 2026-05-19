const shortId = () => Math.random().toString(36).slice(2, 10);

export class JobCard {
  readonly jobId: string = shortId();
  readonly title: string;
  readonly category: string;
  status: string = "Active";

  constructor(config: { title: string; category: string }) {
    this.title = config.title;
    this.category = config.category;
  }
}
