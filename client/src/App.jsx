import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/client/Home";
import { Navbar } from "./components/Navbar";
import { MainMenu } from "./pages/client/MainMenu";
import { Footer } from "./components/Footer";
import { ProductDetails } from "./components/ProductDetails";
import { StorePage } from "./pages/client/StorePage";
import { StoreProfile } from "./pages/client/StoreProfile";
import { Category } from "./pages/admin/Category";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/categories/create" element={<Category />} />
        <Route path="/stores" element={<StorePage />} />
        <Route path="/store-profile" element={<StoreProfile />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
