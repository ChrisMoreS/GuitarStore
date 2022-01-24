import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VientoComponent } from './viento.component';

describe('VientoComponent', () => {
  let component: VientoComponent;
  let fixture: ComponentFixture<VientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
