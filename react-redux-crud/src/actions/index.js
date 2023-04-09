export const ADD_EMPLOYEE_DATA = 'ADD_EMPLOYEE_DATA';
export const EDIT_EMPLOYEE_DATA = 'EDIT_EMPLOYEE_DATA';
export const DELETE_EMPLOYEE_DATA = 'DELETE_EMPLOYEE_DATA'

// Employee actions
export const addEmployeeData = (payload) => ({
  type: ADD_EMPLOYEE_DATA, payload
})

export const editEmployeeData = (payload) => ({
  type: EDIT_EMPLOYEE_DATA, payload
})

export const deleteEmployeeData = (payload) => ({
  type: DELETE_EMPLOYEE_DATA, payload
})

// Department actions

export const ADD_DEPARTMENT_DATA = 'ADD_DEPARTMENT_DATA';
export const DELETE_DEPARTMENT_DATA = 'DELETE_DEPARTMENT_DATA';

export const addDepartmentData = (payload) => ({
  type: ADD_DEPARTMENT_DATA, payload
})

export const deleteDepartmentData = (payload) => ({
  type: DELETE_DEPARTMENT_DATA, payload
})

