/* eslint-disable react/prop-types */
export const Book = ({ book }) => {
   return (
      <div className="book">
         <div className="price w-full text-right font-medium text-gray-700">
            {book.price} EUR
         </div>
         <div>
            <img
               className="rounded-xl h-full w-full"
               src={book.img}
               alt={book.title}
            />
         </div>
         <div className="title-wrap flex flex-col text-left w-full gap-2 h-fit justify-end capitalize">
            <div className="title text-xl truncate">
               {book.title.toLowerCase()}
            </div>
            <div className="title">by {book.author}</div>
         </div>

         <div className=""></div>
      </div>
   );
};
