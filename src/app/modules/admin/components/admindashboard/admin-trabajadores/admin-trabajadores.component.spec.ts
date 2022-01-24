import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrabajadoresComponent } from './admin-trabajadores.component';

describe('AdminTrabajadoresComponent', () => {
  let component: AdminTrabajadoresComponent;
  let fixture: ComponentFixture<AdminTrabajadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTrabajadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
