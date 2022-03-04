const router = require("express").Router()
const { findCartProcess, createCartProcess, deleteCartProcess} = require("../controllers/cart.controller")

  
  //get cart
  router.get("/", findCartProcess);
  
  //create cart
  router.post("/create", createCartProcess);
  
  //delete
  router.delete("/delete", deleteCartProcess);
  
  /**
   * delete
   *  put
   *  patch
   */
  
  module.exports = router;