// - `GET /api/users`: Retrieve all users. done
// - `GET /api/users/:id`: Retrieve a specific user by ID. done
// - `POST /api/users`: Create a new user. done
// - `PUT /api/users/:id`: Update an existing user by ID.
// - `DELETE /api/users/:id`: Delete a user by ID.

const pool = require("../database");
const getUsers = async (req, res) => {
  try {
    const [data] = await pool.query("SELECT * FROM users");
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const [data] = await pool.query("SELECT * FROM users WHERE  user_id=?", [
      userId,
    ]);
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const newUser = async (req, res) => {
  try {
    const {
      user_id,
      user_name,
      email,
      user_adress,
      user_password,
      full_name,
      profile_image,
      phone_number,
      credit_card_number,
    } = req.body;
    pool.query(
      `INSERT INTO users (user_id,user_name,email, user_adress,user_password,full_name,
      profile_image,phone_number,credit_card_number) VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        user_id,
        user_name,
        email,
        user_adress,
        user_password,
        full_name,
        profile_image,
        phone_number,
        credit_card_number,
      ]
    );
    res.status(200).send({ message: "user has been added" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, column, newData } = req.body;
    pool.query(`UPDATE users SET ${column}=? WHERE user_id=?`, [newData, id]);
    res.status(200).send("user has been updated");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    pool.query("DELETE FROM users WHERE user_id=?", [id]);
    res.status(200).send("user has been deleted");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
module.exports = {
  getUsers,
  getUser,
  newUser,
  updateUser,
  deleteUser,
};
