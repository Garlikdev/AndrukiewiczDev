import { Schema, model, models } from "mongoose"

const shippingSchema = new Schema({
  line1: { type: String, required: false },
  line2: { type: String, required: false },
  postCode: { type: String, required: false },
  city: { type: String, required: false },
})

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: [true, "Konto o podanym adresie już istnieje!"],
    required: [true, "Email jest wymagany!"],
  },
  // password: {
  //   type: String,
  //   required: [true, "Podaj prawidłowe hasło"],
  //   minLength: [6, "Your password must be at least 6 characters long"],
  //   select: false, //dont send back password after request
  // },
  name: {
    type: String,
    required: [false],
  },
  phoneNumber: { type: Number },
  role: {
    type: String,
    default: "user",
    enum: {
      values: ["user", "admin"],
    },
  },
  address: [shippingSchema],
})

// ENCRYPTION
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = models.User || model("User", UserSchema)

export default User
