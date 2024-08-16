import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedPillComponent } from './named-pill.component';

describe('NamedPillComponent', () => {
  let component: NamedPillComponent;
  let fixture: ComponentFixture<NamedPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamedPillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NamedPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
