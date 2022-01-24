import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaInicioComponent } from './tienda-inicio.component';

describe('TiendaInicioComponent', () => {
  let component: TiendaInicioComponent;
  let fixture: ComponentFixture<TiendaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
