import { TestBed } from '@angular/core/testing';

import { ValueServiceService } from './value-service.service';

describe('ValueServiceService', () => {
  let service: ValueServiceService;
  // beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    service = new ValueServiceService();
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('呵呵');
  });

  // it('#getObservableValue should return value from observable', (done: DoneFn) => {
  //   service.getFileContent().subscribe(value => {
  //     expect(value).toBe('哈哈哈哈');
  //     done();
  //   });
  // })
});