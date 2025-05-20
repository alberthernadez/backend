import mongoose from "mongoose"

const cartSchema = new mongoose.schema({
    products:[
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                require: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            },
        },
    ],
},{
    timestamps: true,
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;