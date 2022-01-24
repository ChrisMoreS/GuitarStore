import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradicionalComponent } from './tradicional.component';

describe('TradicionalComponent', () => {
  let component: TradicionalComponent;
  let fixture: ComponentFixture<TradicionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradicionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
