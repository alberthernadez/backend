const mongoose = require ("mongoose");
require("dotenv").config();

const connectDB = async () => {
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("conectado a MongoDB");
} catch (error) {
    console.error("error al conectar a MongoDB", error.message);
    process.exit(1);
}
};

module.exports = connectDB;
