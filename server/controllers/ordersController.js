// - `GET /api/orders`: Retrieve all orders.
// - `GET /api/orders/:id`: Retrieve a specific order by ID.
// - `POST /api/orders`: Create a new order.
// - `PUT /api/orders/:id`: Update an existing order by ID.
// - `DELETE /api/orders/:id`: Delete an order by ID.

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
      order_id,
      user_id,
      service_id,
      order_date,
      total_price,
      payment_status,
      quantity,
      delivery_status,
    } = req.body;
    if (
      !order_id ||
      !user_id ||
      !service_id ||
      !order_date ||
      !total_price ||
      !payment_status ||
      !quantity ||
      !delivery_status
    ) {
      res.status(400).send({ error: "Missing required fields" });
      return;
    }
    await pool.query(
      `INSERT INTO orders (order_id,user_id,service_id,order_date
        total_price,payment_status,quantity,delivery_status) VALUES (?,?,?,?,?,?,?,?)
        `,
      [
        order_id,
        user_id,
        service_id,
        order_date,
        total_price,
        payment_status,
        quantity,
        delivery_status,
      ]
    );
  } catch (error) {
    console.log("failed to create order :", error);
    res.status(500).send({ message: "failed to create order" });
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
};
