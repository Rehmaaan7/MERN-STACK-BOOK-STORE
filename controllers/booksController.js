const Books = require("../model/booksModel");

const getBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = await Books.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getBooks, createBook };