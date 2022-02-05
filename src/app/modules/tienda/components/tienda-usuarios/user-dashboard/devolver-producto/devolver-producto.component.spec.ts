import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolverProductoComponent } from './devolver-producto.component';

describe('DevolverProductoComponent', () => {
  let component: DevolverProductoComponent;
  let fixture: ComponentFixture<DevolverProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolverProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolverProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
