const ProductRepository = require("../repositories/product.repository");
const ProductDTO = require("../dto/product.dto");

// Crear un producto
exports.createProduct = async (req, res) => {
    try {
        const newProduct = await ProductRepository.create(req.body);
        const productDTO = new ProductDTO(newProduct);
        res.status(201).json(productDTO);
    } catch (error) {
        res.status(400).json({ error: "error al crear el producto", details: error.message });
    }
};


// Obtener todos los productos
exports.getProducts = async (req, res) => {
    try {
        const { category, sort, page = 1, limit = 10 } = req.query;

        const result = await ProductRepository.getAll({
            category,
            sort,
            page: parseInt(page),
            limit: parseInt(limit)
        });

        const productsDTO = result.products.map(p => new ProductDTO(p));
        res.json({
            total: result.total,
            page: result.page,
            totalPages: result.totalPages,
            products: productsDTO
        });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos con filtros" });
    }
};


// Obtener un producto por ID
exports.getProductById = async (req, res) => {
    try {
        const product = await ProductRepository.getById(req.params.id);
        if (!product) return res.status(404).json({ error: "producto no encontrado" });
        res.json(new ProductDTO(product));
    } catch (error) {
        res.status(500).json({ error: "error al buscar el producto" });
    }
};


// Actualizar producto
exports.updateProduct = async (req, res) => {
    try {
        const updated = await ProductRepository.update(req.params.id, req.body);
        if (!updated) return res.status(404).json({ error: "producto no encontrado" });
        res.json(new ProductDTO(updated));
    } catch (error) {
        res.status(400).json({ error: "error al actualizar el producto", details: error.message });
    }
};


// Eliminar producto
exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await ProductRepository.delete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Producto no encontrado" });
        res.json({ message: "Producto eliminado" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el producto" });
    }
};

