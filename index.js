const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/config");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get("/", (req, res) => {
  res.json("Hello Node!");
});

const buyerApi = require("./src/api/buyers.api");
app.use("/buyer", buyerApi());

const formerbuyerApi = require("./src/api/formerbuyers.api");
app.use("/formerbuyer", formerbuyerApi());



app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

