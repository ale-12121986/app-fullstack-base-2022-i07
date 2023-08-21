import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaSensorPage } from './lista-sensor.page';

describe('ListaSensorPage', () => {
  let component: ListaSensorPage;
  let fixture: ComponentFixture<ListaSensorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaSensorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
