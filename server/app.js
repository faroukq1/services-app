const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");
const pool = require("./database");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "picture");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

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

// upload picuture section

app.use("/api/uploadprofile/:id", upload.single("avatar"), async (req, res) => {
  try {
    const fileName = req.file.filename;
    const id = req.params.id;
    console.log(id);
    const response = await pool.query(
      "UPDATE users SET profile_image=? WHERE user_id=?",
      [fileName, id]
    );

    if (response.affectedRows === 0) {
      res.status(404).send({ message: "user not found" });
      return;
    }
    res.status(200).send({ message: "profile image has been updated" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.listen(port, () => {
  console.log(`app is listing on port : ${port}`);
});
