export interface Bank {

  get_funds(account: string): number;

  deposit_funds(account: string, amount: number): boolean;

  withdraw_funds(account: string, amount: number): boolean;

}
