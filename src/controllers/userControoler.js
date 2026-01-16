const userService = require('../services/userService');

class UserController {

  getAll(req, res) {
    const users = userService.getAllUsers();
    res.status(200).json(users);
  }

  create(req, res) {
    try {
      const user = userService.createUser(req.body);
      res.status(201).json(user);

    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new UserController();
