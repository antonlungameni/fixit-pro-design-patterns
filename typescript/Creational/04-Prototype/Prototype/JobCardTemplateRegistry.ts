import { JobCard } from "../Product/JobCard";

export class JobCardTemplateRegistry {
  private templates = new Map<string, JobCard>();

  register(key: string, template: JobCard): void {
    this.templates.set(key, template);
  }

  cloneTemplate(key: string): JobCard {
    const template = this.templates.get(key);

    if (!template) throw new Error(`No template registered for key '${key}'.`);

    return template.clone();
  }
}
