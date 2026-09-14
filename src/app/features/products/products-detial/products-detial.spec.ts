import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsDetial } from './products-detial';

describe('ProductsDetial', () => {
  let component: ProductsDetial;
  let fixture: ComponentFixture<ProductsDetial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsDetial],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsDetial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
