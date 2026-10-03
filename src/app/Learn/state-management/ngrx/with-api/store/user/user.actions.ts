import { createAction, props } from '@ngrx/store';
import { User, UserRequest } from '../../models/user.model';


// ======================================================
// LIST
// ======================================================

export const loadUsers = createAction(
  '[User] Load Users',
  props<{
    page: number;
    limit: number;
    search: string;
  }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{
    users: User[];
    total: number;
    page: number;
    limit: number;
  }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{
    error: string;
  }>()
);


// ======================================================
// DETAIL
// ======================================================

export const loadUserDetail = createAction(
  '[User] Load User Detail',
  props<{
    id: number;
  }>()
);

export const loadUserDetailSuccess = createAction(
  '[User] Load User Detail Success',
  props<{
    user: User;
  }>()
);

export const loadUserDetailFailure = createAction(
  '[User] Load User Detail Failure',
  props<{
    error: string;
  }>()
);


// ======================================================
// ADD
// ======================================================

export const addUser = createAction(
  '[User] Add User',
  props<{
    user: UserRequest;
  }>()
);

export const addUserSuccess = createAction(
  '[User] Add User Success',
  props<{
    user: User;
  }>()
);

export const addUserFailure = createAction(
  '[User] Add User Failure',
  props<{
    error: string;
  }>()
);


// ======================================================
// UPDATE
// ======================================================

export const updateUser = createAction(
  '[User] Update User',
  props<{
    id: number;
    user: UserRequest;
  }>()
);

export const updateUserSuccess = createAction(
  '[User] Update User Success',
  props<{
    user: User;
  }>()
);

export const updateUserFailure = createAction(
  '[User] Update User Failure',
  props<{
    error: string;
  }>()
);


// ======================================================
// DELETE
// ======================================================

export const deleteUser = createAction(
  '[User] Delete User',
  props<{
    id: number;
  }>()
);

export const deleteUserSuccess = createAction(
  '[User] Delete User Success',
  props<{
    id: number;
  }>()
);

export const deleteUserFailure = createAction(
  '[User] Delete User Failure',
  props<{
    error: string;
  }>()
);