import {Bank} from "./bank";

export class Skarbonka implements Bank {
  funds: number;


  constructor() {
    this.funds = 0;
    console.log(`Sprawdzamy czy działa funkcja foo()`);
  }

  deposit_funds(account: string, amount: number): boolean {
    this.funds += amount;
    console.log(`wpłacono ${amount}`);
    return true;
  }

  get_funds(account: string): number {
    if (account==='secret') {
      return this.funds
    } else {
      return 0;
    }
  }

  withdraw_funds(account: string, amount: number): boolean {
    return true;
  }

  get_IBAN(): string {
    return "IBAN_SKARBONKA_001";
  }

}
