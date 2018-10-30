import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { TradeViewComponent } from './trade-view.component';
import { TradeService } from '../../service/trade.service';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

describe('TradeViewComponent', () => {
  let component: TradeViewComponent;
  let fixture: ComponentFixture < TradeViewComponent > ;
  let spy: jasmine.Spy;
  let el: HTMLElement;
  let dl: DebugElement;
  const testTrade = {
    id: 1000,
    name: '小米8',
    price: 2699
  };
  // beforeEach(async (() => {
  //   TestBed.configureTestingModule({
  //       declarations: [TradeViewComponent],
  //       providers: [TradeService]
  //     })
  //     .compileComponents()
  //     .then(() => {
  //       fixture = TestBed.createComponent(TradeViewComponent);
  //       component = fixture.componentInstance;
  //       el = fixture.nativeElement;
  //     });
  // }));
  beforeEach(() => {
    const tradeService = jasmine.createSpyObj('TradeService', ['get']);
    spy = tradeService.get.and.returnValue( of (testTrade))
    TestBed.configureTestingModule({
      declarations: [TradeViewComponent],
      providers: [{
        provide: TradeService,
        useValue: tradeService
      }]
    });
    fixture = TestBed.createComponent(TradeViewComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    dl = fixture.debugElement;
  });


  // beforeEach(inject([TradeService], s => { tradeService = s }));


  // beforeEach(() => {
  //   let tradeService = dl.injector.get(TradeService);
  //   spy = spyOn(tradeService, 'get').and.returnValue(Promise.resolve(testTrade));
  // })

  // it('should create', fakeAsync(() => {
  //   // spy.and.returnValue(of())
  //   fixture.detectChanges();// onInit()
  //   tick();
  //   fixture.detectChanges();
  //   console.log(component.item);
  //   expect(component).toBeTruthy();
  //   // console.log(component.item);
  //   // expect(component).toBeTruthy();
  // }));
  it('should create', () => {
    fixture.detectChanges(); // onInit()
    console.log(component.item);
    expect(component).toBeTruthy();
  });

  it('should be component initialized (done)', (done: DoneFn) => {
    fixture.detectChanges();
    expect(spy.calls.any()).toBe(true, 'get called');
    spy.calls.mostRecent().returnValue.subscribe(res => {
      fixture.detectChanges();
      expect(el.querySelector(".name").innerHTML).toBe('name 小米8');
      expect(component.item.id).toBe(1000);
      done();
    });
  });

});