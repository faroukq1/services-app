const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

router.get("/", ordersController.orders);
router.get("/:id", ordersController.order);
router.get("/notification/:id", ordersController.notificationOrder);
router.get("/userorders/:id", ordersController.ordersByUserId);
router.post("/postorder", ordersController.createOrder);
router.delete("/:id", ordersController.deleteOrder);
module.exports = router;
