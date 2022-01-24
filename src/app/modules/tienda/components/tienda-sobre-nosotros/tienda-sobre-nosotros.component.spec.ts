import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaSobreNosotrosComponent } from './tienda-sobre-nosotros.component';

describe('TiendaSobreNosotrosComponent', () => {
  let component: TiendaSobreNosotrosComponent;
  let fixture: ComponentFixture<TiendaSobreNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaSobreNosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaSobreNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
