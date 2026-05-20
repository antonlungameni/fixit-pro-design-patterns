export interface JobCardMementoState {
  status: string;
  assignee: string | undefined;
  notes: string | undefined;
  cost: number;
}

export class JobCardMemento {
  readonly label: string;
  readonly savedAt: Date = new Date();
  private readonly _state: JobCardMementoState;

  constructor(label: string, state: JobCardMementoState) {
    this.label = label;
    this._state = { ...state };
  }

  /** Only intended for use by JobCard */
  getState(): JobCardMementoState {
    return { ...this._state };
  }

  toString(): string {
    return `[${this.savedAt.toTimeString().slice(0, 8)}] Snapshot: '${this.label}' — Status: ${this._state.status}`;
  }
}
