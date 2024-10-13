const mongoose = require("mongoose");

// Описываем схему книг (какие данные, их типы и правила валидации перед записью в БД)
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  author: {
    type: String,
    required: true,
    minLength: 2,
  },
  release: {
    type: Number,
    required: true,
    minLength: 4,
  },
});

module.exports = mongoose.model("book", bookSchema);