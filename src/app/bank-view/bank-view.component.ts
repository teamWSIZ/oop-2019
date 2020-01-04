import { Component, OnInit } from '@angular/core';
import {Bank} from "../_interfaces/bank";
import {SimpleBank} from "../_interfaces/simple-bank";
import {Skarbonka} from "../_interfaces/skarbonka";
import {HttpClient} from "@angular/common/http";
import {FundsResponse} from "../model/funds-response";
import {FundsChangeResponse} from "../model/funds-change-response";
import {OnlineBank} from "../_interfaces/online-bank";
import {AaService} from "../aa.service";

@Component({
  selector: 'app-bank-view',
  templateUrl: './bank-view.component.html',
  styleUrls: ['./bank-view.component.less']
})
export class BankViewComponent implements OnInit {
  bank: Bank;
  current_funds: number;
  amount: string;

  bankSimple: Bank;
  bankSkarbonka: Bank;
  onlineBank: Bank;

  constructor(private http: HttpClient, private aaService : AaService, private aa: AaService) {
    //tworzymy banki, ustalając ich początkowy stan finansowy
    this.bankSimple = new SimpleBank();
    this.bankSkarbonka = new Skarbonka();
    this.onlineBank = new OnlineBank(http);

    //ustalamy który ma być wyświetlany
    this.bank = this.bankSimple;
    this.current_funds = 0;
  }

  ngOnInit() {
    this.reload_funds();
  }

  deposit_funds() {
    this.bank.deposit_funds('...', parseInt(this.amount));
    this.reload_funds();
  }

  withdraw_funds() {
    this.bank.withdraw_funds('...', parseInt(this.amount));
  }

  reload_funds() {
    this.current_funds = this.bank.get_funds('...');
  }

  selectSB() {
    this.bank = this.bankSimple;
    this.reload_funds();
  }

  selectSK() {
    this.bank = this.bankSkarbonka;
    this.reload_funds();
  }

  getOnlineFunds() {
    let url = 'http://10.10.0.21:5001/funds/get';
    this.http.get<FundsResponse>(url).subscribe(res=>{
      this.current_funds = res.funds;
    })
  }

  addOnlineFunds(amount: number) {
    //przesunąć do implementacji OnlineBank
    let url = 'http://10.10.0.21:5001/funds/add?amount=' + amount;
    // let url = 'http://10.10.0.21:5001/funds/draw?amount=' + amount;  //do wyciągania funduszy
    this.http.get<FundsChangeResponse>(url).subscribe(changeResponse => {
      console.log(`Funds changed OK`);
    });
  }


  selectOnline() {
    this.bank = this.onlineBank;
    this.reload_funds();
  }
}
