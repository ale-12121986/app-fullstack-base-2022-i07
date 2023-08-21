import { TestBed } from '@angular/core/testing';

import { ListaRiegosService } from './lista-riegos.service';

describe('ListaRiegosService', () => {
  let service: ListaRiegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaRiegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
