import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTemplateControlFlow } from './new-template-control-flow';

describe('NewTemplateControlFlow', () => {
  let component: NewTemplateControlFlow;
  let fixture: ComponentFixture<NewTemplateControlFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTemplateControlFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(NewTemplateControlFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
