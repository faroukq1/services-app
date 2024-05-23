const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

router.get("/", ordersController.orders);
router.get("/:id", ordersController.order);
router.post("/postorder", ordersController.createOrder);
router.patch("/:id", ordersController.updateOrder);
module.exports = router;
