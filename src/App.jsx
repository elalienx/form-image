// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Formulary from "./pages/Formulary";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulary" element={<Formulary />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
