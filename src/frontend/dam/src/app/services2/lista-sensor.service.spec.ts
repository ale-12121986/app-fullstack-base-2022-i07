import { TestBed } from '@angular/core/testing';

import { ListaSensorService } from './lista-sensor.service';

describe('ListaSensorService', () => {
  let service: ListaSensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaSensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
