import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleAreaComponent } from './circle-area.component';

describe('CircleAreaComponent', () => {
  let component: CircleAreaComponent;
  let fixture: ComponentFixture<CircleAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
