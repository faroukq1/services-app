const pool = require("../database");

const orders = async (req, res) => {
  try {
    const [orders] = await pool.query("SELECT * FROM orders");
    if (orders.affectedRows === 0) {
      res.status(404).send("order not found");
      return;
    }
    res.status(200).send({ orders });
  } catch (error) {
    console.log("error getting orders : ", error);
    res.status(500).send({ message: "failed to get orders" });
  }
};

const ordersByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const [orders] = await pool.query("SELECT * FROM orders WHERE user_id=?", [
      id,
    ]);
    if (orders.affectedRows === 0) {
      res.status(404).send("order not found");
      return;
    }
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const order = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id) || id <= 0) {
      res.status(400).send("there is no order match this id");
      return;
    }
    const [order] = await pool.query("SELECT * FROM orders WHERE order_id=?", [
      id,
    ]);
    if (order.affectedRows === 0) {
      res.status(404).send("order not found");
      return;
    }
    res.status(200).send({ order });
  } catch (error) {
    console.log("failed to get order: ", error);
    res.status(500).send({ message: "failed to get order" });
  }
};

const createOrder = async (req, res) => {
  try {
    const {
      user_id,
      service_id,
      order_date,
      order_time,
      total_price,
      payment_status,
      quantity,
      delivery_status,
    } = req.body;

    await pool.query(
      `INSERT INTO orders (user_id, service_id, order_date , order_time, total_price, payment_status, quantity, delivery_status) VALUES (?,?,?,?,?,?,?,?)`,
      [
        user_id,
        service_id,
        order_date,
        order_time,
        total_price,
        payment_status,
        quantity,
        delivery_status,
      ]
    );

    res.status(200).send({ message: "order has been created" });
  } catch (error) {
    console.log("failed to create order :", error);
    res.status(500).send({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const order_id = req.params.id;
    if (isNaN(order_id) || order_id <= 0) {
      res.status(404).send({ message: "order not found" });
      return;
    }
    const { column, newData } = req.body;
    if (!column || !newData) {
      res.status(404).send({ message: "missing required fields" });
      return;
    }
    const [result] = await pool.query(
      `UPDATE orders SET ${column}=? WHERE order_id=?`,
      [newData, order_id]
    );
    if (result.affectedRows === 0) {
      res.status(404).send({ message: "there is no order match this id" });
      return;
    }
    req.status(200).send({ result });
  } catch (error) {
    console.log("failed update order : ", error);
    res.status(500).send({ message: "failed to update order" });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order_id = req.params.id;
    if (isNaN(order_id) || order_id <= 0) {
      res.status(400).send("invalid id");
      return;
    }
    const [order] = pool.query("DELETE FROM orders WHERE order_id=?", order_id);
    if (order.affectedRows === 0) {
      res.status(404).send({ message: "there is no order match this id" });
      return;
    }
    res.status(200).send({ message: "order has been deleted", order });
  } catch (error) {
    console.log("failed to delete order : ", error);
    res.status(500).send({ message: "failed to delete order" });
  }
};

module.exports = {
  orders,
  order,
  createOrder,
  updateOrder,
  ordersByUserId,
  deleteOrder,
};
