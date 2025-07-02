import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaTarjetaComponent } from './noticia-tarjeta.component';

describe('NoticiaTarjetaComponent', () => {
  let component: NoticiaTarjetaComponent;
  let fixture: ComponentFixture<NoticiaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
