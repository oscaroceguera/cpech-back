const mongoose = require("mongoose");
const URI = "mongodb://db:27017/summer-course";

mongoose.Promise = global.Promise;
mongoose.connect(URI, { useNewUrlParser: true });
mongoose.set("useCreateIndex", true); // crea automaticamente indexs

module.exports = { mongoose };