const express = require("express");
const app = express();
const morgan = require("morgan");
const Movies = require("./model/movieDatabase");

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use("/api/movies", require("./movies/movies"));

//Conecting
const mongoose = require("mongoose");
const URL_DB = "mongodb://localhost:27017/Movies";

const db = mongoose
  .connect(URL_DB, { useNewUrlParser: true })
  .then(() => {
    console.log("La conexión a MongoDB se ha realizado correctamente!!");
  })
  .catch(err => console.log(err));
console.log(Movies.find());
//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${3000}`);
});
