const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");

// Вызываем функцию конфигурации
dotenv.config();

// Адрес сервера и порт
const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://localhost:27017/backend-02-template-main-my-version",
} = process.env;

// Подключение к БД
try {
  mongoose.connect(MONGO_URL);
  console.log("Success connected to MongoDb");
} catch (error) {
  console.log(error);
}

const app = express();

// Опции для настройки CORS
const corsOptions = {
  origin: API_URL, // Разрешить доступ только с этого домена
  methods: "GET,PUT,POST,DELETE", // Разрешенные HTTP-методы
  allowedHeaders: ["Content-Type", "Authorization"], // Разрешенные заголовки
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // Обработка тела запроса в формате JSON

// Роуты
app.use("/users", userRouter); // Префикс для роутов пользователей
app.use("/books", bookRouter); // Префикс для роутов книг

// Обработка корневого маршрута
app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

// Обработка ошибок 404
app.use((req, res) => {
  res.status(404).send({ message: "Ресурс не найден" });
});

// Обработка ошибок 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Что-то пошло не так на сервере" });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});

