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
import { DeleteTags } from "./pages/admin/DeleteTags";
import { CreateStore } from "./pages/admin/CreateStore";
import { Store } from "./pages/admin/Store";
import { EditStore } from "./pages/admin/EditStore";
import { DeleteStore } from "./pages/admin/DeleteStore";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/store-profile" element={<StoreProfile />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/stores" element={<StorePage />} />

        <Route path="/storelist" element={<Store />} />
        <Route path="/stores/create" element={<CreateStore />} />
        <Route path="/stores/edit/:id" element={<EditStore />} />
        <Route path="/stores/delete/:id" element={<DeleteStore />} />

        <Route path="/category/create" element={<CreateCategory />} />
        <Route path="/categories/edit/:id" element={<EditCategory />} />
        <Route path="/categories/delete/:id" element={<DeleteCategory />} />
        <Route path="/categories" element={<Categories />} />

        <Route path="/tags" element={<Tags />} />
        <Route path="/tag/create" element={<CreateTags />} />
        <Route path="/tags/edit/:id" element={<EditTags />} />
        <Route path="/tags/delete/:id" element={<DeleteTags />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
