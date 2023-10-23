import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { MainMenu } from "./pages/MainMenu";
import { Footer } from "./components/Footer";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
