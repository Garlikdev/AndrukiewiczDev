import { Schema, model, models } from "mongoose"

const ProductSchema = new Schema({
  name: {
    type: String,
    unique: [true, "Produkt o danej nazwie już istnieje!"],
    required: [true, "Nazwa jest wymagana!"],
  },
  category: {
    type: String,
  },
  stock: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
    default: "dostępny na zamówienie",
  },
  time: {
    type: Number,
    required: true,
    default: "3",
  },
  description: {
    type: String,
  },
  weight: {
    type: Number,
    default: "1",
  },
  recommended: {
    type: Boolean,
    required: true,
    default: false,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  images: [{ type: String }],
})

const Product = models.Product || model("Product", ProductSchema)

export default Product
