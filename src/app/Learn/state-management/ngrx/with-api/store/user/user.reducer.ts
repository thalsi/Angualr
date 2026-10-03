import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { initialState } from './user.state';

export const userReducer = createReducer(

  initialState,


  // =====================================================
  // LIST
  // =====================================================

  on(UserActions.loadUsers, (state, { page, limit, search }) => ({
    ...state,

    listLoading: true,
    listError: null,

    page,
    limit,
    search
  })),

  on(
    UserActions.loadUsersSuccess,
    (state, { users, total, page, limit }) => ({
      ...state,

      users,
      total,
      page,
      limit,

      listLoading: false,
      listError: null
    })
  ),

  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,

    listLoading: false,
    listError: error
  })),


  // =====================================================
  // DETAIL
  // =====================================================

  on(UserActions.loadUserDetail, (state) => ({
    ...state,

    detailLoading: true,
    detailError: null
  })),

  on(UserActions.loadUserDetailSuccess, (state, { user }) => ({
    ...state,

    selectedUser: user,

    detailLoading: false,
    detailError: null
  })),

  on(UserActions.loadUserDetailFailure, (state, { error }) => ({
    ...state,

    detailLoading: false,
    detailError: error
  })),


  // =====================================================
  // ADD
  // =====================================================

  on(UserActions.addUser, (state) => ({
    ...state,

    addLoading: true,
    addError: null
  })),

  on(UserActions.addUserSuccess, (state, { user }) => ({
    ...state,

    users: [user, ...state.users],

    addLoading: false,
    addError: null,

    total: state.total + 1
  })),

  on(UserActions.addUserFailure, (state, { error }) => ({
    ...state,

    addLoading: false,
    addError: error
  })),


  // =====================================================
  // UPDATE
  // =====================================================

  on(UserActions.updateUser, (state) => ({
    ...state,

    updateLoading: true,
    updateError: null
  })),

  on(UserActions.updateUserSuccess, (state, { user }) => ({
    ...state,

    users: state.users.map(item =>
      item.id === user.id
        ? user
        : item
    ),

    selectedUser:
      state.selectedUser?.id === user.id
        ? user
        : state.selectedUser,

    updateLoading: false,
    updateError: null
  })),

  on(UserActions.updateUserFailure, (state, { error }) => ({
    ...state,

    updateLoading: false,
    updateError: error
  })),


  // =====================================================
  // DELETE
  // =====================================================

  on(UserActions.deleteUser, (state) => ({
    ...state,

    deleteLoading: true,
    deleteError: null
  })),

  on(UserActions.deleteUserSuccess, (state, { id }) => ({
    ...state,

    users: state.users.filter(user => user.id !== id),

    total: Math.max(0, state.total - 1),

    deleteLoading: false,
    deleteError: null
  })),

  on(UserActions.deleteUserFailure, (state, { error }) => ({
    ...state,

    deleteLoading: false,
    deleteError: error
  }))
);