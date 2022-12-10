const express = require("express");
const app = express();
const { connectDb } = require("./db/connection.js");
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("hello! It's me Priyanshu");
});
const connect = async () => {
    try {
        const value = await connectDb('mongodb://127.0.0.1/test')
        app.listen(port, (() => console.log(`Server is running on ${port}`)))
    } catch (e) {
        console.log(`Error occured : ${e}`)
    }
}
connect()