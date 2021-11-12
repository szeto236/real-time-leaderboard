const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const port = process.env.PORT || 3001;

let connections = [];
io.on("connection", (socket) => {
  console.log("New WebSocket connection" + socket.id);
  connections.push(socket);

  socket.on("disconnect", () => {
    console.log("Client disconnected" + socket.id);
  });

  socket.on("addUser", (user) => {
    io.emit("userAdded", user);
    console.log({ message: "User added successfully" });
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
