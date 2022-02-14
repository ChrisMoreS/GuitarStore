import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPantallaprincipalComponent } from './admin-pantallaprincipal.component';

describe('AdminPantallaprincipalComponent', () => {
  let component: AdminPantallaprincipalComponent;
  let fixture: ComponentFixture<AdminPantallaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPantallaprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPantallaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
