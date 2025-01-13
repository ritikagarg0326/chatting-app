require('dotenv').config()
const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

// Create an Express application
const app = express();

// Create an HTTP server and attach Express
const httpServer = http.createServer(app);

// Attach socket.io to the HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: '*',//,http://localhost:4200', // Allow requests from this origin
  },
});

// Serve a basic HTML file at the root URL for testing
app.get('/', (req, res) => {
  res.send('<h1>Socket.IO Server Running</h1>');
});

// Handle socket.io connections
io.on('connection', (socket) => {
  console.log('connected');
  socket.on('message', (data) => {
    console.log(data);
    socket.broadcast.emit('received', { data: data, message: 'Message sent to server.' });
  });
});

const PORT = process.env.Port || 9000;

// Start the server
console.log("Attempting to start the server...");
httpServer.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log(`Server running at http://localhost:${PORT}`);
  }
});
