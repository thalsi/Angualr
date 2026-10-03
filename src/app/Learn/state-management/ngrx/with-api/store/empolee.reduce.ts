import { createReducer, on } from "@ngrx/store";
import { Employee } from "../../../rxjs-crud/model/empolee.interface";
import * as empoleeActions from "./emploee.actions";

export interface EmpoleeState{
    users:any[];
    selectedUser:Employee|null;

    loading:boolean;
    error:string|null;
}

export const initialSate:EmpoleeState={
    users:[],
    selectedUser:null,
    loading:false,
    error:null
}


export const empoleeReducer = createReducer(
    initialSate,
    

    // List
    on(empoleeActions.loadEmpolees, state=>({
        ...state,
        loading:true,
        error:null
    })),


    on(empoleeActions.loadEmpoleesSuccess, (state, {users})=>({
        ...state,
        users,
        loading:false,
    })),

    on(empoleeActions.loadEmpoleesFailure, (state, {error})=>({
        ...state,
        error,
        loading:false,
    })),

     // DETAIL
  on(empoleeActions.loadEmpolee, state => ({
    ...state,
    loading: true
  })),

  on(empoleeActions.loadEmpoleeSuccess, (state, { user }) => ({
    ...state,
    selectedUser: user,
    loading: false
  })),

  on(empoleeActions.loadEmpoleeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  

  // UPDATE
  on(empoleeActions.updateEmpolee, state => ({
    ...state,
    loading: true
  })),

  on(empoleeActions.updateEmpoleeSuccess, (state, { empolee }) => ({
    ...state,

    users: state.users.map(x =>
      x.id === empolee.id ? empolee : x
    ),

    selectedUser: empolee,

    loading: false
  })),

  on(empoleeActions.updateEmpoleeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // DELETE
  on(empoleeActions.deleteUserSuccess, (state, { id }) => ({
    ...state,

    users: state.users.filter(
      user => user.id !== id
    )
  })),

  on(empoleeActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    error
  }))
)
