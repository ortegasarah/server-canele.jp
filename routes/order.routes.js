const router = require("express").Router();
const { getOrdersProcces, createOrderProcces, getOrderbyIdProccess } = require("../controllers/order.controller")

router.get("/", getOrdersProcces);

router.get("/:id", getOrderbyIdProccess);

router.post("/create", createOrderProcces);

module.exports = router;