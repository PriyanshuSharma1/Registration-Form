const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connectDb = async (url) => {
    mongoose.connect(url);
}
module.exports = { connectDb }
