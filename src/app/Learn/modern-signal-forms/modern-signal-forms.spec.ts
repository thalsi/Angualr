import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModernSignalForms } from './modern-signal-forms';

describe('ModernSignalForms', () => {
  let component: ModernSignalForms;
  let fixture: ComponentFixture<ModernSignalForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernSignalForms],
    }).compileComponents();

    fixture = TestBed.createComponent(ModernSignalForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
