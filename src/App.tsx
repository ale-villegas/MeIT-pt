import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Wishlist from "./components/Wishlist/Wishlist";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;
