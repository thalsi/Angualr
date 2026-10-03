// store/user/user.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmpoleeState } from './empolee.reduce';

export const selectUserState =
  createFeatureSelector<EmpoleeState>('users');

export const selectUsers = createSelector(
  selectUserState,
  state => state.users
);

export const selectSelectedUser = createSelector(
  selectUserState,
  state => state.selectedUser
);

export const selectLoading = createSelector(
  selectUserState,
  state => state.loading
);

export const selectError = createSelector(
  selectUserState,
  state => state.error
);