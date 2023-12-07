import { createContext } from "react";

export const BooksContext = createContext();

export const BooksProvider = () => {
   return <BooksContext.Provider value={[]}>{children}</BooksContext.Provider>;
};
