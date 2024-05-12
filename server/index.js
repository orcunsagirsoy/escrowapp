const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const contracts = [];

const privateKeys = {
}

app.get("/contracts", (req, res) => {
    console.log("contracts", contracts);
    return contracts;
});

app.post("/contract/create", async (req, res) => {

  try {
    contracts.push(req.body.contract);
    console.log(contracts);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});