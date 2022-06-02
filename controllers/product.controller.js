const Product = require("../models/Product.model")
//set up cloudinary for product images

exports.createProcess = async (req, res, next) => {
    try {
        const product = {...req.body}
        console.log("product", product)
        const result = await Product.create(product)
        res.status(200).json({ result });
    } catch (error) {
      console.log("erro", error)
      res.status(400).json({ errorMessage: error });

    }
  };

exports.listProcess = async (req, res, next) => {
    try {
      const result = await Product.find();
      res.status(200).json({ result });
    } catch (error) {
      res.status(400).json({ errorMessage: error });
    }
  };
  
  exports.detailProcess = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Product.findById(id);
      res.status(200).json({ result });
    } catch (error) {
      res.status(400).json({ errorMessage: error });
    }
  };