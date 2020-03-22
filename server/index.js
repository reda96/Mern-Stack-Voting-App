require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const handlers = require("./handlers");
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ hello: "world" }));
app.use(handlers.notFound);
app.use(handlers.errors);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
