const express = require("express");
const app = express();
app.get("/", (_, res) => res.send("Hello, I am Melissa Mejia"));
app.get("/health", (_, res) => res.send("ok"));
app.listen(8080, () => console.log("listening on 8080"));