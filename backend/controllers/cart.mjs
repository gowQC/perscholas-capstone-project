import Cart from "../models/cart.mjs";

async function seed(req, res) {
  try {
    await Cart.create([{}]);
    res.status(200).send("Seeding cart successful");
  } catch (error) {
    res.status(404).send(error);
  }
}
