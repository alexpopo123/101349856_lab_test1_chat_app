const express = require("express");
const mongoose = require("mongoose");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//import the user and chat controllers
const userController = require("./controllers/user");
const chatController = require("./controllers/chat");

//connect to MongoDB
mongoose.connect("mongodb://localhost/101349856_lab_test1_chat_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//set up the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set up the view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//define the routing for the application
app.use("/", userController);
app.use("/chat", chatController);

//start
server.listen(3000, () => {
  console.log("Server started on port 3000");
});

//set up socket.io
io.on("connection", (socket) => {
  console.log("User connected");
});
