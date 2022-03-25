const {
  Schema,
  model
} = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    require: [true, "you need to fill the first name"],
  },
  lastName: {
    type: String,
    require: [true, "you need to fill the last name"],
  },
  email: {
    type: String,
    require: [true, "you need to fill the email"],
    unique: true,
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
}, {
  // this second object adds extra properties: `createdAt` and `updatedAt`
  timestamps: true,
});

const User = model("User", userSchema);

module.exports = User;