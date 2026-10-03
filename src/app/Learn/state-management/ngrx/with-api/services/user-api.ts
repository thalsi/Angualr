import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  User,
  UserRequest,
  UserListResponse
} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private http = inject(HttpClient);

  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  // LIST
  getUsers(
    page: number,
    limit: number,
    search: string
  ) {
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit)
      .set('search', search);

    return this.http.get<UserListResponse>(
      `${this.baseUrl}`,
      { params }
    );
  }

  // DETAIL
  getUserById(id: number) {
    return this.http.get<User>(
      `${this.baseUrl}/${id}`
    );
  }

  // ADD
  createUser(user: UserRequest) {
    return this.http.post<User>(
      `${this.baseUrl}`,
      user
    );
  }

  // UPDATE
  updateUser(id: number, user: UserRequest) {
    return this.http.put<User>(
      `${this.baseUrl}/${id}`,
      user
    );
  }

  // DELETE
  deleteUser(id: number) {
    return this.http.delete<void>(
      `${this.baseUrl}/${id}`
    );
  }
}