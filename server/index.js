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
  console.log(socket.id);
  
    console.log("Client connected");
  
    socket.on("message", (message) => {
      console.log("Received message: ", message);
    

    });

    socket.on("disconnect", () => {
        console.log("Client disconnected"); 
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