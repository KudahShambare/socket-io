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

let users = [];
let messages = [];

// Socket.io connection
io.on("connection", (socket) => {
  console.log(socket.id);
  
  users.push(socket.id);
    console.log("Client connected",socket.id);

    let obj={
      id:socket.id,
      name:"",
      email:"",
      allUsers:users
    }

      socket.broadcast.emit("announcement",obj
    );

    socket.on("message", (message) => {
      // Create message object with id and message content
      const msgObject = {
        id: socket.id,
        message: message
      };
    
      // Emit only the new message to all clients
      io.emit("message", msgObject);
    });
    

  
    socket.on("disconnect", () => {
        console.log("Client disconnected"); 

        socket.broadcast.emit("announcement","User disconnected");
    })

})

/******************************************************************************************** */
//routes
app.post("/login",(req,resp)=>{

  let email= req.body.email;
  let password =  req.body.password;

  //get user from database
  

})
// Start the server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
})


