const express = require("express");
const cors = require("cors");
const fs = require("fs");
const Excel = require('exceljs');
const app = express();

//body parser middleware

app.use(express.json());

//handle cors

// Enable CORS for all routes
app.use(cors());


app.get("/",(req,resp)=>{
    const filePath = __dirname+"/"+"home.html";

    resp.sendFile(filePath);

})


app.get("/orders",(req,resp)=>{
    const filePath = __dirname+"/"+"adorable_legends.xlsx";

    resp.sendFile(filePath);

})



/*Get Data From Client*/
app.post("/orders",(req,resp)=>{

//insert row

let data = {
  "name": req.body.name,
  "phone": req.body.phone,
  "email": req.body.email,
  "cart": req.body.cart
};

console.log(data)

const read = async ()=>{
    const workbook = new Excel.Workbook();
await workbook.xlsx.readFile("adorable_legends.xlsx");

const worksheet = workbook.getWorksheet("Orders");

//count non empty rows including headings
let rowCount=0;
worksheet.eachRow(()=>{
rowCount++;

})


worksheet.insertRow(rowCount+1,[rowCount,data.name,data.phone,data.email,data.cart]);

  // Save the modified workbook back to the file
  await workbook.xlsx.writeFile("adorable_legends.xlsx");

}

read();

})

let PORT = process.env.PORT || 5000;
app.listen(PORT ,() => {
    console.log("App listening to Port:", PORT);
})