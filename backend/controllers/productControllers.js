//productControllers.js
const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsynError");
const ApiFeatures = require("../utils/apifeatures");

//create product
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Product
exports.getAllProduts = catchAsyncError(async (req, res) => {
  const apifeatures = new ApiFeatures(Product, req.query).search().filter();
  const queryOptions = apifeatures.getOptions();
  const products = await Product.findAll(queryOptions);
  res.status(200).json({
    success: true,
    products,
  });
});

//Get Product Details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

//Update Product

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  try {
    let product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    product = await Product.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });

    // Fetch the updated product
    // product = await Product.findByPk(req.params.id);

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the product",
    });
  }
});

//Delete Product

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  await product.destroy();

  res.status(200).json({
    success: true,
    message: "Product Delete Successful",
  });
});

//update product -- admin

// exports.updateProduct = async (req, res, next) => {
//   let product = Product.findById(req.params.id);

//   if (!product) {
//     return res.status(500).json({
//       success: false,
//       message: "Product not found",
//     });
//   }

//   product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });

//   res.status(200).json({
//     success: true,
//     product,
//   });
// };
