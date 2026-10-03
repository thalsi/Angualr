import { TestBed } from '@angular/core/testing';
import { EmpoleeApi } from './empolee-api';

describe('EmpoleeApi', () => {
  let service: EmpoleeApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpoleeApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
