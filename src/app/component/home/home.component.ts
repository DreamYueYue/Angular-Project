import { Component, OnInit } from '@angular/core';
import { TradeService } from 'src/app/unit-test/service/trade.service';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tradeService: TradeService) {}

  ngOnInit() {
    this.get();
  }

  open() {

  }
  item: any;
  get() {
    this.tradeService.get().subscribe(res => {
      this.item = res;
    });
  }
}