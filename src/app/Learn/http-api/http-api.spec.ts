import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpApi } from './http-api';

describe('HttpApi', () => {
  let component: HttpApi;
  let fixture: ComponentFixture<HttpApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpApi],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
