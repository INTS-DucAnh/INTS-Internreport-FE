import "./App.css";
import AppRouter from "./Components/AppRouter";
import DocLeft from "./Asset/left-gradient.png";
import DocRight from "./Asset/right-gradient.png";
import { Toaster } from "react-hot-toast";
import { ListRepotrContextProvider } from "./Context/ListRepotrContext";

function App() {
  return (
    <main className="dark text-foreground bg-background h-[100vh] w-[100vw] relative">
      <div className="w-full h-full overflow-hidden absolute z-0">
        <img
          src={DocLeft}
          alt="background blurry 1"
          className="absolute right-1/2 bottom-1/7 opacity-70 scale-75"
        />
        <img
          src={DocRight}
          alt="background blurry 2"
          className="absolute left-1/2 -top-1/3 scale-75 opacity-70"
        />
      </div>
      <div className="w-full h-full overflow-hidden absolute z-[1]">
        <ListRepotrContextProvider>
          <AppRouter />
        </ListRepotrContextProvider>
      </div>
      <div className="w-fit h-full overflow-hidden absolute z-[100]">
        <Toaster position="bottom-right" />
      </div>
    </main>
  );
}

export default App;
