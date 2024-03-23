const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/new", userController.newUser);
router.patch("/update", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
