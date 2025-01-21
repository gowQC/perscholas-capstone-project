import Nav from "../components/Nav";
import ProductDisplay from "../components/ProductDisplay";

export default function FootwarePage(props) {
  return (
    <>
      <Nav user={props.user} />
      <ProductDisplay user={props.user} category={"footware"} />
    </>
  );
}
