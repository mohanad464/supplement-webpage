import mongoose, { Schema } from "mongoose";

export interface IProduct extends Document {
  title: string;
  image: string;
  price: number;
  stock: number;
}



const productSchema = new Schema<IProduct>({
  title: { type: String, required: true, ref: "product"},
  image: { type: String, required: true, ref: "product"},
  price: { type: Number, required: true, ref: "product"},
  stock: { type: Number, required: true, ref: "product" ,default: 0 },
});



export const productModel = mongoose.model<IProduct>("product", productSchema);
 export default productModel;