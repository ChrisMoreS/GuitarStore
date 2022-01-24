import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BateriasComponent } from './baterias.component';

describe('BateriasComponent', () => {
  let component: BateriasComponent;
  let fixture: ComponentFixture<BateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
