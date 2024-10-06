import productModel from "../models/ProductModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedIntialProducts = async () => {
    const products = [
        {title: "Wireless Headphones",image: "image.jpg",price: 10,stock: 15},
        {title: "Smartwatch",image: "https://via.placeholder.com/150",price: 199.99, stock: 8},
        {title: "Gaming Mouse",image: "https://via.placeholder.com/150",price: 49.99,stock: 25},
        {title: "4K Monitor",image: "https://via.placeholder.com/150",price: 299.99,stock: 5},
        {title: "Mechanical Keyboard",image: "https://via.placeholder.com/150",price: 129.99,stock: 12},
        {title: "Bluetooth Speaker",image: "https://via.placeholder.com/150",price: 59.99,stock: 20},
        {title: "External Hard Drive",image: "https://via.placeholder.com/150",price: 89.99,stock: 10},
        {title: "Portable Charger",image: "https://via.placeholder.com/150",price: 39.99,stock: 18},
        {title: "Laptop Stand",image: "https://via.placeholder.com/150", price: 24.99,stock: 30},
        {title: "USB-C Hub",image: "https://via.placeholder.com/150",price: 49.99,stock: 16}
    ];

    const existingProducts = await getAllProducts();
    if(existingProducts.length === 0) {
        await productModel.insertMany(products)
    }
}