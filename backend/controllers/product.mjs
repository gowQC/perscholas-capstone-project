import Product from "../models/product.mjs";

async function seed(req, res) {
  try {
    // commented out for production build
    //   await Product.create([
    //     {
    //       name: "",
    //       description: "",
    //       category: "seasonal",
    //       XSQuantity: 10,
    //       SQuantity: 3,
    //       MQuantity: 3,
    //       LQuantity: 2,
    //       XLQuantity: 5,
    //       XXLQuantity: 7,
    //       price: 99.99,
    //       stock: 30,
    //       imageUrl: "",
    //       promoted: false,
    //     },
    //     {
    //       name: "",
    //       description: "",
    //       category: "seasonal",
    //       XSQuantity: 10,
    //       SQuantity: 3,
    //       MQuantity: 3,
    //       LQuantity: 2,
    //       XLQuantity: 5,
    //       XXLQuantity: 7,
    //       price: 99.99,
    //       stock: 30,
    //       imageUrl: "",
    //       promoted: false,
    //     },
    //     {
    //       name: "",
    //       description: "",
    //       category: "seasonal",
    //       XSQuantity: 10,
    //       SQuantity: 3,
    //       MQuantity: 3,
    //       LQuantity: 2,
    //       XLQuantity: 5,
    //       XXLQuantity: 7,
    //       price: 99.99,
    //       stock: 30,
    //       imageUrl: "",
    //       promoted: false,
    //     },
    //     {
    //       name: "",
    //       description: "",
    //       category: "seasonal",
    //       XSQuantity: 10,
    //       SQuantity: 3,
    //       MQuantity: 3,
    //       LQuantity: 2,
    //       XLQuantity: 5,
    //       XXLQuantity: 7,
    //       price: 99.99,
    //       stock: 30,
    //       imageUrl: "",
    //       promoted: false,
    //     },
    //     {
    //       name: "",
    //       description: "",
    //       category: "seasonal",
    //       XSQuantity: 10,
    //       SQuantity: 3,
    //       MQuantity: 3,
    //       LQuantity: 2,
    //       XLQuantity: 5,
    //       XXLQuantity: 7,
    //       price: 99.99,
    //       stock: 30,
    //       imageUrl: "",
    //       promoted: false,
    //     },
    //     {
    //       name: "",
    //       description: "",
    //       category: "seasonal",
    //       XSQuantity: 10,
    //       SQuantity: 3,
    //       MQuantity: 3,
    //       LQuantity: 2,
    //       XLQuantity: 5,
    //       XXLQuantity: 7,
    //       price: 99.99,
    //       stock: 30,
    //       imageUrl: "",
    //       promoted: false,
    //     },
    //   ]);
    res.status(200).send("Seeding unavailable.");
  } catch (error) {
    res.status(404).send(error);
  }
}

const getProducts = async (req, res) => {
  try {
    const foundProducts = await Product.find({});
    res.status(200).json(foundProducts);
  } catch (error) {
    res.status(400).send(error);
  }
};

const editProduct = async (req, res) => {
  try {
    const editedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(editedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default { seed, getProducts, editProduct };
