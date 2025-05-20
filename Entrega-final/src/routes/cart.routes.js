import express from "express";
import { createCart,getCartById,addProductToCart,removeProductFromCart,clearCart, } from "../controllers/cartController.js";

const router = express.Router();

//crea un carrito nuevo
router.post("/", createCart);

//obtener carrito por ID
router.get("/:cid", getCartById);

//agregar productos al carrito 
router.post("/:cid/product/pid", addProductToCart)

//eliminar producto al carrito 
router.delete("/:cid/product/:pid", removeProductFromCart);

//vaciar el carrito completo 
router.delete("/:cid", clearCart);

export default router;
