import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaRiegosPage } from './lista-riegos.page';

describe('ListaRiegosPage', () => {
  let component: ListaRiegosPage;
  let fixture: ComponentFixture<ListaRiegosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaRiegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
