import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paso1Page } from './paso1.page';

describe('Paso1Page', () => {
  let component: Paso1Page;
  let fixture: ComponentFixture<Paso1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Paso1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
