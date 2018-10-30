import { Injectable } from '@angular/core';
import { ValueServiceService } from './value-service.service';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private valueService: ValueServiceService) {}

  getValue() {
    return this.valueService.getValue();
  }
}