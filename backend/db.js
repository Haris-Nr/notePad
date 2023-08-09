const mongoose = require("mongoose");
const mongoURI = "Add mongoDB URL";

const connectToMongo = () => {
  mongoose.connect(mongoURI);
};

module.exports = connectToMongo;
