// const mysql = require("mysql");

// const connectDatabase = () => {
//   const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "ecommerce",
//   });

//   db.connect((err) => {
//     if (err) {
//       console.error("Error connecting to MySQL:", err);
//       throw err;
//     }
//     console.log(`MySQL connected with server: ${db.config.host}`);
//   });
// };

// module.exports = connectDatabase;

const { Sequelize } = require("sequelize");

// Initialize the connection to the database
const sequelize = new Sequelize("ecommerce", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to MySQL has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connectDatabase, sequelize };
