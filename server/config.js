require("dotenv").config();

module.exports = {
    mongoURI: String(process.env.MONGO_URI)
  };
  