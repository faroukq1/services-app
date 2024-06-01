const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");
const pool = require("./database");
const path = require("path");
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
app.use("api/servicesimages", servicesImagesRoutes);

// upload picuture section
app.use("/picture", express.static("picture"));
// apload one picture
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

// upload many pictures
const uploadFiles = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).array("photos", 30);

const checkFileType = (file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
};

app.post("/api/uploadserviceimages/:id/:serviceid", (req, res) => {
  const user_id = req.params.id;
  const service_id = req.params.serviceid;
  uploadFiles(req, res, async (err) => {
    if (err) {
      return res.status(400).send({ message: err });
    }

    // Check if files exist
    if (req.files === undefined || req.files.length === 0) {
      return res.status(400).send({ message: "No file uploaded" });
    }
    const servicesImages = req.files;
    try {
      const firstImage = servicesImages[0].filename;
      console.log(firstImage);
      await pool.query(
        "UPDATE services SET service_image=? WHERE service_id=?",
        [firstImage, service_id]
      );
      for (let i = 1; i < servicesImages.length; i++) {
        const image_url = servicesImages[i].filename;
        await pool.query(
          "INSERT INTO service_images (service_id , user_id , image_url) VALUES (? , ? , ?)",
          [service_id, user_id, image_url]
        );
      }

      res.status(200).send({ message: "pictures has been aded" });
    } catch (error) {
      console.log(error);
    }
  });
});

app.listen(port, () => {
  console.log(`app is listing on port : ${port}`);
});
