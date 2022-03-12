const router = require("express").Router();
const authRoutes = require("./auth.routes");
// const orderRoutes = require("./orderRoutes");
const productRoutes = require("./products.routes")
const cartRoutes = require("./cart.routes")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
// router.use("/order", orderRoutes);

module.exports = router;
