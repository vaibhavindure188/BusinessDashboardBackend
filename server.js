require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const customer = require('./routes/route.customers')
const employee = require('./routes/route.employee')
const orders  = require('./routes/route.orders')

const app = express();
app.use(express.json());
// const path = require('path')
// const _dirname = path.dirname("");
// const buildpath = path.join(_dirname, "../travel-frontend/build");
// app.use(express.static(buildpath));
app.use(cors({
  "origin" : "*"
}));

  
try {
   mongoose.connect("mongodb://localhost:27017/businessDashboard", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }).then(()=>console.log('connected to db'));
  
} catch (err) {
  console.log(err);
}

app.get("/", (req, res) => {
  res.send("Hello EveryOne");
});

app.use("/api/employees", employee);
app.use('/api/customers', customer)
app.use('/api/orders', orders);


try{
  app.listen(process.env.PORT || 8000 , () => {
    console.log("Server is Up and Running" );
  });
}
catch(e){
  console.log('error while connecting to server is : ', e)
}
