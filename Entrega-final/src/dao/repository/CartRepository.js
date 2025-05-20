const cartDAO = require("../models/cart.dao");

class CartRepository {
    async createCart(data) {
        return await cartDAO.create(data);
    }

    async getCartById(id) {
        return await cartDAO.getById(id);
    }

    async updateCart(id, data) {
        return await cartDAO.update(id, data);
    }

    async deleteCart(id) {
        return await cartDAO.delete(id);
    }

    async addProductToCart(cartId, product) {
        return await cartDAO.addProduct(cartId, product);
    }

    async removeProductFromCart(cartId, productId) {
        return await cartDAO.removeProduct(cartId, productId);
    }

    async clearCart(cartId) {
        return await cartDAO.clearCart(cartId);
    }
}

module.exports = new CartRepository();
