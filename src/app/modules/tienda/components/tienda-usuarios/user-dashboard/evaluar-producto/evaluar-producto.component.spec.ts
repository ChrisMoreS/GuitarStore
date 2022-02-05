import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarProductoComponent } from './evaluar-producto.component';

describe('EvaluarProductoComponent', () => {
  let component: EvaluarProductoComponent;
  let fixture: ComponentFixture<EvaluarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
