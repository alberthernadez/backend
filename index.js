const moment = require ("moment");
const http = require ("http"); 
const authRoutes = require("./Entrega-final/src/routes/auth.routes");

app.use("/auth", authRoutes);



console.log("Servidor iniciado o script corriendo correctamente");


