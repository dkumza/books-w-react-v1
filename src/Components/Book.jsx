import { useContext } from "react";
import { BooksContext } from "./BooksContext";

/* eslint-disable react/prop-types */
export const Book = ({ book }) => {
   const { types } = useContext(BooksContext);
   return (
      <div className="book">
         <div className="w-full flex relative">
            {types && (
               <div className="book-id bg-sky-400 text-sm text-white shadow py-1 px-2 rounded absolute  -top-5 -left-6">
                  {types.find((t) => t.id === book.type)?.title}
               </div>
            )}

            <div className="price w-full text-right font-medium text-gray-700 text-xl">
               {book.price} EUR
            </div>
         </div>
         <div>
            <img
               className="rounded-xl h-full w-full"
               src={book.img}
               alt={book.title}
            />
         </div>
         <div className="title-wrap flex flex-col text-left w-full gap-1 h-fit justify-end capitalize">
            <div className="title text-xl truncate">
               {book.title.toLowerCase()}
            </div>
            <div className="title">by {book.author}</div>
         </div>

         <div className=""></div>
      </div>
   );
};
