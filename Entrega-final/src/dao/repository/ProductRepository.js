const productDAO = require("../models/product.dao");

class ProductRepository {
    async createProduct(data) {
        return await productDAO.create(data);
    }

    async getAllProducts(query = {}, options = {}) {
        return await productDAO.getAll(query, options);
    }

    async getProductById(id) {
        return await productDAO.getById(id);
    }

    async updateProduct(id, data) {
        return await productDAO.update(id, data);
    }

    async deleteProduct(id) {
        return await productDAO.delete(id);
    }
}

module.exports = new ProductRepository();
