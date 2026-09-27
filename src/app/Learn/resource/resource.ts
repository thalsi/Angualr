import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, resource, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-resource',
  styleUrl: './resource.css',
  templateUrl: './resource.html',
})
export class Resource implements OnInit {

  users=signal<any[]>([]);
  loading=signal(false);
  error=signal<string|null>(null);

  usersResource = resource({
  loader: () =>
    firstValueFrom(
      this.http.get<any[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
    )
});

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    console.log('ko');
    
  this.loading.set(true);

   this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe({
    next: (data: any[]) => {
      this.users.set(data);
      console.log(data);
      
      this.loading.set(false);
    },
    error: (err: { message: string | null; }) => {
      this.error.set(err.message);
      this.loading.set(false);
    }
  });
}

}
