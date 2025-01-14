import Nav from "../components/Nav";
import ProductDisplay from "../components/ProductDisplay";

export default function SeasonalPage() {
  return (
    <>
      <Nav />
      <ProductDisplay category={"seasonal"} />
    </>
  );
}
