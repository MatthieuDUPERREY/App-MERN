const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo connecté");
  } catch (error) {
    console.error("Erreur de connexion à la base de données:", error.message);
    process.exit();
  }
};

module.exports = connectDB;
