import { IDispatchMediator } from "../Mediator/IDispatchMediator";

export abstract class Colleague {
  constructor(
    protected readonly mediator: IDispatchMediator,
    readonly name: string,
  ) {}
}
