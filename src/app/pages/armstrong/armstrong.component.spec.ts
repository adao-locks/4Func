import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmstrongComponent } from './armstrong.component';

describe('ArmstrongComponent', () => {
  let component: ArmstrongComponent;
  let fixture: ComponentFixture<ArmstrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmstrongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmstrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
