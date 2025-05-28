const moment = require("moment");
const http = require("http");

const app = require("./app");

const authRoutes = require("./Entrega-final/src/routes/auth.routes");
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor iniciado en puerto ${PORT}");
    console.log(" Momento actual:", moment().format("YYYY-MM-DD HH:mm:ss"));
});


