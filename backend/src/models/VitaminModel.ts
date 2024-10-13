import mongoose, { Schema } from "mongoose";


export interface IVitamins extends Document {
    title: string;
    image: string;
    price: number;
    stock: number;
  }

  const accessoriesSchema = new Schema<IVitamins>({
    title: { type: String, required: true, ref: "product"},
    image: { type: String, required: true, ref: "product"},
    price: { type: Number, required: true, ref: "product" },
    stock: { type: Number, required: true, ref: "product" ,default: 0 },
  });

  export const VitaminsModel = mongoose.model<IVitamins>("Vitamins", accessoriesSchema);

  export default VitaminsModel;