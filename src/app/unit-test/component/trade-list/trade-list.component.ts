import { Component, OnInit } from '@angular/core';
import { TradeService } from '../../service/trade.service';

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.scss']
})
export class TradeListComponent implements OnInit {
  info: any;
  constructor(private srv: TradeService) {}

  ngOnInit() {
    this.srv.query().subscribe(res => {
      this.info = res;
    });
  }
}