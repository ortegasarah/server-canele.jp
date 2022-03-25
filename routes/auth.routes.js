const router = require("express").Router();

const {loginProcess,signupProcess,logoutProcess } = require('../controllers/auth.controller')



router.post("/signup", signupProcess);

router.post("/login", loginProcess);

router.delete("/logout", logoutProcess );

module.exports = router;
