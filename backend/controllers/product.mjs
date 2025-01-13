import Product from "../models/product.mjs";

async function seed(req, res) {
  try {
    await Product.create([
      {
        name: "Plain White T-Shirt Bundle",
        description:
          "Classic T-shirts that'll look good on anyone. You can't go wrong with these.",
        category: "shirts",
        XSQuantity: 2,
        SQuantity: 4,
        MQuantity: 15,
        LQuantity: 3,
        XLQuantity: 1,
        XXLQuantity: 0,
        price: 14.99,
        stock: 25,
        imageUrl:
          "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg",
        promoted: false,
      },
      {
        name: "Plaid Dress Shirt",
        description:
          "For those that want a casual, yet professional look - with no expense for comfort.",
        category: "shirts",
        XSQuantity: 5,
        SQuantity: 6,
        MQuantity: 15,
        LQuantity: 3,
        XLQuantity: 3,
        XXLQuantity: 5,
        price: 21.99,
        stock: 37,
        imageUrl:
          "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        promoted: false,
      },
      {
        name: "White Dress Shirt",
        description:
          "Nail that interview first try with this classic and casual look.",
        category: "shirts",
        XSQuantity: 4,
        SQuantity: 8,
        MQuantity: 15,
        LQuantity: 6,
        XLQuantity: 2,
        XXLQuantity: 5,
        price: 17.99,
        stock: 40,
        imageUrl:
          "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        promoted: false,
      },
      {
        name: "Yellow Spring Shirt",
        description:
          "To feel your best during the Spring, you have to dress the best for Spring.",
        category: "shirts",
        XSQuantity: 1,
        SQuantity: 2,
        MQuantity: 5,
        LQuantity: 0,
        XLQuantity: 0,
        XXLQuantity: 1,
        price: 14.99,
        stock: 9,
        imageUrl:
          "https://images.pexels.com/photos/3775119/pexels-photo-3775119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        promoted: false,
      },
      {
        name: "Mona Lisa Shirt",
        description: "The Mona Lisa isn't the only piece of art around here...",
        category: "shirts",
        XSQuantity: 7,
        SQuantity: 2,
        MQuantity: 9,
        LQuantity: 3,
        XLQuantity: 2,
        XXLQuantity: 7,
        price: 14.99,
        stock: 30,
        imageUrl:
          "https://images.pexels.com/photos/3586020/pexels-photo-3586020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        promoted: false,
      },
      {
        name: "Coca-Cola Shirt",
        description: `Much like how "Together Tastes Better," we also feel that "Together Looks Better."`,
        category: "shirts",
        XSQuantity: 0,
        SQuantity: 0,
        MQuantity: 0,
        LQuantity: 0,
        XLQuantity: 0,
        XXLQuantity: 0,
        price: 14.99,
        stock: 0,
        imageUrl:
          "https://images.pexels.com/photos/2887775/pexels-photo-2887775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        promoted: false,
      },
    ]);
    res.status(200).send("Successfully seeded product");
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
