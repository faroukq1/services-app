const pool = require("../database");
const utilFuntions = require("../utils/utilFuntions");
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

const logIn = async (req, res) => {
  try {
    const { email, user_password } = req.body;
    if (!utilFuntions.isEmailValid(email)) {
      res.status(404).send({ message: "invalid email" });
      return;
    }
    const [data] = await pool.query(
      "SELECT * FROM users WHERE email=? AND user_password=?",
      [email, user_password]
    );
    if (data.affectedRows === 0) {
      res.status(404).send({ message: "invalid username or passoword" });
      return;
    }
    res
      .status(200)
      .send({ message: "user has been login", user_id: data[0].user_id });
    console.log(data);
  } catch (error) {
    console.log("failed to login : ", error);
    res.status(500).send({ message: "failed to login" });
  }
};
module.exports = {
  signUp,
  logIn,
};
