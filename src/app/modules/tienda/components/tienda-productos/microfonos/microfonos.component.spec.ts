import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrofonosComponent } from './microfonos.component';

describe('MicrofonosComponent', () => {
  let component: MicrofonosComponent;
  let fixture: ComponentFixture<MicrofonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrofonosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrofonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
