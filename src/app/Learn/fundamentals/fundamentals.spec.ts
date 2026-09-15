import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fundamentals } from './fundamentals';

describe('Fundamentals', () => {
  let component: Fundamentals;
  let fixture: ComponentFixture<Fundamentals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fundamentals],
    }).compileComponents();

    fixture = TestBed.createComponent(Fundamentals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
