import { useContext } from "react";
import { BooksContext } from "./BooksContext";
import { Loading } from "./Loading";
import { Books } from "./Books";

export const Layout = () => {
   // get books from BooksContext
   const { books } = useContext(BooksContext);

   return (
      <div className="flex justify-center">
         {books ? <Books /> : <Loading />}
      </div>
   );
};
