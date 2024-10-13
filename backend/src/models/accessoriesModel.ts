import mongoose, { Schema } from "mongoose";


export interface IAccessories extends Document {
    title: string;
    image: string;
    price: number;
    stock: number;
  }

  const accessoriesSchema = new Schema<IAccessories>({
    title: { type: String, required: true, ref: "product"},
    image: { type: String, required: true, ref: "product"},
    price: { type: Number, required: true, ref: "product" },
    stock: { type: Number, required: true, ref: "product" ,default: 0 },
  });

  export const accessoriesModel = mongoose.model<IAccessories>("Accessories", accessoriesSchema);

  export default accessoriesModel;