const Cart = require("../../models/cart.model");

class CartDAO {
    async create(cartData) {
        return await Cart.create(cartData);
    }

    async getById(id) {
        return await Cart.findById(id).populate("products.product");
    }

    async update(id, updateData) {
        return await Cart.findByIdAndUpdate(id, updateData, { new: true });
    }

    async delete(id) {
        return await Cart.findByIdAndDelete(id);
    }

    async addProduct(cartId, product) {
        const cart = await Cart.findById(cartId);
        if (!cart) return null;

        const existing = cart.products.find(p => p.product.toString() === product.product);
        if (existing) {
            existing.quantity += product.quantity;
        } else {
            cart.products.push(product);
        }

        return await cart.save();
    }

    async removeProduct(cartId, productId) {
        const cart = await Cart.findById(cartId);
        if (!cart) return null;

        cart.products = cart.products.filter(p => p.product.toString() !== productId);
        return await cart.save();
    }

    async clearCart(cartId) {
        return await Cart.findByIdAndUpdate(cartId, { products: [] }, { new: true });
    }
}

module.exports = new CartDAO();
