const router = require("express").Router();
const { getUserLogged,editUser } = require("../controllers/user.controller")
const { loginProcess, logoutProcess, signupProcess, getUserLogged } = require("../controllers/auth.controller")
const { verifyToken } = require("../middleware/util-mid")

// router.get("/getUser", verifyToken  ,getUserLogged)
// router.post("/edit",verifyToken,editUser)
// router.post("/signup", isLoggedOut, verifyToken, );
// router.post("/login", isLoggedOut, verifyToken, login);
  


router.post("/signup",signupProcess);

router.post("/login",loginProcess);

router.post("/logout",logoutProcess)

router.get("/getUser", verifyToken  ,getUserLogged)

module.exports = router;