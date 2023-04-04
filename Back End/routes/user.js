const express = require("express");
const { addUser, doLogin } = require("../controllers/usercontroller");
const router = express.Router();




router.post("/add-user", addUser);
router.post("/login", doLogin);


module.exports = router;