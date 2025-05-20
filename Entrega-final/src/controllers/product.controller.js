const Product = require("../models/product.model");

// Crear un producto
exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ error: "error al crear el producto", details: error.message });
    }
};

// Obtener todos los productos
exports.getProducts = async (req, res) => {
    try {
        const { category, stock, sort, page = 1, limit = 10 } = req.query;

        const query = {};
        if (category) query.category = category;
        if (stock) query.stock = { $gte: Number(stock) };

        const options = {
            page: parseInt(page),
            limit: parseInt(limit),
            sort: {}
        };

        if (sort === "asc") options.sort.price = 1;
        if (sort === "desc") options.sort.price = -1;

        const products = await Product.find(query)
            .sort(options.sort)
            .skip((options.page - 1) * options.limit)
            .limit(options.limit);

        const total = await Product.countDocuments(query);
        const totalPages = Math.ceil(total / options.limit);

        res.json({
            total,
            page: options.page,
            totalPages,
            products
        });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos con filtros" });
    }
};

// Obtener un producto por ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);  
        if (!product) return res.status(404).json({ error: "producto no encontrado" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "error al buscar el producto" });
    }
};

// Actualizar producto
exports.updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updated) return res.status(404).json({ error: "producto no encontrado" });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ error: "error al actualizar el producto", details: error.message });
    }
};

// Eliminar producto
exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Producto no encontrado" });
        res.json({ message: "Producto eliminado" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el producto" });
    }
};
