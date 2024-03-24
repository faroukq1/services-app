const express = require("express");
const router = express.Router();
const servicesController = require("../controllers/servicesController");

router.get("/", servicesController.getServices);
router.get("/:id", servicesController.getService);
router.post("/", servicesController.createService);
router.delete("/:id", servicesController.deleteService);
router.patch("/:id", servicesController.updateService);

module.exports = router;
