const { Server } = require('socket.io')
const server = new Server({cors :{ origin: 'http://localhost:4200'}});

server.on('connection', (socket) => {
    console.log('connected');
    socket.on('message', (data) => {
        console.log(data);
        socket.broadcast.emit('received', {data: data, 'message' : 'Message sent to server.'});  //this code sending data from server to client
    })

    
})

server.listen(4000);