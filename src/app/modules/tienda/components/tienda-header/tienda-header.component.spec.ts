import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaHeaderComponent } from './tienda-header.component';

describe('TiendaHeaderComponent', () => {
  let component: TiendaHeaderComponent;
  let fixture: ComponentFixture<TiendaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
