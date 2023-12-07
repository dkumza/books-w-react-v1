/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import booksReducer from "../Reducers/booksReducer";
import axios from "axios";
import { loadFromServer } from "../Actions/booksAction";

export const BooksContext = createContext();

const BOOKS_URL = "https://in3.dev/knygos/";
const BOOKS_TYPES_URL = "https://in3.dev/knygos/types/";

export const BooksProvider = ({ children }) => {
   const [books, dispatchBooks] = useReducer(booksReducer, null);

   // fetch data from URL
   useEffect(() => {
      axios
         .get(BOOKS_URL)
         .then((res) => dispatchBooks(loadFromServer(res.data)))
         .catch((err) => console.log(err));
   }, []);

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
