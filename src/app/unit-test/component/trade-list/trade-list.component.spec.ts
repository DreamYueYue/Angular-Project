import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeListComponent } from './trade-list.component';
import { Observable, of } from 'rxjs';
import { TradeService } from '../../service/trade.service';

describe('TradeListComponent', () => {
  let component: TradeListComponent;
  let fixture: ComponentFixture < TradeListComponent > ;
  let el: any;
  const tradeData = {
    id: 2,
    name: 'Dream',
    price: 2199
  };
  const tradeServiceStub = {
    query(): Observable < any > {
      return of(tradeData);
    }
  }
  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [TradeListComponent],
        providers: [{
          provide: TradeService,
          useValue: tradeServiceStub
        }]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeListComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init', async (() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.querySelector('h1').innerText).toBe('2');
    });
  }));
});