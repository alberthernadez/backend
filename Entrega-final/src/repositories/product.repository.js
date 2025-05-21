const ProductDAO = require('../dao/models/product.dao');

class ProductRepository {
    async getAll(query = {}, options = {}) {
        return await ProductDAO.getAll(query, options);
    }

    async getById(id) {
        return await ProductDAO.getById(id);
    }

    async create(data) {
        return await ProductDAO.create(data);
    }

    async update(id, data) {
        return await ProductDAO.update(id, data);
    }

    async delete(id) {
        return await ProductDAO.delete(id);
    }

    async filterPaginate(query, options) {
        return await ProductDAO.filterPaginate(query, options);
    }
}

module.exports = new ProductRepository();
