const mongoose = require("mongoose");
const User = require("../models/User");

exports.signup = async (req, res) => {
  const user = new User({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("User not found");

    if (user.password !== req.body.password) {
      return res.status(400).send("Invalid password");
    }

    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
