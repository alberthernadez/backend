import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

// Crear un nuevo carrito vacío
export const createCart = async (req, res) => {
    try {
        const newCart = await Cart.create({ products: [] });
        res.status(201).json(newCart);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el carrito" });
    }
};

// Obtiene carrito por ID
export const getCartById = async (req, res) => {
    try {
        const { cid } = req.params;
        const cart = await Cart.findById(cid).populate("products.product");
        if (!cart) return res.status(404).json({ error: "Carrito no encontrado" });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el carrito" });
    }
};

// Agrega productos al carrito
export const addProductToCart = async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const cart = await Cart.findById(cid);
        if (!cart) return res.status(404).json({ error: "Carrito no encontrado" });

        const product = await Product.findById(pid);
        if (!product) return res.status(404).json({ error: "Producto no encontrado" });

        const existingProduct = cart.products.find(p => p.product.equals(pid));
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.products.push({ product: pid, quantity: 1 });
        }

        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: "Error al agregar producto al carrito" });
    }
};

// Elimina un producto del carrito por ID de carrito y producto
export const removeProductFromCart = async (req, res) => {
    const { cid, pid } = req.params;

    try {
        const cart = await Cart.findById(cid);
        if (!cart) return res.status(404).json({ message: "Carrito no encontrado" });

        cart.products = cart.products.filter(p => p.product.toString() !== pid);

        await cart.save();
        res.json({ message: "Producto eliminado del carrito", cart });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar producto", error });
    }
};

// Vacia el carrito completo (elimina todos los productos)
export const clearCart = async (req, res) => {
    const { cid } = req.params;

    try {
        const cart = await Cart.findById(cid);
        if (!cart) return res.status(404).json({ message: "Carrito no encontrado" });

        cart.products = [];
        await cart.save();

        res.json({ message: "Carrito vaciado", cart });
    } catch (error) {
        res.status(500).json({ message: "Error al vaciar el carrito", error });
    }
};


