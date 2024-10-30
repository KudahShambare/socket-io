const express = require("express");
const cors = require("cors");
const fs = require("fs");
const Excel = require('exceljs');
const app = express();
const { Server } = require("socket.io");

//body parser middleware

app.use(express.json());

//handle cors

// Enable CORS for all routes
app.use(cors());




let PORT = process.env.PORT || 5000;
app.listen(PORT ,() => {
    console.log("App listening to Port:", PORT);
})