import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../model/user.model";

// Get complete users array
export const selectUsers =
  createFeatureSelector<User[]>('users');


// Get user by ID
export const selectUserById = (id: number) =>
  createSelector(
    selectUsers,
    users =>
      users.find(user => user.id === id)
  );