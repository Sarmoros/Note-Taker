const express = require("express");
const routes = require("./routes");
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;



// Starts cthe server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});