const pool = require("../database");
const helpers = require("../utils/helpers");
const bcrypt = require("bcrypt");
const signUp = async (req, res) => {
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

    if (
      !user_id ||
      !user_name ||
      !email ||
      !user_adress ||
      !user_password ||
      !full_name ||
      !profile_image ||
      !phone_number ||
      !credit_card_number
    ) {
      res.status(400).send({ message: "unvalid required fields" });
      return;
    }
    const hashedPassword = await bcrypt.hash(user_password, 10);
    await pool.query(
      `INSERT INTO users (
        user_id, user_name,
        email, user_adress, user_password,
        full_name, profile_image, phone_number,
        credit_card_number
          ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user_id,
        user_name,
        email,
        user_adress,
        hashedPassword,
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

const logIn = async (req, res) => {
  try {
    const { email, user_password } = req.body;
    if (!email || !user_password) {
      res.status(400).send({ message: "invalid required fields" });
      return;
    }
    if (!helpers.isEmailValid(email)) {
      res.status(404).send({ message: "invalid email" });
      return;
    }
    const [data] = await pool.query("SELECT * FROM users WHERE email=?", [
      email,
    ]);
    if (data.length === 0) {
      res.status(404).send({ message: "invalid username or passoword" });
      return;
    }
    const hashedPasswordFromDb = data[0].user_password;
    const passwordMatch = await bcrypt.compare(
      user_password,
      hashedPasswordFromDb
    );

    if (!passwordMatch) {
      res.status(400).send({ message: "invalid email or password" });
      return;
    }
    res
      .status(200)
      .send({ message: "user has been login", user_id: data[0].user_id });
  } catch (error) {
    console.log("failed to login : ", error);
    res.status(500).send({ message: "failed to login" });
  }
};
module.exports = {
  signUp,
  logIn,
};
