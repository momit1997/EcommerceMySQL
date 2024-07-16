// const app = require("./app");

// const dotenv = require("dotenv");

// const {connectDatabase} = require("./config/database");

// //config
// dotenv.config({ path: "backend/config/config.env" });

// //connecting to database
// connectDatabase();

// const PORT = process.env.PORT || 3000; // Fallback to port 3000 if PORT is not defined

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on http://localhost:${process.env.PORT}`);
// });

const app = require("./app");
const dotenv = require("dotenv");
const { connectDatabase } = require("./config/database");
const productSchema = require("./models/productModels");

//Handling Uncaught Error

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shuting down the server due to uncaught Exception`);
  process.exit(1);
});

// Config
dotenv.config({ path: "backend/config/config.env" });

// Connect to database
connectDatabase();

// Sync all models with the database
(async () => {
  try {
    await productSchema.sync(); // This will create the Product table if it doesn't exist
    // console.log("Product table created");
  } catch (error) {
    console.error("Error syncing the Product model:", error);
  }
})();

const PORT = process.env.PORT || 3000; // Fallback to port 3000 if PORT is not defined

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${error.message}`);
  console.log(`Shuting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
