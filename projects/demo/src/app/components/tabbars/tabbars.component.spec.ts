import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbarsComponent } from './tabbars.component';

describe('TabbarsComponent', () => {
  let component: TabbarsComponent;
  let fixture: ComponentFixture<TabbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabbarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
