import { createReducer, on } from '@ngrx/store';
import { User } from '../model/user.model';
import {
  addUser,
  updateUser,
  deleteUser
} from './user.actions';

export const initialUsers: User[]=[];

export const userReducer = createReducer(
    initialUsers,
    

    // ADD
    on(addUser, (state, { user } )=>{
        return [
            ...state,
            user
        ]
    }),

    // UPDATE
    on(updateUser, (state, { user }) => {

        return state.map(existingUser =>
        existingUser.id === user.id
            ? user
            : existingUser
        );

    }),

    // DELETE
    on(deleteUser, (state, { id }) => {

        return state.filter(user =>
        user.id !== id
        );

    })
);