import { inject, Injectable, Service } from '@angular/core';
import { EmployeeApiService } from './employee-api-service';
import { Employee } from '../model/empolee.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  private api = inject(EmployeeApiService);

  private employeesSubject =
    new BehaviorSubject<Employee[]>([]);

  employees$ =
    this.employeesSubject.asObservable();


  loadEmployees(): void {

    this.api.getEmployees().subscribe({
      next: employees => {
        this.employeesSubject.next(employees);
      }
    });

  }


  addEmployee(employee: Employee): void {

    this.api.createEmployee(employee).subscribe({
      next: createdEmployee => {

        const current =
          this.employeesSubject.value;

        this.employeesSubject.next([
          ...current,
          createdEmployee
        ]);

      }
    });

  }


  updateEmployee(employee: Employee): void {

    this.api.updateEmployee(employee).subscribe({
      next: updatedEmployee => {

        const current =
          this.employeesSubject.value;

        const updated =
          current.map(item =>
            item.id === updatedEmployee.id
              ? updatedEmployee
              : item
          );

        this.employeesSubject.next(updated);

      }
    });

  }


  deleteEmployee(id: number): void {

    this.api.deleteEmployee(id).subscribe({
      next: () => {

        const current =
          this.employeesSubject.value;

        this.employeesSubject.next(
          current.filter(item => item.id !== id)
        );

      }
    });

  }

}