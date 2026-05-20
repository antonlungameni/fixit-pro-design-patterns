export interface IDispatchMediator {
  notify(
    sender: object,
    eventName: string,
    data?: Record<string, unknown>,
  ): void;
}
