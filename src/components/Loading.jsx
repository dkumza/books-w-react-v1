export const Loading = () => {
   return (
      <div>
         <div className="flex gap-3 justify-center">
            <span className="sr-only">Loading...</span>
            <div className="h-8 w-8 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-8 w-8 bg-lime-500 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
            <div className="h-8 w-8 bg-rose-500 rounded-full animate-bounce [animation-delay:-0.1s]"></div>
            <div className="h-8 w-8 bg-amber-500 rounded-full animate-bounce"></div>
         </div>
      </div>
   );
};
