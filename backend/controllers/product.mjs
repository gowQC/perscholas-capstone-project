import Product from "../models/product.mjs";

async function seed(req, res) {
  try {
    await Product.create([{}]);
    res.status(200).send("Successfully seeded product");
  } catch (error) {
    res.status(404).send(error);
  }
}
