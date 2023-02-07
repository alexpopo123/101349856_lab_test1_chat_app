//connect socket.io server
const socket = io();

//get the chat form and message input field
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message');

//listen for "user is typing..."
socket.on('typing', function(username) {
  console.log(username + ' is typing...');
});

//listen for submit event on chat form
chatForm.addEventListener('submit', function(e) {
  e.preventDefault();

  //emit a message event to the server with the message text
  socket.emit('message', messageInput.value);

  //clear the message input field
  messageInput.value = '';
});

//listen for "user is typing..." event on message input field
messageInput.addEventListener('keypress', function() {
  //emit a "user is typing..." event to the server
  socket.emit('typing');
});
