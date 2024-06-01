const express = require("express");
const router = express.Router();
const serviceImagesController = require("../controllers/serviceImagesController");

router.get("/", serviceImagesController.getImages);
router.get("/:id", serviceImagesController.getImage);
router.get(
  "/getimagebyserviceid/:id",
  serviceImagesController.getImagesByServiceId
);
router.post("/upload", serviceImagesController.uploadServiceImage);

module.exports = router;
