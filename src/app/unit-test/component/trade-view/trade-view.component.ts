import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';   fuck not this module!!!!!
import { TradeService } from '../../service/trade.service';

@Component({
  selector: 'app-trade-view',
  template: `
    <p>trade {{id}}</p>
    <p class="name">name {{item.name}}</p>
    <p>price {{item.price}}</p>
    <button (click)="_close()">Close</button>
  `,
  styles: []
})
export class TradeViewComponent implements OnInit {
  @Input() id: number;
  @Output() close = new EventEmitter();

  constructor(private srv: TradeService) {}

  ngOnInit() {
    this.get();
  }
  item: any;
  get() {
    this.srv.get().subscribe(res => {
      this.item = res;
    });
  }

  _close() {
    this.close.emit('ok!');
  }

  getService(): TradeService {
    return this.srv;
  }
}