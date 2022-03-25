const { verifyToken } = require("../middleware/util-mid")
const router = require("express").Router();
const { getOrdersProcces, createOrderProcces, getOrderbyIdProccess } = require("../controllers/order.controller")

router.get("/", verifyToken, getOrdersProcces);

router.get("/:id", verifyToken, getOrderbyIdProccess);

router.post("/create", verifyToken,  createOrderProcces);

module.exports = router;