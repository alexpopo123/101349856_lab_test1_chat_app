const mongoose = require("mongoose");
const ChatMessage = require("../models/ChatMessage");

exports.joinRoom = async (req, res) => {
  const { room, username } = req.body;
  const chatMessage = new ChatMessage({
    from_user: username,
    room: room,
    message: `${username} has joined the ${room} room.`,
    date_sent: new Date()
  });

  try {
    const savedMessage = await chatMessage.save();
    res.send(savedMessage);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.leaveRoom = async (req, res) => {
  const { room, username } = req.body;
  const chatMessage = new ChatMessage({
    from_user: username,
    room: room,
    message: `${username} has left the ${room} room.`,
    date_sent: new Date()
  });

  try {
    const savedMessage = await chatMessage.save();
    res.send(savedMessage);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.sendMessage = async (req, res) => {
  const { room, username, message } = req.body;
  const chatMessage = new ChatMessage({
    from_user: username,
    room: room,
    message: message,
    date_sent: new Date()
  });

  try {
    const savedMessage = await chatMessage.save();
    res.send(savedMessage);
  } catch (error) {
    res.status(400).send(error);
  }
};
