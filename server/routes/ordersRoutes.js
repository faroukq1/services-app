const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

router.get("/", ordersController.orders);
router.get("/:id", ordersController.order);
router.get("/review/:id", ordersController.getAllReview);
router.patch("/accept/:id", ordersController.accepteOrder);
router.patch("/decline/:id", ordersController.declineOrder);
router.get("/notification/:id", ordersController.notificationOrder);
router.get("/userorders/:id", ordersController.ordersByUserId);
router.post("/postorder", ordersController.createOrder);
router.post("/review", ordersController.submitReview);
router.delete("/:id", ordersController.deleteOrder);
module.exports = router;
