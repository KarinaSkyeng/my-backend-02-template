const {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
  } = require("../controllers/books");
  
  const router = require("express").Router();
  
  router.get("/", getBooks);
  router.get("/:bookid", getBook);
  router.post("/", createBook);
  router.patch("/:bookid", updateBook);
  router.delete("/:bookid", deleteBook);
  
  module.exports = router;