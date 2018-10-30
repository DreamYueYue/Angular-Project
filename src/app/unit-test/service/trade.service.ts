import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  info = {
    id: 1,
    name: '小米mix3',
    price: 3299
  };

  constructor() {}

  get(): Observable < any > {
    return of(this.info);
  }

  query(): Observable < any > {
    return of(this.info);
  }
}