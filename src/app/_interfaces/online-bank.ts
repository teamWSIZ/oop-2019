import {Bank} from "./bank";
import {HttpClient} from "@angular/common/http";
import {interval, Subscription} from "rxjs";
import {FundsResponse} from "../model/funds-response";
import {FundsChangeResponse} from "../model/funds-change-response";

export class OnlineBank implements Bank {
  last_funds_state : number; //poziom funduszy po ostatniej aktualizacji
  http : HttpClient;
  w : Subscription;

  constructor(http : HttpClient) {
    this.last_funds_state = 0;
    this.http = http;
    this.start_updates();
  }

  private start_updates() {
    this.w = interval(5000).subscribe(() => {
      console.log('updating..');
      this.get_funds('');
    });
  }

  deposit_funds(account: string, amount: number): boolean {
    //tu wrzucić kod do dodawania pieniędzy na konto online
    return false;
  }

  get_IBAN(): string {
    return "";
  }

  get_funds(account: string): number {
    let url = 'http://10.10.0.21:5001/funds/get';
    this.http.get<FundsResponse>(url).subscribe(res=>{
      this.last_funds_state = res.funds;
    });
    console.log(`done`);
    return this.last_funds_state;
  }

  withdraw_funds(account: string, amount: number): boolean {
    //przesunąć do implementacji OnlineBank
    let url = 'http://10.10.0.21:5001/funds/draw?amount=' + amount;
    this.http.get<FundsChangeResponse>(url).subscribe(changeResponse => {
      console.log(`Funds changed OK`);
      this.get_funds('');
    });
    return true;
  }



}
