const CartDAO = require('../dao/models/cart.dao');

class CartRepository {
    async getById(id) {
        return await CartDAO.getById(id);
    }

    async create(cartData) {
        return await CartDAO.create(cartData);
    }

    async addProduct(cartId, productId, quantity = 1) {
        return await CartDAO.addProduct(cartId, productId, quantity);
    }

    async removeProduct(cartId, productId) {
        return await CartDAO.removeProduct(cartId, productId);
    }

    async clearCart(cartId) {
        return await CartDAO.clear(cartId);
    }

    async update(cartId, updateData) {
        return await CartDAO.update(cartId, updateData);
    }
}

module.exports = new CartRepository();
