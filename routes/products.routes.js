const router = require("express").Router()
const { createProcess, listProcess, detailProcess} = require("../controllers/product.controller")
//uplorad middlewares in this route



//for ADMIN
//create products
router.post("create", createProcess) 

//to get all the products
router.get("/", listProcess)

//get details of one product
router.get("/:id", productController)