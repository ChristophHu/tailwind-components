import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialFloatingMenuComponent } from './radial-floating-menu.component';

describe('RadialFloatingMenuComponent', () => {
  let component: RadialFloatingMenuComponent;
  let fixture: ComponentFixture<RadialFloatingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadialFloatingMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadialFloatingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
