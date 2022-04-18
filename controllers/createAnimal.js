const db = require("../database/db");

exports.createAnimal = async (req, res) => {
  const { firstName, lastName, born } = req.body;
// !Create
  const data = {
    name: "Sergio",
    edad: 12,
    vacunas: ["rabia", "bla", "bla2"],
    personalidad: ["tierno", "timido", "asocial"],
  };

  // Add a new document in collection "cities" with ID 'LA'
  db.collection("cities").doc().set(data);

  // const db.collection("animales").doc("cats").set(data);

  // !Search
  const citiesRef = db.collection("cities");
  const documentosCities = [];
  const snapshot = await citiesRef.get();
  snapshot.forEach((doc) => {
    documentosCities.push(doc.data());
  });

  console.log(await documentosCities);

  res.json({ mensaje: "asdfasdf" });
};
