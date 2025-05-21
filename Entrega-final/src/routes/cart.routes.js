const express = require("express");
const router = express.Router();
const {
    createCart,
    getCartById,
    addProductToCart,
    removeProductFromCart,
    clearCart,
} = require("../controllers/cart.controller");
const { permit } = require("../middlewares/authorization");

// Crear carrito
router.post("/", createCart);

// Obtener carrito por ID
router.get("/:cid", getCartById);

// Agregar producto al carrito (solo user)
router.post("/:cid/product/:pid", permit("user"), addProductToCart);

// Eliminar producto del carrito
router.delete("/:cid/product/:pid", removeProductFromCart);

// Vaciar carrito
router.delete("/:cid", clearCart);

module.exports = router;

