import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaUsuariosComponent } from './tienda-usuarios.component';

describe('TiendaUsuariosComponent', () => {
  let component: TiendaUsuariosComponent;
  let fixture: ComponentFixture<TiendaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
