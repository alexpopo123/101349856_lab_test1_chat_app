const express = require("express");
const router = express.Router();

//import
const userController = require("../controllers/user");

//define the routing
router.get("/", userController.index);
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/logout", userController.logout);

module.exports = router;