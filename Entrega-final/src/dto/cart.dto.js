class CartDTO {
    constructor(cart) {
        this.id = cart._id;
        this.products = cart.products.map(p => ({
            productId: p.product._id || p.product,
            title: p.product.title || 'Desconocido',
            quantity: p.quantity
        }));
    }
}

module.exports = CartDTO;
