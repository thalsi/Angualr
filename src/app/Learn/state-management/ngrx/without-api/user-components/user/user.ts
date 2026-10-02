import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsers } from '../../store/user.selectors';
import { addUser, deleteUser, updateUser } from '../../store/user.actions';
import { AsyncPipe } from '@angular/common';


@Component({
  imports: [AsyncPipe],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {

  private store = inject(Store);

  users$ = this.store.select(selectUsers);

  // ADD
  add() {

    const user: any = {
      id: 1,
      name: 'Ali',
      email: 'ali@gmail.com'
    };

    this.store.dispatch(
      addUser({ user })
    );
  }

  // UPDATE
  edit(user: any) {

    const updatedUser: any = {
      ...user,
      name: 'Ali Updated'
    };

    this.store.dispatch(
      updateUser({
        user: updatedUser
      })
    );
  }

  // DELETE
  delete(id: number) {

    this.store.dispatch(
      deleteUser({ id })
    );
  }
}
