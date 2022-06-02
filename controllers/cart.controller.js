const Cart = require("../models/Cart.model");

exports.findCartProcess = async (req, res, next) => {
  try {
    const { _id: _client } = req.user;
    const result = await Cart.findOne({ _client });
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ erroMessage: error });
  }
};

exports.createCartProcess = async (req, res, next) => {
  try {
    const { _id: _client } = req.user;
    const changes = { ...req.body };
    const items = Cart.find({ _client }).count();
    const action = items > 0 ? Cart.findOneAndUpdate : Cart.create;
    const args = items > 0 ? [{ _client }, changes, { new: true }] : [changes];
    //args = arguments
    const result = await action(...args);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ erroMessage: error });
  }
};

exports.deleteCartProcess = async (req, res, next) => {
  try {
    const { _id: _client } = req.user;
    await Cart.findOneAndDelete({ _client });
    res.status(200).json({ result: "Cart has been deleted" });
  } catch (error) {
    res.status(400).json({ erroMessage: error });
  }
};
