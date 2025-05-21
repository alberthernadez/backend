const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const { permit } = require("../middlewares/authorization");
const { authMiddleware } = require("../middlewares/auth");

// Crear producto (requiere autenticación y rol admin)
router.post("/", authMiddleware, permit("admin"), productController.createProduct);

// Obtener todos los productos (público)
router.get("/", productController.getProducts);

// Obtener producto por ID (público)
router.get("/:id", productController.getProductById);

// Actualizar producto por ID (requiere autenticación y rol admin)
router.put("/:id", authMiddleware, permit("admin"), productController.updateProduct);

// Eliminar producto por ID (requiere autenticación y rol admin)
router.delete("/:id", authMiddleware, permit("admin"), productController.deleteProduct);

console.log("✔️ product.routes.js cargado correctamente");
module.exports = router;

