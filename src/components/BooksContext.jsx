import { createContext, useReducer } from "react";
import booksReducer from "../Reducers/booksReducer";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
   const [books, dispatchBooks] = useReducer(booksReducer, null);

   return (
      <BooksContext.Provider
         value={{
            books,
            dispatchBooks,
         }}
      >
         {children}
      </BooksContext.Provider>
   );
};
