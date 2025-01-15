import Nav from "../components/Nav";
import ProductDisplay from "../components/ProductDisplay";

export default function PantsPage(props) {
  return (
    <>
      <Nav user={props.user} />
      <ProductDisplay category={"pants"} />
    </>
  );
}
