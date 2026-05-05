import { JobCard } from "../Product/JobCard";
import type { IJobCardBuilder } from "../Builder Interface/IJobCardBuilder";

export class JobCardBuilder implements IJobCardBuilder {
  private _priority            = "NORMAL";
  private _scheduledAt?:       Date;
  private _parts:              string[] = [];
  private _photoUrls:          string[] = [];
  private _instructions?:      string;
  private _requiresInspection  = false;
  private _hasWarranty         = false;

  constructor(
    private readonly _title:    string,
    private readonly _category: string
  ) {}

  withPriority(priority: string):  IJobCardBuilder { this._priority = priority;           return this; }
  scheduledFor(date: Date):        IJobCardBuilder { this._scheduledAt = date;             return this; }
  withParts(...parts: string[]):   IJobCardBuilder { this._parts.push(...parts);           return this; }
  withPhotos(...urls: string[]):   IJobCardBuilder { this._photoUrls.push(...urls);        return this; }
  withInstructions(text: string):  IJobCardBuilder { this._instructions = text;            return this; }
  requiresSafetyInspection():      IJobCardBuilder { this._requiresInspection = true;      return this; }
  withWarranty():                  IJobCardBuilder { this._hasWarranty = true;             return this; }

  build(): JobCard {
    if (!this._title.trim())
      throw new Error("Job card must have a title.");

    return new JobCard({
      title:               this._title,
      category:            this._category,
      priority:            this._priority,
      scheduledAt:         this._scheduledAt,
      parts:               this._parts,
      photoUrls:           this._photoUrls,
      specialInstructions: this._instructions,
      requiresInspection:  this._requiresInspection,
      hasWarranty:         this._hasWarranty,
    });
  }
}