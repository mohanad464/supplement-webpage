import productModel from "../models/ProductModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedIntialProducts = async () => {
  try {
    const products = [
      {
        title: "Whey Protein isolate",
        image: "https://m.media-amazon.com/images/I/71yR1nfqaCL._AC_UF894,1000_QL80_.jpg",
        price: 10,
        stock: 15,
      },
      {
        title: "Smartwatch",
        image: "https://via.placeholder.com/150",
        price: 199.99,
        stock: 8,
      },
      {
        title: "Gaming Mouse",
        image: "https://via.placeholder.com/150",
        price: 49.99,
        stock: 25,
      },
    ];

    const existingProducts = await getAllProducts();
    if (existingProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.error("cannot seed database", err);
  }
};
