import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class EmpoleeApi {

    private http=inject(HttpClient);

    private apiUrl='https://jsonplaceholder.typicode.com';

    getEmpolees(): Observable<any>{
        return this.http.get<any>(`${this.apiUrl}/users`);
    }

    getEmpolee(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }

    updateEmpolee(user: any): Observable<any> {
        return this.http.put<any>(
        `${this.apiUrl}/${user.id}`,
        user
        );
    }

    deleteEmpolee(id: number): Observable<number> {
        return this.http.delete<number>(
        `${this.apiUrl}/${id}`
        );
    }

}
