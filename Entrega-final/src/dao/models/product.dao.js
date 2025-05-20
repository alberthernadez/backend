const Product = require("../../models/product.model");

class ProductDAO {
    async create(productData) {
        return await Product.create(productData);
    }

    async getAll(filter = {}, options = {}) {
        return await Product.find(filter, null, options);
    }

    async getById(id) {
        return await Product.findById(id);
    }

    async update(id, updateData) {
        return await Product.findByIdAndUpdate(id, updateData, { new: true });
    }

    async delete(id) {
        return await Product.findByIdAndDelete(id);
    }
}

module.exports = new ProductDAO();
