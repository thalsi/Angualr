import { Component, inject, Inject } from '@angular/core';
import { Test } from './services/test';

@Component({
  imports: [],
  selector: 'app-dependency-injection',
  styleUrl: './dependency-injection.css',
  templateUrl: './dependency-injection.html',
})
export class DependencyInjection {

    private testService = inject(Test);

  data = this.testService.getData();
}
