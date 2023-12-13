import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Catagory from "./pages/catagory/Catagory";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import Card from "./pages/card/card";
import Profile from "./pages/profile/Profile";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="catagory" element={<Catagory />} />
        <Route path="products" element={<Products/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="card" element={<Card />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
