const router = require("express").Router()
const { createProcess, listProcess, detailProcess} = require("../controllers/product.controller")
//uplorad middlewares in this route

// const {checkRole,verifyToken} = require("../middleware/util-mid")
const {verifyToken} = require("../middleware/util-mid")
//for ADMIN
//create products
// router.post("/create",verifyToken,checkRole(["STAFF","ADMIN"]) ,createProcess);
router.post("/create" ,createProcess);

//to get all the products
router.get("/", listProcess)

//get details of one product
router.get("/:id", detailProcess)

module.exports = router;