const express = require("express");
const app = express();
const routes = require("./src/routes");
app.use(express.json());
app.use("/api", routes);
app.get("/", (req, res) => res.send("Simple backend"));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
