import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaContactoComponent } from './tienda-contacto.component';

describe('TiendaContactoComponent', () => {
  let component: TiendaContactoComponent;
  let fixture: ComponentFixture<TiendaContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
