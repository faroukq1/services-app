const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/userRoutes");
app.use(express.json());

// manipulate user API
app.use("/user", userRoutes);
app.listen(port, () => {
  console.log(`app is listing on port : ${port}`);
});
