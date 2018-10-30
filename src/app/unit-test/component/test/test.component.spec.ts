import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { TradeViewComponent } from '../trade-view/trade-view.component';
import { TradeService } from '../../service/trade.service';
import { DebugElement } from '@angular/core';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture < TestComponent > ;
  let el: HTMLElement;
  let dl: DebugElement;
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ TestComponent ]
  //   })
  //   .compileComponents();
  // }));
  const testTrade = {
    id: 1000,
    name: '小米8',
    price: 2699
  };
  let spy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradeViewComponent, TestComponent],
      providers: [TradeService]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    // let tradeService = new TradeService();
    fixture.detectChanges();
    el = fixture.nativeElement;
    dl = fixture.debugElement;
    // spy = spyOn(tradeService, 'get').and.returnValue(Promise.resolve(testTrade));
    spy = spyOn(component, '_close');
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should be component initialized', () => {
    component.id = 1;
    fixture.detectChanges();
    expect(el.querySelector('p').innerText).toBe('test 1');
  });

  it('should be call close', () => {
    el.querySelector('button').click();
    fixture.detectChanges();
    expect(component._close).toHaveBeenCalled();
  });
});