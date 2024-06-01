const express = require("express");
const router = express.Router();
const servicesController = require("../controllers/servicesController");

router.get("/", servicesController.getServices);
router.get("/:id", servicesController.getService);
router.get("/user/:id", servicesController.getUserServices);
router.get("/recomend/highrating", servicesController.recomendService);
router.get("/category/:category", servicesController.getServicesByCategory);
router.post("/", servicesController.createService);
router.delete("/:id", servicesController.deleteService);
router.patch("/:id", servicesController.updateService);
router.get("/max/:id", servicesController.getMaxServiceId);
router.get("/allimages/:id", servicesController.getAllServiceImages);

module.exports = router;
