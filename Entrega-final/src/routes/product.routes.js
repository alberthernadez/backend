const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

// Crear producto
router.post("/", productController.createProduct);

// Obtener todos los productos
router.get("/", productController.getProducts);

// Obtener producto por ID
router.get("/:id", productController.getProductById);

// Actualizar producto por ID
router.put("/:id", productController.updateProduct);

// Eliminar producto por ID
router.delete("/:id", productController.deleteProduct);

console.log("✔️ product.routes.js cargado correctamente");
module.exports = router;