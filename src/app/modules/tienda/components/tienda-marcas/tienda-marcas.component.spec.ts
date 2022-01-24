import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaMarcasComponent } from './tienda-marcas.component';

describe('TiendaMarcasComponent', () => {
  let component: TiendaMarcasComponent;
  let fixture: ComponentFixture<TiendaMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaMarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
