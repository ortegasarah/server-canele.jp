const router = require("express").Router();
const { getUserLogged } = require("../controllers/user.controller")
const { verifyToken } = require("../middleware/util-mid")

router.get("/getUser", verifyToken, getUserLogged)

module.exports = router;