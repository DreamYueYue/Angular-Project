import { Component, OnInit, ViewChild } from '@angular/core';
import { TradeViewComponent } from '../trade-view/trade-view.component';

@Component({
  selector: 'app-test',
  template: `
    <p>test {{id}}</p>
    <app-trade-view [id]="id" (close)="_close()"></app-trade-view>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  @ViewChild(TradeViewComponent) comp: TradeViewComponent;
  id: number = 0;
  constructor() {}

  ngOnInit() {}

  _close(param: string) {
    console.log(param);
  }

}