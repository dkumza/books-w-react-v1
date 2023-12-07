import * as types from "../Constants/actionTypes";

export default function booksReducer(state, action) {
   let prevState = state ? [...state] : null;

   switch (action.type) {
      case types.LOAD_FROM_SERVER:
         return (prevState = action.payload);
      default:
   }
   return prevState;
}
