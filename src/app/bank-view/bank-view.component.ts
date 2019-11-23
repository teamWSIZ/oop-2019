import { Component, OnInit } from '@angular/core';
import {Bank} from "../_interfaces/bank";
import {SimpleBank} from "../_interfaces/simple-bank";

@Component({
  selector: 'app-bank-view',
  templateUrl: './bank-view.component.html',
  styleUrls: ['./bank-view.component.less']
})
export class BankViewComponent implements OnInit {
  bank: Bank;
  current_funds: number;
  amount: string;

  constructor() {
    this.bank = new SimpleBank(); //podczepiamy konkretny bank
    this.current_funds = 0;
  }

  ngOnInit() {
  }

  deposit_funds() {
    this.bank.deposit_funds('...', parseInt(this.amount));
  }

  withdraw_funds() {
    this.bank.withdraw_funds('...', parseInt(this.amount));
  }

  reload_funds() {
    this.current_funds = this.bank.get_funds('...');
  }
}
