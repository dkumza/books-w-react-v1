import * as types from "../Constants/actionTypes";

export default function booksReducer(state, action) {
   let prevState = state === null ? null : [...state];

   switch (action.type) {
      case types.LOAD_FROM_SERVER:
         return (prevState = action.payload.map((book, i) => ({
            ...book,
            show: true,
            row: i,
         })));
      case types.FILTER_BOOKS:
         if (action.payload === 0) {
            return prevState.map((book) => ({ ...book, show: true }));
         }
         return prevState.map((book) =>
            book.type === action.payload
               ? { ...book, show: true }
               : { ...book, show: false }
         );
      default:
   }
   return prevState;
}
