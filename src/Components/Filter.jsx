import { useContext } from "react";
import { BooksContext } from "./BooksContext";

export const Filter = () => {
   const { types, books, filter, setFilter } = useContext(BooksContext);

   if (!types || !books) {
      return (
         <div className="py-2 flex gap-2 items-center mb-4">
            <div>Filter by:</div>
            <select
               className="px-3 py-1 border rounded-md w-48 h-18 flex items-center"
               name=""
               id=""
               defaultValue={0}
            >
               <option value={0}>Loading...</option>
            </select>
         </div>
      );
   }
   return (
      <div className="py-2 flex gap-2 items-center mb-4">
         <div>Filter by:</div>
         <select
            className="px-3 py-1 border rounded-md w-48 h-18 flex items-center"
            name=""
            id=""
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
         >
            <option className="" value={0}>
               Default
            </option>
            {types.map((type) => (
               <option className="" key={type.id} value={type.id}>
                  {type.title}
               </option>
            ))}
         </select>
      </div>
   );
};
