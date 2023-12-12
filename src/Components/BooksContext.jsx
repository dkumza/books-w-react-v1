/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState, useRef } from "react";
import booksReducer from "../Reducers/booksReducer";
import axios from "axios";
import { filterBooks, loadFromServer } from "../Actions/booksAction";

export const BooksContext = createContext();

const BOOKS_URL = "https://in3.dev/knygos/";
const BOOKS_TYPES_URL = "https://in3.dev/knygos/types/";

export const BooksProvider = ({ children }) => {
   const [books, dispatchBooks] = useReducer(booksReducer, null);
   const [types, setTypes] = useState(null);
   const [filter, setFilter] = useState(0);

   const filterLoaded = useRef(false);

   // fetch data from URL
   useEffect(() => {
      axios
         .get(BOOKS_URL)
         .then((res) => dispatchBooks(loadFromServer(res.data)))
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      axios
         .get(BOOKS_TYPES_URL)
         .then((res) => {
            setTypes(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      if (!filterLoaded.current) {
         filterLoaded.current = true;
         return;
      }
      dispatchBooks(filterBooks(filter));
   }, [filter]);

   return (
      <BooksContext.Provider
         value={{
            books,
            dispatchBooks,
            types,
            setTypes,
            filter,
            setFilter,
         }}
      >
         {children}
      </BooksContext.Provider>
   );
};
