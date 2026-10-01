import { Component, inject } from '@angular/core';
import { SignalStateService } from '../service/signal-state-service';

@Component({
  imports: [],
  selector: 'app-list-single',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class SingleList {

  userState = inject(SignalStateService);

  ngOnInit() {
    this.userState.loadUsers();
  }

  deleteUser(id: number) {
    this.userState.deleteUser(id);
  }
}

