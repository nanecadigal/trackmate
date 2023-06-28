const mongoose = require("mongoose");

require("dotenv").config();
const mongoUser = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const dbName = process.env.MONGO_DB;

const connOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connStr = `mongodb+srv://${mongoUser}:${password}@cluster0.cwkvvvt.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connectDB = () => {
  console.log("connecting to db....");

  mongoose
    .connect(connStr, connOptions)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
      if (err) {
        console.error("cant connect", err);
      } else {
        console.log("mongodb connected");
      }
    });
};

module.exports = connectDB;
