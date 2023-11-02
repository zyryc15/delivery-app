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
import { DeleteCategory } from "./pages/admin/DeleteCategory";
import { Tags } from "./pages/admin/Tags";
import { CreateTags } from "./pages/admin/CreateTags";
import { EditTags } from "./pages/admin/EditTags";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/stores" element={<StorePage />} />
        <Route path="/store-profile" element={<StoreProfile />} />
        <Route path="/product-details" element={<ProductDetails />} />

        <Route path="/category/create" element={<CreateCategory />} />
        <Route path="/categories/edit/:id" element={<EditCategory />} />
        <Route path="/categories/delete/:id" element={<DeleteCategory />} />
        <Route path="/categories" element={<Categories />} />

        <Route path="/tags" element={<Tags />} />
        <Route path="/tag/create" element={<CreateTags />} />
        <Route path="/tags/edit/:id" element={<EditTags />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
