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

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { column, newData } = req.body;
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
  updateUser,
  deleteUser,
};
