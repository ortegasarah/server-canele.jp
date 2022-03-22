const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      require: [true, "you need to fill the email"],
      unique:true,
    },

    password: {
      type: String,
      require: [true, "you need to fill the password"],
    },
    google: {
      type: Boolean,
      default: false
    },
    idGoogle: {
        type: String,
        default: ''
    },
    active: {
        type: Boolean,
        default: true
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
