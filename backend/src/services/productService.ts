import accessoriesModel from "../models/accessoriesModel";
import ProductModel, { productModel } from "../models/ProductModel";
import VitaminsModel from "../models/VitaminModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const getAllAccessories = async () => {
  return await accessoriesModel.find();
};

export const getAllVitamins = async () => {
  return await VitaminsModel.find();
};

export const seedIntialVitamins = async () => {
  try {
    const Vitamins = [
      {
        title: "LIMITLESS MAN MAX",
        image:
          "https://ifit-eg.com/wp-content/uploads/2024/05/LIMITLESS-MAN-MAX-100-TAB.png",
        price: 270,
        stock: 10,
      },
      {
        title: "LIMITLESS WOMAN MAX",
        image:
          "https://ifit-eg.com/wp-content/uploads/2024/05/Limitless-Woman-Max-1.png",
        price: 245,
        stock: 8,
      },
      {
        title: "LIMITLESS OMEGA-3 FISH OIL",
        image: "https://ifit-eg.com/wp-content/uploads/2024/05/Omega-1.png",
        price: 220,
        stock: 25,
      },
      {
        title: "Centrum Silver",
        image: "https://ifit-eg.com/wp-content/uploads/2024/06/CENTRUM-SILVER-30-1.jpg",
        price: 315,
        stock: 25,
      },
    ];
    const existingVitamins = await getAllVitamins();
    if (existingVitamins.length === 0) {
      await VitaminsModel.insertMany(Vitamins);
    }
  } catch (err) {
    console.error("cannot seed database", err);
  }
};

export const seedIntialAccessories = async () => {
  try {
    const accessories = [
      {
        title: "Whey Protein isolate",
        image:
          "https://m.media-amazon.com/images/I/71yR1nfqaCL._AC_UF894,1000_QL80_.jpg",
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
        image:
          "https://ifit-eg.com/wp-content/uploads/2023/09/Dymatize-fruity-pebbles-3lbs.png",
        price: 3465,
        stock: 25,
      },
    ];
    const existingAccessories = await getAllAccessories();
    if (existingAccessories.length === 0) {
      await accessoriesModel.insertMany(accessories);
    }
  } catch (err) {
    console.error("cannot seed database", err);
  }
};

export const seedIntialProducts = async () => {
  try {
    const products = [
      {
        title: "Whey Protein isolate",
        image:
          "https://m.media-amazon.com/images/I/71yR1nfqaCL._AC_UF894,1000_QL80_.jpg",
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
        image:
          "https://ifit-eg.com/wp-content/uploads/2023/09/Dymatize-fruity-pebbles-3lbs.png",
        price: 3465,
        stock: 25,
      },
      {
        title: "REDREX CREATINE HCL",
        image:
          "https://ifit-eg.com/wp-content/uploads/2024/05/Creatine-HCL_ec73dbad-3448-4f5d-8359-8ded531578a1.jpg",
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
        image:
          "https://ifit-eg.com/wp-content/uploads/2023/07/bcaa-fruit-punch-2.png",
        price: 750,
        stock: 8,
      },
    ];

    const existingProducts = await getAllProducts();
    if (existingProducts.length === 0) {
      await ProductModel.insertMany(products);
    }
  } catch (err) {
    console.error("cannot seed database", err);
  }
};
