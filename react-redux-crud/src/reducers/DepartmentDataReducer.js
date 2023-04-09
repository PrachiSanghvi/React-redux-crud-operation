import { ADD_DEPARTMENT_DATA, DELETE_DEPARTMENT_DATA } from "../actions";
const initialState = {
  departmentData: [
    { dId : 1, departmentName: "HR", departmentDetail: "HR" },
    { dId : 2, departmentName: "Manager", departmentDetail: "Manager" },
    { dId : 3, departmentName: "Employee", departmentDetail: "Employee" },
  ]
}

export const DepartmentList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DEPARTMENT_DATA:
      return {
        ...state,
        departmentData: [
          ...state.departmentData, {
            ...action.payload
          }
        ]
      }
    case DELETE_DEPARTMENT_DATA:
      return {
        ...state,
        departmentData : state.departmentData.filter(l => l.dId !== action.payload)
      }
    default:
      return state;
  }
}
