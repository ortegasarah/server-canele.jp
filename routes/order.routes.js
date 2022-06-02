const { verifyToken } = require("../middleware/util-mid")
const router = require("express").Router();
const { getOrdersProcces, createOrderProcces, getOrderbyIdProccess } = require("../controllers/order.controller")

router.get("/", cors(), verifyToken, getOrdersProcces);

router.get("/:id", cors(), verifyToken, getOrderbyIdProccess);

router.post("/create", cors(), verifyToken,  createOrderProcces);

module.exports = router;