const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.sdpuocy.mongodb.net/`;

    mongoose.connect(uri);
    const connection = mongoose.connection;

    connection.on("connected", () => {
        console.log("Mongodb connected successfully");
    });

    connection.on("error", () => {
        console.log("Mongodb connection error");
            process.exit();
        
    });
  } catch (error) {
    console.log("Mongodb connection failed", error.message);
  }
};

module.exports = connectDB;
