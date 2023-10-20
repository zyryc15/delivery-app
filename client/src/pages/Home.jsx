import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { Menu } from "../components/Menu";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Menu />
      <Footer />
    </>
  );
};
