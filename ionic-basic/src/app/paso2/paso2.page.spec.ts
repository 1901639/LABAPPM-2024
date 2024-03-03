import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paso2Page } from './paso2.page';

describe('Paso2Page', () => {
  let component: Paso2Page;
  let fixture: ComponentFixture<Paso2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Paso2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
