import { Component, inject } from '@angular/core';
import { RxjsService } from '../service/rxjs-service';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-list',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class List {
   private employeeService =
    inject(RxjsService);

  employees$ =
    this.employeeService.employees$;


  ngOnInit() {

    this.employeeService.loadEmployees();

  }


  deleteEmployee(id: number) {

    this.employeeService.deleteEmployee(id);

  }
}
