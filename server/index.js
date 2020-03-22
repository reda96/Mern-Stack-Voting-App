const express = require("express");
const handlers = require("./handlers");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.json({ hello: "world" }));
app.use(handlers.notFound);
app.use(handlers.errors);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
