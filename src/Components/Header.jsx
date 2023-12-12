import { Filter } from "./Filter";

export const Header = () => {
   return (
      <div className="w-full px-5">
         <h1 className=" text-center font-medium text-transparent text-6xl bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">
            Books Outlet
         </h1>
         {/* {books && <Filter />} */}
         <Filter />
      </div>
   );
};
