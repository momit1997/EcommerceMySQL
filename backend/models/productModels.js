// const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/database");

// const Product = sequelize.define("Product", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notNull: { msg: "Please Enter product Name" },
//     },
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notNull: { msg: "Please Enter product Description" },
//     },
//   },
//   price: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//     validate: {
//       notNull: { msg: "Please Enter product Price" },
//       max: {
//         args: [99999999],
//         msg: "Price cannot exceed 8 characters",
//       },
//     },
//   },
//   ratings: {
//     type: DataTypes.FLOAT,
//     defaultValue: 0,
//   },
//   images: {
//     type: DataTypes.JSON,
//     allowNull: false,
//   },
//   category: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notNull: { msg: "Please Enter Product Category" },
//     },
//   },
//   Stock: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     validate: {
//       notNull: { msg: "Please Enter product Stock" },
//       max: {
//         args: [9999],
//         msg: "Stock cannot exceed 4 characters",
//       },
//     },
//     defaultValue: 1,
//   },
//   numOfReviews: {
//     type: DataTypes.INTEGER,
//     defaultValue: 0,
//   },
//   reviews: {
//     type: DataTypes.JSON,
//   },
//   createdAt: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
// });

// module.exports = Product;

//productModels.js

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Please Enter product Name" },
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Please Enter product Description" },
    },
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notNull: { msg: "Please Enter product Price" },
      max: {
        args: [99999999],
        msg: "Price cannot exceed 8 characters",
      },
    },
  },
  ratings: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  images: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Please Enter Product Category" },
    },
  },
  Stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: "Please Enter product Stock" },
      max: {
        args: [9999],
        msg: "Stock cannot exceed 4 characters",
      },
    },
    defaultValue: 1,
  },
  numOfReviews: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  reviews: {
    type: DataTypes.JSON,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Product;
