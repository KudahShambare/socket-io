const express = require("express");
const cors = require("cors");
const app = express();
const { Server } = require("socket.io");
const { createServer } = require("http");

// Body parser middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Create HTTP server and attach Express app
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // Allow client from localhost:3000
    methods: ["GET", "POST"],
  },
});

// Socket.io connection
io.on("connection", (socket) => {
    console.log("Client connected");
  
    socket.on("message", (message) => {
      console.log("Received message: ", message);
      // Broadcast message to all connected clients
      io.emit("message", message);
    });
})
// Start the server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
