const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String },
    title: { type: String }
});

const Books = mongoose.model("books", BooksSchema);

module.exports = Books;