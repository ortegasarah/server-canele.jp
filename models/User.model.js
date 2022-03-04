const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: String,
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
