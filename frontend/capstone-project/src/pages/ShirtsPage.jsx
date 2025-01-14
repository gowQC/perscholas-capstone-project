import Nav from "../components/Nav";
import ProductDisplay from "../components/ProductDisplay";

export default function ShirtsPage() {
  return (
    <>
      <Nav />
      <ProductDisplay category={"shirts"} />
    </>
  );
}
