import {
  Component,
  inject
} from '@angular/core';

import { Store } from '@ngrx/store';

import * as UserActions from '../../store/user/user.actions';

import * as UserSelectors
  from '../../store/user/user.selectors';

import { UserRequest } from '../../models/user.model';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList {

  private store = inject(Store);


  // =====================================================
  // SELECTORS
  // =====================================================

  users$ = this.store.select(
    UserSelectors.selectUsers
  );

  total$ = this.store.select(
    UserSelectors.selectTotal
  );

  page$ = this.store.select(
    UserSelectors.selectPage
  );

  limit$ = this.store.select(
    UserSelectors.selectLimit
  );

  search$ = this.store.select(
    UserSelectors.selectSearch
  );

  selectedUser$ = this.store.select(
    UserSelectors.selectSelectedUser
  );


  // loading

  listLoading$ = this.store.select(
    UserSelectors.selectListLoading
  );

  detailLoading$ = this.store.select(
    UserSelectors.selectDetailLoading
  );

  addLoading$ = this.store.select(
    UserSelectors.selectAddLoading
  );

  updateLoading$ = this.store.select(
    UserSelectors.selectUpdateLoading
  );

  deleteLoading$ = this.store.select(
    UserSelectors.selectDeleteLoading
  );


  // errors

  listError$ = this.store.select(
    UserSelectors.selectListError
  );

  detailError$ = this.store.select(
    UserSelectors.selectDetailError
  );

  addError$ = this.store.select(
    UserSelectors.selectAddError
  );

  updateError$ = this.store.select(
    UserSelectors.selectUpdateError
  );

  deleteError$ = this.store.select(
    UserSelectors.selectDeleteError
  );


  // =====================================================
  // LIST
  // =====================================================

  loadUsers(
    page = 1,
    limit = 10,
    search = ''
  ) {

    this.store.dispatch(
      UserActions.loadUsers({
        page,
        limit,
        search
      })
    );
  }


  // =====================================================
  // DETAIL
  // =====================================================

  loadUserDetail(id: number) {

    this.store.dispatch(
      UserActions.loadUserDetail({
        id
      })
    );
  }


  // =====================================================
  // ADD
  // =====================================================

  addUser() {

    const user: UserRequest = {

      name: 'John',

      address: 'Kerala',

      email: 'john@gmail.com',

      mobile: '9876543210'
    };


    this.store.dispatch(
      UserActions.addUser({
        user
      })
    );
  }


  // =====================================================
  // UPDATE
  // =====================================================

  updateUser(id: number) {

    const user: UserRequest = {

      name: 'John Updated',

      address: 'Kochi',

      email: 'john.updated@gmail.com',

      mobile: '9999999999'
    };


    this.store.dispatch(
      UserActions.updateUser({
        id,
        user
      })
    );
  }


  // =====================================================
  // DELETE
  // =====================================================

  deleteUser(id: number) {

    this.store.dispatch(
      UserActions.deleteUser({
        id
      })
    );
  }


  // =====================================================
  // SEARCH
  // =====================================================

  search(search: string) {

    this.store.dispatch(
      UserActions.loadUsers({
        page: 1,
        limit: 10,
        search
      })
    );
  }


  // =====================================================
  // PAGINATION
  // =====================================================

  changePage(page: number) {

    this.store.dispatch(
      UserActions.loadUsers({
        page,
        limit: 10,
        search: ''
      })
    );
  }
}