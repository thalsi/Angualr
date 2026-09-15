import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leran } from './leran';

describe('Leran', () => {
  let component: Leran;
  let fixture: ComponentFixture<Leran>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leran],
    }).compileComponents();

    fixture = TestBed.createComponent(Leran);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
