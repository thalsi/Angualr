import { createAction, props } from "@ngrx/store";
import { User } from "../model/user.model";

// ADD
export const addUser = createAction(
    '[User] Add User',
    props< {user: User} >()
);

// UPDATE
export const updateUser = createAction(
    '[User] Update User',
    props< {user: User} >()
);

// DELETE
export const deleteUser = createAction(
    '[User] Delete User',
    props< {id: number} >()
);