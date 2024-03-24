const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/userRoutes");
const servicesRoutes = require("./routes/servicesRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const authentificationRoutes = require("./routes/authentificationRoutes");
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/auth", authentificationRoutes);
app.listen(port, () => {
  console.log(`app is listing on port : ${port}`);
});
