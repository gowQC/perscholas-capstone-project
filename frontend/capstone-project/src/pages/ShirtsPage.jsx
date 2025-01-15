import Nav from "../components/Nav";
import ProductDisplay from "../components/ProductDisplay";

export default function ShirtsPage(props) {
  return (
    <>
      <Nav user={props.user} />
      <ProductDisplay category={"shirts"} />
    </>
  );
}
