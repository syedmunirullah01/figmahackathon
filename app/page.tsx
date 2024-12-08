
import Categories from "./components/Categories";
import CompanyLogo from "./components/companyLogo";
import FetauredProduct from "./components/featuredProduct";
import Hero from "./components/Hero";
import HotProduct from "./components/hotProducts";
import OurProduct from "./components/ourProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      {/* <FetauredProduct /> */}

      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}
