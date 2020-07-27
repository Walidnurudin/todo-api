const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Route = require("./router/router")

mongoose.connect("mongodb://localhost:27017/todo-api");
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("eror", console.error.bind(console, "Connection Error coba cek dulu"));

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", Route);

const port = 3000;
app.listen(port, () => console.log(`Localhost sudah jalan di port ${port}`));