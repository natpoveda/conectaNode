const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/conecta";

mongoose.connect(URI)
    .then(db=> console.log("Conected"))
    .catch(err => console.log(err));

module.exports = mongoose;