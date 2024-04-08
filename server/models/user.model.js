const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
    deletedAt : {
      type : Date,
      default : null,
    }
  },
  { timestamps: true }
)


userSchema.pre("save", async function (next) {
  console.log(this)
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})


userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}

// userSchema.methods.generateAccessToken = function () {
// return jwt.sign(
//   {
//     _id: this._id,
//     email: this.email,
//   },
//   process.env.ACCESS_TOKEN_SECRET,
//   {
//     expiresIn: "15m",
//   }
// )
// }

// userSchema.methods.generateRefreshToken = function (data) {
//   return jwt.sign(
//     {
//       _id: data._id,
//     },
//     process.env.REFRESH_TOKEN_SECRET,
//     {
//       expiresIn: "15d",
//     }
//   )
// }

const User = mongoose.model("User", userSchema)
module.exports = User
