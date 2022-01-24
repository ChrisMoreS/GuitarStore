import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaFooterComponent } from './tienda-footer.component';

describe('TiendaFooterComponent', () => {
  let component: TiendaFooterComponent;
  let fixture: ComponentFixture<TiendaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
