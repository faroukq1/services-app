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

const deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query("DELETE FROM orders WHERE order_id=?", [
      id,
    ]);
    if (response.affectedRows === 0) {
      res.status(404).send({ message: "order not found" });
      return;
    }
    res.status(200).send({ message: "order has been deleted" });
  } catch (error) {
    console.log("failed to delete order : ", error);
    res.status(500).send({ message: "failed to delete order" });
  }
};

const notificationOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      `
      SELECT orders.order_id,users.user_id AS service_provider,
      services.service_id,
      orders.user_id AS orders_buyer_id, orders.delivery_status,
      orders.order_date , orders.order_time 
      , orders.total_price , orders.payment_status,
      services.service_name
      FROM users
      INNER JOIN services ON users.user_id = services.user_id
      INNER JOIN orders ON services.service_id = orders.service_id
      WHERE users.user_id = ?;
    `,
      [id]
    );

    if (response.affectedRows === 0) {
      res.status(404).send({ message: "order not found" });
      return;
    }
    const data = response[0];
    res.status(200).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const accepteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      `UPDATE orders SET delivery_status = 1 WHERE order_id = ?;`,
      [id]
    );
    if (response.affectedRows !== 0) {
      res.status(200).send({ message: "order has been accepted" });
      return;
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const declineOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      `UPDATE orders SET delivery_status = 2 WHERE order_id = ?;`,
      [id]
    );
    if (response.affectedRows !== 0) {
      res.status(200).send({ message: "order has been declined" });
      return;
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  orders,
  order,
  createOrder,
  ordersByUserId,
  deleteOrder,
  notificationOrder,
  accepteOrder,
  declineOrder,
};
