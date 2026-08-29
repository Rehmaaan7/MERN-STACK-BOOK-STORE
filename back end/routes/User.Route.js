const express = require("express")
const {LogIn, SignUp} = require("../controllers/userController")
const router = express.Router()

router.post("/signup",SignUp);
router.post("/login",LogIn)

module.exports = router;