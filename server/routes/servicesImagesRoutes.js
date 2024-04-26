const express = require("express");
const router = express.Router();
const serviceImagesController = require("../controllers/serviceImagesController");

router.get("/", serviceImagesController.getImages);
router.get("/:id", serviceImagesController.getImage);
router.post("/upload", serviceImagesController.uploadServiceImage);

module.exports = router;
