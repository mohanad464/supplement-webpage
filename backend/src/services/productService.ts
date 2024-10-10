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
        price: 3600,
        stock: 15,
      },
      {
        title: "Limitless Alpha Creatine",
        image: "https://ifit-eg.com/wp-content/uploads/2023/12/creatine.png",
        price: 790,
        stock: 8,
      },
      {
        title: "Dymatize ISO 100 Protein",
        image: "https://ifit-eg.com/wp-content/uploads/2023/09/Dymatize-fruity-pebbles-3lbs.png",
        price: 3465,
        stock: 25,
      },
      {
        title: "REDREX CREATINE HCL",
        image: "https://ifit-eg.com/wp-content/uploads/2024/05/Creatine-HCL_ec73dbad-3448-4f5d-8359-8ded531578a1.jpg",
        price: 936,
        stock: 8,
      },
      {
        title: "Limitless Alpha L- Citrulline",
        image: "https://ifit-eg.com/wp-content/uploads/2024/01/eva-pharma.png",
        price: 680,
        stock: 8,
      },
      {
        title: "REDREX BCAA",
        image: "https://ifit-eg.com/wp-content/uploads/2023/07/bcaa-fruit-punch-2.png",
        price: 750,
        stock: 8,
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
