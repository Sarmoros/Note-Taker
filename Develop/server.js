const express = require("express");
const routes = require("./routes");
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.use(routes);
app.use(apiRoutes);


// Starts cthe server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});