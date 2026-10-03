import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap, tap } from 'rxjs';

import * as UserActions from './user.actions';

import { UserApiService } from '../../services/user-api';


@Injectable()
export class UserEffects {

  private actions$ = inject(Actions);
  private userApi = inject(UserApiService);


  // =====================================================
  // LIST
  // =====================================================

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(

      ofType(UserActions.loadUsers),

      switchMap(({ page, limit, search }) =>

        this.userApi.getUsers(
          page,
          limit,
          search
        ).pipe(

          map(response =>
            UserActions.loadUsersSuccess({
              users: response.data,
              total: response.total,
              page: response.page,
              limit: response.limit
            })
          ),

          catchError(error =>
            of(
              UserActions.loadUsersFailure({
                error: this.getErrorMessage(error)
              })
            )
          )
        )
      )
    )
  );


  // =====================================================
  // DETAIL
  // =====================================================

  loadUserDetail$ = createEffect(() =>
    this.actions$.pipe(

      ofType(UserActions.loadUserDetail),

      switchMap(({ id }) =>

        this.userApi.getUserById(id).pipe(

          map(user =>
            UserActions.loadUserDetailSuccess({
              user
            })
          ),

          catchError(error =>
            of(
              UserActions.loadUserDetailFailure({
                error: this.getErrorMessage(error)
              })
            )
          )
        )
      )
    )
  );


  // =====================================================
  // ADD
  // =====================================================

  addUser$ = createEffect(() =>
    this.actions$.pipe(

      ofType(UserActions.addUser),

      switchMap(({ user }) =>

        this.userApi.createUser(user).pipe(

          map(createdUser =>
            UserActions.addUserSuccess({
              user: createdUser
            })
          ),

          catchError(error =>
            of(
              UserActions.addUserFailure({
                error: this.getErrorMessage(error)
              })
            )
          )
        )
      )
    )
  );


  // =====================================================
  // UPDATE
  // =====================================================

  updateUser$ = createEffect(() =>
    this.actions$.pipe(

      ofType(UserActions.updateUser),

      switchMap(({ id, user }) =>

        this.userApi.updateUser(id, user).pipe(

          map(updatedUser =>
            UserActions.updateUserSuccess({
              user: updatedUser
            })
          ),

          catchError(error =>
            of(
              UserActions.updateUserFailure({
                error: this.getErrorMessage(error)
              })
            )
          )
        )
      )
    )
  );


  // =====================================================
  // DELETE
  // =====================================================

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(

      ofType(UserActions.deleteUser),

      switchMap(({ id }) =>

        this.userApi.deleteUser(id).pipe(

          map(() =>
            UserActions.deleteUserSuccess({
              id
            })
          ),

          catchError(error =>
            of(
              UserActions.deleteUserFailure({
                error: this.getErrorMessage(error)
              })
            )
          )
        )
      )
    )
  );


  // =====================================================
  // DELETE SUCCESS → RELOAD LIST
  // =====================================================

  reloadAfterDelete$ = createEffect(() =>
    this.actions$.pipe(

      ofType(UserActions.deleteUserSuccess),

      map(() =>
        UserActions.loadUsers({
          page: 1,
          limit: 10,
          search: ''
        })
      )
    )
  );


  private getErrorMessage(error: any): string {

    return (
      error?.error?.message ||
      error?.message ||
      'Something went wrong'
    );
  }
}