import { inject, Injectable, Service, signal } from '@angular/core';
import { EmployeeApiService } from './employee-api-service';
import { Employee } from '../model/empolee.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalStateService {
 private api = inject(EmployeeApiService);

  // State
  users = signal<Employee[]>([]);

  loading = signal(false);

  error = signal<string | null>(null);

  // Load users
  loadUsers() {

    this.loading.set(true);
    this.error.set(null);

    this.api.getUsers().subscribe({
      next: (users) => {
        this.users.set(users);
        this.loading.set(false);
      },

      error: () => {
        this.error.set('Failed to load users');
        this.loading.set(false);
      }
    });
  }

  // Create
  createUser(Employee: Omit<Employee, 'id'>) {

    this.api.createEmployee(Employee).subscribe({
      next: (newUser) => {

        this.users.update(users => [
          ...users,
          newUser
        ]);

      }
    });
  }

  // Update
  updateUser(Employee: Employee) {

    this.api.updateEmployee(Employee).subscribe({
      next: (updatedUser) => {

        this.users.update(users =>
          users.map(u =>
            u.id === updatedUser.id
              ? updatedUser
              : u
          )
        );

      }
    });
  }

  // Delete
  deleteUser(id: number) {

    this.api.deleteUser(id).subscribe({
      next: () => {

        this.users.update(users =>
          users.filter(u => u.id !== id)
        );

      }
    });
  }
}