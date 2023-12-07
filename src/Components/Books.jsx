import { useContext } from "react";
import { BooksContext } from "./BooksContext";
import { Book } from "./Book";

export const Books = () => {
   const { books } = useContext(BooksContext);

   return (
      <div className="flex flex-wrap gap-4 justify-center items-center">
         {console.log(books)}
         {books.map((book) => (
            <Book key={book.id} book={book} />
         ))}
      </div>
   );
};
