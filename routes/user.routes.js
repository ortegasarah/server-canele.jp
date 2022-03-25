const router = require("express").Router();
const { getUserLogged,editUser } = require("../controllers/user.controller")
const { loginProcess, logoutProcess, signupProcess, getUserLogged } = require("../controllers/auth.controller")
const { verifyToken } = require("../middleware/util-mid")

router.post("/signup",signupProcess);

router.post("/login",loginProcess);

router.post("/logout",logoutProcess)

router.get("/getUser", verifyToken  ,getUserLogged)

module.exports = router;