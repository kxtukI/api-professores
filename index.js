const express = require("express");
const app = express();

require('dotenv').config();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router = require("./routes/routes.js");

const PORT = process.env.PORT || 3000;

app.use("", router);

app.listen(PORT, () => {
    console.log("Iniciei na porta " + PORT);
})