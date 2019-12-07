import {Bank} from "./bank";
import {HttpClient} from "@angular/common/http";

export class OnlineBank implements Bank {


  constructor(http : HttpClient) {

  }

  deposit_funds(account: string, amount: number): boolean {
    return false;
  }

  get_IBAN(): string {
    return "";
  }

  get_funds(account: string): number {
    return 0;
  }

  withdraw_funds(account: string, amount: number): boolean {
    return false;
  }



}
