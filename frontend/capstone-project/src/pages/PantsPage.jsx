import Nav from "../components/Nav";
import ProductDisplay from "../components/ProductDisplay";

export default function PantsPage() {
  return (
    <>
      <Nav />
      <ProductDisplay category={"pants"} />
    </>
  );
}
