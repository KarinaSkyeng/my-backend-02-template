const router = require("express").Router();
const logOriginUrl = require("../middlewares/logOriginUrl");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.use(logOriginUrl);

router.get("/users", getUsers);
router.get("/users/:userid", getUser);
router.post("/users", createUser);
router.patch("/users/:userid", updateUser);
router.delete("/users/:userid", deleteUser);

module.exports = router;