import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegraDeTresComponent } from './regra-de-tres.component';

describe('RegraDeTresComponent', () => {
  let component: RegraDeTresComponent;
  let fixture: ComponentFixture<RegraDeTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegraDeTresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegraDeTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
