import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
