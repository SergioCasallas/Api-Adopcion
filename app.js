//! Imports
const express = require("express");
const db = require("./database/db");
const cors = require("cors");
// ! Server

// console.log(db)
// const docRef = db.collection("api-adopcion").doc("alovelace");

// docRef.set({
//   first: "Ada",
//   last: "Lovelace",
//   born: 185,
// });

//! Create app
const app = express();

//!Middelware
app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

//! Routes


app.use("/create-animal",require("./routes/createAnimal"));

//! Lisen

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
