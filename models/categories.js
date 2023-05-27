import { Schema, model, models } from "mongoose"

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: [true, "Produkt o danej nazwie już istnieje!"],
    required: [true, "Nazwa jest wymagana!"],
  },
  image: { type: String },
  icon: { type: String },
  shortName: { type: String },
  required: true,
  default: "kategoria",
})

const Category = models.Category || model("Category", CategorySchema)

export default Category
