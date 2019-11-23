import {Bank} from "./bank";

export class SimpleBank implements Bank {
  funds: number;

  constructor() {
    this.funds = 10;
  }

  deposit_funds(account: string, amount: number): boolean {
    this.funds += amount;
    return true;
  }

  withdraw_funds(account: string, amount: number): boolean {
    this.funds -= amount;
    return true;
  }

  get_funds(account: string): number {
    return this.funds;
  }

}
