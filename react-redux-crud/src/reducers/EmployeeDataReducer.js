import { ADD_EMPLOYEE_DATA, EDIT_EMPLOYEE_DATA, DELETE_EMPLOYEE_DATA } from "../actions";

const initialState = {
  list: []
}

export const FetchEmployeeDetail = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_DATA:
      return {
        ...state,
        list: [
          ...state.list, {
            ...action.payload
          }
        ]
      }
    case EDIT_EMPLOYEE_DATA:
      return{
        ...state,
        list: state.list.map((emp)=> {
          if(+emp.eId === +action.payload.eId) {
            return {...action.payload}
          } else {
            return emp

          }
        })
    }
    case DELETE_EMPLOYEE_DATA:
      return {
        ...state,
        list: state.list.filter(l => l.eId !== action.payload)
      }
    default:
      return state;
  }
}
