const express = require ("express");
const app = express ();
require ("dotenv").config();

const connectDB = require("./Entrega-final/src/db/mongo");

app.use(express.json());

const productRoutes = require("./Entrega-final/src/routes/product.routes");
//const cartRoutes = require("./Entrega-final/src/routes/cart.routes");
app.use("/api/products", productRoutes);
//app.use("/api/carts", cartRoutes);

connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("servidor corriendo");
});
