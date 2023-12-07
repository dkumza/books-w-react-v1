import "./App.scss";
import { BooksProvider } from "./components/BooksContext";

function App() {
   return (
      <BooksProvider>
         <div className="app">
            <div className="bin"></div>
         </div>
      </BooksProvider>
   );
}

export default App;
