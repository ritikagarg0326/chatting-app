const { Server } = require('socket.io');
const server = new Server({
  cors: {
    origin: 'http://localhost:4200'
  }
});

server.on('connection', (socket) => {
  console.log('connected');
  socket.on('message', (data) => {
    console.log(data);
    socket.broadcast.emit('received', { data: data, message: 'Message sent to server.' });
  });
});

console.log("Attempting to start the server...");
server.listen(9000, (err) => {
    if (err) {
      console.error("Error starting server:", err);
    } else {
      console.log("Server running at port 9000");
    }
  });