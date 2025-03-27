import { BrowserRouter, Routes } from "react-router";
import Home from "./routes/Home";
import { Route } from "react-router";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <div className="w-full flex items-start justify-center">
        <div className="flex w-full max-w-5xl flex-1 gap-4 flex-col px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
