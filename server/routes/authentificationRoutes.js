const express = require("express");
const router = express.Router();
const authentificationController = require("../controllers/authentificationController");

router.post("/signup", authentificationController.signUp);
router.post("/login", authentificationController.logIn);
router.post("/profilepic/:id", authentificationController.ProfilePicture);
module.exports = router;
