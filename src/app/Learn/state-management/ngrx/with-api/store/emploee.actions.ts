import { createAction, props } from "@ngrx/store";
import { Employee } from "../../../rxjs-crud/model/empolee.interface";

// List
export const loadEmpolees=createAction(
    '[Emploees List] Load Empolees',
)
export const loadEmpoleesSuccess=createAction(
    '[Emploees Api] Load Empolees Success',
    props<{users: Employee[]}>()
)
export const loadEmpoleesFailure=createAction(
    '[Emploees Api] Load Empolees Failure',
    props<{error: string}>()
)

// DETAIL
export const loadEmpolee=createAction(
    '[Emploee Detial] Load Empolee',
     props<{ id: number }>()
)
export const loadEmpoleeSuccess=createAction(
    '[Emploee Api] Load Empolee Success',
    props<{user: Employee}>()
)
export const loadEmpoleeFailure=createAction(
    '[Emploee Api] Load Empolee Failure',
    props<{error: string}>()
)

// UPDATE
export const updateEmpolee = createAction(
  '[Empolee Detail] Update Empolee',
  props<{ empolee: Employee }>()
);

export const updateEmpoleeSuccess = createAction(
  '[Empolee API] Update Empolee Success',
  props<{ empolee: Employee }>()
);

export const updateEmpoleeFailure = createAction(
  '[Empolee API] Update Empolee Failure',
  props<{ error: string }>()
);

// DELETE
export const deleteEmpolee = createAction(
  '[Empolee List] Delete Empolee',
  props<{ id: number }>()
);

export const deleteUserSuccess = createAction(
  '[Empolee API] Delete Empolee Success',
  props<{ id: number }>()
);

export const deleteUserFailure = createAction(
  '[Empolee API] Delete Empolee Failure',
  props<{ error: string }>()
);