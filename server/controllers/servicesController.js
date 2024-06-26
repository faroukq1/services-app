const pool = require("../database");
const getServices = async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT services.*, users.user_id, users.user_name, users.profile_image , users.user_adress FROM services JOIN users ON services.user_id = users.user_id"
    );
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

    //SELECT * FROM services WHERE service_id=?
    const [service] = await pool.query(
      "SELECT services.*, users.user_id, users.user_name, users.profile_image , users.user_adress FROM services JOIN users ON services.user_id = users.user_id WHERE service_id = ?",
      [id]
    );
    if (!service) {
      return res.status(404).send({ error: "Service not found" });
    }

    res.status(200).send(service[0]);
  } catch (error) {
    console.error("Error fetching service:", error);
    res.status(500).send({ error: "Failed to fetch service" });
  }
};

const createService = async (req, res) => {
  try {
    const {
      service_id,
      user_id,
      service_name,
      service_description,
      service_category,
      service_price,
      service_image,
      service_rating,
      service_creation_date,
    } = req.body;

    const data = await pool.query(
      `INSERT INTO services (service_id , user_id, service_name, service_description, service_category, service_price, service_image, service_rating, service_creation_date)
      VALUES (?,?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        service_id,
        user_id,
        service_name,
        service_description,
        service_category,
        service_price,
        service_image,
        service_rating,
        service_creation_date,
      ]
    );
    res.status(201).send({
      message: "Service has been added",
      data: data,
    });
  } catch (error) {
    console.error("Error creating service: ", error);
    res.status(500).send({ message: error.message });
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
      "SELECT * FROM services WHERE service_rating = 5"
    );
    const data = response[0];
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getServicesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    if (category === "All") {
      const response = await pool.query("SELECT * FROM services");
      res.status(200).send(response[0]);
      return;
    }
    const response = await pool.query(
      "SELECT * FROM services WHERE service_category = ?",
      [category]
    );

    res.status(200).send(response[0]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getUserServices = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      "SELECT * FROM services WHERE user_id = ?",
      [id]
    );
    res.status(200).send(response[0]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getMaxServiceId = async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT MAX(service_id) AS max_service_id FROM services"
    );
    res.status(200).send(response[0][0]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getAllServiceImages = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      "SELECT image_url FROM service_images WHERE service_id=?",
      [id]
    );
    console.log(response[0]);
    res.status(200).send(response[0]);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = {
  getServices,
  getService,
  createService,
  deleteService,
  updateService,
  recomendService,
  getServicesByCategory,
  getUserServices,
  getMaxServiceId,
  getAllServiceImages,
};
