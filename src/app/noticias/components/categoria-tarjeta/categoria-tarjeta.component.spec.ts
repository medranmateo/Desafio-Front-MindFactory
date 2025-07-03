import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaTarjetaComponent } from './categoria-tarjeta.component';

describe('CategoriaTarjetaComponent', () => {
  let component: CategoriaTarjetaComponent;
  let fixture: ComponentFixture<CategoriaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
