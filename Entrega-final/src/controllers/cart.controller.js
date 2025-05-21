const CartRepository = require("../repositories/cart.repository");
const CartDTO = require("../dto/cart.dto");

exports.createCart = async (req, res) => {
    try {
        const cart = await CartRepository.create(req.body);
        res.status(201).json(new CartDTO(cart));
    } catch (error) {
        res.status(500).json({ error: "Error al crear el carrito", details: error.message });
    }
};

exports.getCartById = async (req, res) => {
    try {
        const cart = await CartRepository.getById(req.params.cid);
        if (!cart) return res.status(404).json({ error: "Carrito no encontrado" });
        res.json(new CartDTO(cart));
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el carrito", details: error.message });
    }
};

exports.addProductToCart = async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const { quantity } = req.body;
        const cart = await CartRepository.addProduct(cid, pid, quantity);
        res.json(new CartDTO(cart));
    } catch (error) {
        res.status(500).json({ error: "Error al agregar producto al carrito", details: error.message });
    }
};

exports.removeProductFromCart = async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const cart = await CartRepository.removeProduct(cid, pid);
        res.json(new CartDTO(cart));
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar producto del carrito", details: error.message });
    }
};

exports.clearCart = async (req, res) => {
    try {
        const { cid } = req.params;
        const cart = await CartRepository.clearCart(cid);
        res.json(new CartDTO(cart));
    } catch (error) {
        res.status(500).json({ error: "Error al vaciar el carrito", details: error.message });
    }
};



