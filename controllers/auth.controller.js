const User = require("../models/User.model");
// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// How many rounds should bcrypt run the salt (default [10 - 12 rounds])
const saltRounds = 10;
//importar mis ulis!!!
const {createJWT,clearRes} = require("../middleware/util-mid");

exports.signupProcess = (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword, ...rest } = req.body;
  if (!firstName) {
    return res
      .status(400)
      .json({ errorMessage: "You have to put a fist name" });
  }
  if (!lastName) {
    return res
      .status(400)
      .json({ errorMessage: "You have to put a last name" });
  }
  if (!email) {
    return res
      .status(400)
      .json({ errorMessage: "You have to fill an email" });
  }

  if (password.length < 8) {
    return res.status(400).json({
      errorMessage: "Your password needs 8 characters minimum",
    });
  }

  if (password != confirmPassword) {
    return res
      .status(400)
      .json({ errorMessage: "Your password doesn't match " });
  }

  User.findOne({ email }).then((found) => {
    if (found) {
      return res
        .status(400)
        .json({ errorMessage: "An account already exists with this email" });
    }

    return bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
        //create User
        return User.create({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });
      })
      .then((user) => {
        //create JSONWEbTOKEN.sign
        const [header, payload, signature] = createJWT(user._id)

        res.cookie("headload", `${header}.${payload}`, {
          maxAge: 1000 * 60 * 30,
          httpOnly: true,
          sameSite: true,
          secure:false,
        });

        res.cookie("signature", signature, {
          httpOnly: true,
          sameSite: true,
          secure:false,
        });

        const newUser = clearRes(user.toObject())
        res.status(201).json({ user: newUser });
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          return res.status(400).json({ errorMessage: error.message });
        }
        if (error.code === 11000) {
          return res.status(400).json({
            errorMessage:
              "Username need to be unique. The username you chose is already in use.",
          });
        }
        return res.status(500).json({ errorMessage: error.message });
      });
  });
};

exports.loginProcess = async (req, res, next) => {
  try {
    //destructurar
    const { email, password } = req.body;
    const user = await User.findOne({email})
    if(!user){
        return res
        .status(400)
        .json({ errorMessage: "Oye tus credenciales son erroneas " })
    }
    const match = await bcrypt.compareSync(password, user.password)
    if(match){
        const [header, payload, signature] = createJWT(user)

      res.cookie("headload", `${header}.${payload}`, {
        maxAge: 1000 * 60 * 30,
        httpOnly: true,
        sameSite: true,
        secure:false,
      });

      res.cookie("signature", signature, {
        httpOnly: true,
        sameSite: true,
        secure:false,
      });
      //borrar contraseña!!!!els
      const newUser = clearRes(user.toObject())
      res.status(200).json({ user:newUser })
    }else{
        res
        .status(400)
        .json({ errorMessage: "Oye tus credenciales son erroneas " })
    }


  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
        return res.status(400).json({ errorMessage: error.message });
      }
      if (error.code === 11000) {
        return res.status(400).json({
          errorMessage:
            "mensaje de error",
        });
      }
      return res.status(500).json({ errorMessage: error.message })
  }
};


exports.logoutProcess = (req, res,next) =>{
    res.clearCookie('headload')
    res.clearCookie("signature")
    res.status(200).json({result: "You have been logged out" })
}