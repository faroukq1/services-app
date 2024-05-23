const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
const userRoutes = require("./routes/userRoutes");
const servicesRoutes = require("./routes/servicesRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const authentificationRoutes = require("./routes/authentificationRoutes");
const servicesImagesRoutes = require("./routes/servicesImagesRoutes");
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/services", upload.single("service"), servicesRoutes);
app.use("/api/order", ordersRoutes);
app.use("/api/auth", upload.single("avatar"), authentificationRoutes);
app.use("api/servicesimages", upload.single("images"), servicesImagesRoutes);

app.listen(port, () => {
  console.log(`app is listing on port : ${port}`);
});
