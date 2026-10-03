import { User } from "../../models/user.model";

export interface UserState {

  // LIST
  users: User[];
  total: number;
  page: number;
  limit: number;
  search: string;

  // DETAIL
  selectedUser: User | null;

  // LIST status
  listLoading: boolean;
  listError: string | null;

  // DETAIL status
  detailLoading: boolean;
  detailError: string | null;

  // ADD status
  addLoading: boolean;
  addError: string | null;

  // UPDATE status
  updateLoading: boolean;
  updateError: string | null;

  // DELETE status
  deleteLoading: boolean;
  deleteError: string | null;
}

export const initialState: UserState = {

  users: [],
  total: 0,
  page: 1,
  limit: 10,
  search: '',

  selectedUser: null,

  listLoading: false,
  listError: null,

  detailLoading: false,
  detailError: null,

  addLoading: false,
  addError: null,

  updateLoading: false,
  updateError: null,

  deleteLoading: false,
  deleteError: null
};