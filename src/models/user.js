const mongoose = require("mongoose");

// Описываем схему пользователей (какие данные, их типы и правила валидации перед записью в БД)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 2,
  },
  username: {
    type: String,
    required: true,
    minLength: 5,
  },
});

module.exports = mongoose.model("user", userSchema);