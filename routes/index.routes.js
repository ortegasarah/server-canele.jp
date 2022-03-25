const router = require("express").Router();
const authRoutes = require("./auth.routes");
const productRoutes = require("./products.routes")
const cartRoutes = require("./cart.routes")
const orderRoutes = require("./order.routes")

const uploadCloud = require("../helpers/cloudinary")
const { uploadProcess } = require("../controllers/upload.controllers")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/upload", uploadCloud.array('docs', 5), uploadProcess);
router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);

module.exports = router;
