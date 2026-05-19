import { JobCard } from "../Product/JobCard";

export class JobCardBuilder {
  private _priority = "NORMAL";
  private _scheduledAt?: Date;
  private _parts: string[] = [];
  private _photoUrls: string[] = [];
  private _instructions?: string;
  private _requiresInspection = false;
  private _hasWarranty = false;

  constructor(
    private readonly _title: string,
    private readonly _category: string,
  ) {}

  withPriority(priority: string): JobCardBuilder {
    this._priority = priority;
    return this;
  }
  scheduledFor(date: Date): JobCardBuilder {
    this._scheduledAt = date;
    return this;
  }
  withParts(...parts: string[]): JobCardBuilder {
    this._parts.push(...parts);
    return this;
  }
  withPhotos(...urls: string[]): JobCardBuilder {
    this._photoUrls.push(...urls);
    return this;
  }
  withInstructions(text: string): JobCardBuilder {
    this._instructions = text;
    return this;
  }
  requiresSafetyInspection(): JobCardBuilder {
    this._requiresInspection = true;
    return this;
  }
  withWarranty(): JobCardBuilder {
    this._hasWarranty = true;
    return this;
  }

  build(): JobCard {
    if (!this._title.trim()) throw new Error("Job card must have a title.");

    return new JobCard({
      title: this._title,
      category: this._category,
      priority: this._priority,
      scheduledAt: this._scheduledAt,
      parts: this._parts,
      photoUrls: this._photoUrls,
      specialInstructions: this._instructions,
      requiresInspection: this._requiresInspection,
      hasWarranty: this._hasWarranty,
    });
  }
}
