import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Konto o podanym adresie już istnieje!"],
    required: [true, "Email jest wymagany!"],
  },
})

const User = models.User || model("User", UserSchema)

export default User
