import { TestBed } from '@angular/core/testing';

import { MasterServiceService } from './master-service.service';
import { ValueServiceService } from './value-service.service';

describe('MasterServiceService', () => {
  // beforeEach(() => TestBed.configureTestingModule({}));
  let masterService: MasterServiceService;
  it("#get value by master service", () => {
    masterService = new MasterServiceService(new ValueServiceService());
    expect(masterService.getValue()).toBe("呵呵");
  });
});