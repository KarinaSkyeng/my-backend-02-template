const Book = require("../models/books");

// Функции для обработки роутов

const getBooks = (request, response) => {
  return Book.find({})
    .then((books) => {
      response.status(200).send(books);
    })
    .catch((error) => response.status(500).send(error.message));
};

const getBook = (request, response) => {
  const { bookid } = request.params;
  return Book.findById(bookid)
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((error) => response.status(500).send(error.message));
};

const createBook = (request, response) => {
  return Book.create({ ...request.body })
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((error) => response.status(500).send(error.message));
};

const updateBook = (request, response) => {
  const { bookid } = request.params;
  return Book.findByIdAndUpdate(bookid, { ...request.body }, { new: true })
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((error) => response.status(500).send(error.message));
};

const deleteBook = (request, response) => {
  const { bookid } = request.params;
  return Book.findByIdAndDelete(bookid)
    .then(() => {
      response.status(200).send("Success deleted book");
    })
    .catch((error) => response.status(500).send(error.message));
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
