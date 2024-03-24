const pool = require("../database");

const getImages = async (req, res) => {
  try {
    const [serviceImages] = await pool.query("SELECT * FROM service_images");
    if (serviceImages.affectedRows === 0) {
      res.status(404).send("there is no images");
      return;
    }
    res.status(200).json({ serviceImages });
  } catch (error) {
    console.error("Error retrieving service images:", error);
    res.status(500).json({ error: "Failed to retrieve service images" });
  }
};
const getImage = async (req, res) => {
  try {
    const { id } = req.params;
    if (isNaN(id) || id <= 0) {
      res.status(400).send("there is no image match this id");
      return;
    }
    const [image] = await pool.query(
      "SELECT * FROM service_images WHERE image_id = ?",
      [id]
    );
    if (image.length === 0) {
      return res.status(404).json({ error: "Service image not found" });
    }
    res.status(200).json({ image: image[0] });
  } catch (error) {
    console.error("Error retrieving service image:", error);
    res.status(500).json({ error: "Failed to retrieve service image" });
  }
};

module.exports = {
  getImages,
  getImage,
};
