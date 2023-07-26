const express = require("express");
const app = express();
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();
const connectDB = require("./db/db");
const routes = require("./routes/index");

// middlewares
app.use(express.json());
app.use(cors());

const port = process.env.BACKEND_PORT || 8080;

// Api routes
app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`.green);

  connectDB();
});

// Start server and connect to DB
// connectDB()
//   .then(() => {
//     try {
//       app.listen(port, () => {
//         console.log(`Server running on port ${port}`);
//       });
//     } catch (error) {
//       console.log("Can't connect to server..");
//     }
//   })
//   .catch((error) => {
//     console.log("Invalid database connection", error);
//   });
