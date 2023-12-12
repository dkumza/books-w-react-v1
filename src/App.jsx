import "./App.scss";
import { BooksProvider } from "./Components/BooksContext";
import { Header } from "./Components/Header";
import { Layout } from "./Components/Layout";

function App() {
   return (
      <BooksProvider>
         <div className="app">
            <Header />
            <div className="bin">
               <Layout />
            </div>
         </div>
      </BooksProvider>
   );
}

export default App;
