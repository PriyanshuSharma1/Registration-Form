const express = require("express");
const path= require("path");
const app = express();
const hbs = require("hbs");
const { connectDb } = require("./db/connection.js");
const port = process.env.PORT || 3000;
const static_path= path.join(__dirname,"../public");
const template_path= path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));
app.set("view engine","hbs")
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.get("/", (req, res) => {
    res.render("index");
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