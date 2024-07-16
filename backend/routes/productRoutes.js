//productRoutes.js
const express = require("express");
const {
  getAllProduts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productControllers");
const router = express.Router();

router.route("/products").get(getAllProduts);
router.route("/product/new").post(createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetails);

module.exports = router;
