// store/user/user.effects.ts

import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import * as emploeeActions from './emploee.actions';
import { EmpoleeApi } from '../services/empolee-api';

@Injectable()
export class UserEffects {

  private actions$ = inject(Actions);
  private api = inject(EmpoleeApi);

  // LIST
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(

      ofType(emploeeActions.loadEmpolees),

      mergeMap(() =>
        this.api.getEmpolees().pipe(

          map(users =>
            emploeeActions.loadEmpoleesSuccess({ users })
          ),

          catchError(error =>
            of(
              emploeeActions.loadEmpoleesFailure({
                error: error.message
              })
            )
          )
        )
      )
    )
  );


  // DETAIL
  loadUser$ = createEffect(() =>
    this.actions$.pipe(

      ofType(emploeeActions.loadEmpolee),

      mergeMap(({ id }) =>
        this.api.getEmpolee(id).pipe(

          map(user =>
            emploeeActions.loadEmpoleeSuccess({ user })
          ),

          catchError(error =>
            of(
              emploeeActions.loadEmpoleeFailure({
                error: error.message
              })
            )
          )
        )
      )
    )
  );


  // UPDATE
  updateUser$ = createEffect(() =>
    this.actions$.pipe(

      ofType(emploeeActions.updateEmpolee),

      mergeMap(({ empolee }) =>
        this.api.updateEmpolee(empolee).pipe(

          map(updatedUser =>
            emploeeActions.updateEmpoleeSuccess({
              empolee: updatedUser
            })
          ),

          catchError(error =>
            of(
              emploeeActions.updateEmpoleeFailure({
                error: error.message
              })
            )
          )
        )
      )
    )
  );


  // DELETE
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(

      ofType(emploeeActions.deleteEmpolee),

      mergeMap(({ id }) =>
        this.api.deleteEmpolee(id).pipe(

          map(() =>
            emploeeActions.deleteUserSuccess({ id })
          ),

          catchError(error =>
            of(
              emploeeActions.deleteUserFailure({
                error: error.message
              })
            )
          )
        )
      )
    )
  );
}