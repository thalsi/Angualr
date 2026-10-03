import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './user.state';


export const selectUserState =
  createFeatureSelector<UserState>('user');


// =====================================================
// LIST
// =====================================================

export const selectUsers = createSelector(
  selectUserState,
  state => state.users
);

export const selectTotal = createSelector(
  selectUserState,
  state => state.total
);

export const selectPage = createSelector(
  selectUserState,
  state => state.page
);

export const selectLimit = createSelector(
  selectUserState,
  state => state.limit
);

export const selectSearch = createSelector(
  selectUserState,
  state => state.search
);


// =====================================================
// DETAIL
// =====================================================

export const selectSelectedUser = createSelector(
  selectUserState,
  state => state.selectedUser
);


// =====================================================
// LOADING
// =====================================================

export const selectListLoading = createSelector(
  selectUserState,
  state => state.listLoading
);

export const selectDetailLoading = createSelector(
  selectUserState,
  state => state.detailLoading
);

export const selectAddLoading = createSelector(
  selectUserState,
  state => state.addLoading
);

export const selectUpdateLoading = createSelector(
  selectUserState,
  state => state.updateLoading
);

export const selectDeleteLoading = createSelector(
  selectUserState,
  state => state.deleteLoading
);


// =====================================================
// ERRORS
// =====================================================

export const selectListError = createSelector(
  selectUserState,
  state => state.listError
);

export const selectDetailError = createSelector(
  selectUserState,
  state => state.detailError
);

export const selectAddError = createSelector(
  selectUserState,
  state => state.addError
);

export const selectUpdateError = createSelector(
  selectUserState,
  state => state.updateError
);

export const selectDeleteError = createSelector(
  selectUserState,
  state => state.deleteError
);