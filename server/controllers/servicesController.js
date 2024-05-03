const pool = require("../database");
const getServices = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM services");
    res.status(200).send(response[0]);
  } catch (error) {
    res
      .status(500)
      .send({ error: "Failed to fetch services " + error.message });
  }
};

const getService = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
      return res.status(400).send({ error: "Invalid service ID" });
    }
    const [service] = await pool.query(
      "SELECT * FROM services WHERE service_id=?",
      [id]
    );
    if (!service) {
      return res.status(404).send({ error: "Service not found" });
    }
    res.status(200).send({ service });
  } catch (error) {
    console.error("Error fetching service:", error);
    res.status(500).send({ error: "Failed to fetch service" });
  }
};

const createService = async (req, res) => {
  try {
    const {
      service_name,
      service_description,
      service_category,
      service_price,
      service_images,
      service_rating,
      service_creation_date,
    } = req.body;
    if (
      !service_name ||
      !service_category ||
      !service_price ||
      !service_creation_date
    ) {
      return res.status(400).send({ error: "Missing required fields" });
    }
    await pool.query(
      `INSERT INTO services (service_name, service_description, service_category, service_price, service_images, service_rating, service_creation_date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        service_name,
        service_description,
        service_category,
        service_price,
        service_images,
        service_rating,
        service_creation_date,
      ]
    );
    res.status(201).send({ message: "Service has been added" });
  } catch (error) {
    console.error("Error creating service: ", error);
    res.status(500).send({ error: "Failed to create service" });
  }
};

const deleteService = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
      return res.status(400).send({ error: "Invalid service ID" });
    }

    const result = await pool.query("DELETE FROM services WHERE service_id=?", [
      id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).send({ error: "Service not found" });
    }

    res.status(200).send({ message: "Service has been deleted" });
  } catch (error) {
    console.error("Failed to delete service:", error);
    res.status(500).send({ error: "Failed to delete service" });
  }
};

const updateService = async (req, res) => {
  try {
    const service_id = req.params.id;
    const { column, newData } = req.body;
    if (!service_id || !column || !newData) {
      return res.status(400).send({ error: "Missing required fields" });
    }
    const result = await pool.query(
      `UPDATE services SET ${column}=? WHERE service_id=?`,
      [newData, service_id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).send({ error: "Service not found" });
    }
    res.status(200).send({ message: "Service has been updated" });
  } catch (error) {
    console.error("Failed to update service:", error);
    res.status(500).send({ error: "Failed to update service" });
  }
};

const recomendService = async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT * FROM services WHERE service_rating > 4.5"
    );
    res.status(200).send(response[0]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const servicePicture = async (req, res) => {
  try {
    const file = req.file.filename;
    const service_id = req.params.id;
    const result = await pool.query(
      "UPDATE services SET service_image=? WHERE service_id=?",
      [file, service_id]
    );
    res.status(200).send({ message: "Service has been updated" });
  } catch (error) {
    res.status(500).send({ error: "Failed to update service" });
  }
};

module.exports = {
  getServices,
  getService,
  createService,
  deleteService,
  updateService,
  servicePicture,
  recomendService,
};
