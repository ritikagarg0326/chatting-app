# Chatting APP
For chatting app  we have used nodejs + express as server and on the front-end we used Angular. To send the messages between server and front-end we have used socket.io. library. 

# Some npm commands used

### Backend commands

| Command | Explanation |
| ------ | ------ |
| ``` npm init ``` |  Can be used to set up a new or existing npm package |
| ``` npm install cors express nodemon socket.io ``` | Install packages that we are going to use |
| ``` npm install -g @angular/cli ``` | Install Angular as a global package |
| ``` ng new client ``` | Using Angular CLI to create a new project inside our current folder. |
| ``` npm run serve ``` | We updated package.json in the root folder and added new command `"serve": "nodemon server.js"`   under `scripts` property. After this we able to run `npm run serve` to start our node server |


### Client side commands

| Command | Explanation |
| ------ | ------ |
| ``` npm install socket.io-client ``` | To install `socket.io` for our client app |
| ``` npm run build ``` | Need to run this command first time to build Angular project |
| ``` npm run start ``` |  Start the Angular app |
