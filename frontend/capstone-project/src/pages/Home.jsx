import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />

      <div className="backgroundImageWinter">
        <div>The Hottest Clothes To Keep You Warm</div>
      </div>

      <div className="featuredItems">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </>
  );
}
