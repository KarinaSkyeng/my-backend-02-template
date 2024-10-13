const User = require("../models/user");

// Функции для обработки роутов

const getUsers = (request, response) => {
    // Get all users
    return User.find({})
    .then((users) => {
      response.status(200).send(users);
    })
    .catch((error) => response.status(500).send(error.message));
};
  
  const getUser = (request, response) => {
    // Get user
    const { userid } = request.params;
  return User.findById(userid)
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((error) => response.status(500).send(error.message));
};
  
  const createUser = (request, response) => {
    // Create user
    return User.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((error) => response.status(500).send(error.message));
  };
  
  const updateUser = (request, response) => {
    // Update user
    const { userid } = request.params;
    return User.findByIdAndUpdate(userid, { ...request.body }, { new: true })
      .then((user) => {
        response.status(200).send(user);
      })
      .catch((error) => response.status(500).send(error.message));
  };
  
  const deleteUser = (request, response) => {
    // Delete user
    const { userid } = request.params;
  return User.findByIdAndDelete(userid)
    .then(() => {
      response.status(200).send("Success deleted user");
    })
    .catch((error) => response.status(500).send(error.message));
  };
  
  module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
  };