import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/client/Home";
import { Navbar } from "./components/Navbar";
import { MainMenu } from "./pages/client/MainMenu";
import { Footer } from "./components/Footer";
import { ProductDetails } from "./components/ProductDetails";
import { StorePage } from "./pages/client/StorePage";
import { StoreProfile } from "./pages/client/StoreProfile";
import { CreateCategory } from "./pages/admin/CreateCategory";
import { Categories } from "./pages/admin/Categories";
import { EditCategory } from "./pages/admin/EditCategory";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/category/create" element={<CreateCategory />} />
        <Route path="/category/:id" element={<EditCategory />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/stores" element={<StorePage />} />
        <Route path="/store-profile" element={<StoreProfile />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
