const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi =require('swagger-ui-express')
const swaggerDoc=require('../swagger.json')
require("dotenv").config();
const userRouter= require("./users/user.router")
const db=require("./database/database")

const PORT = process.env.PORT || 8000;

db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))


app.get("/", (req, res) => {
  res.json({
    message: "Server OK",
  });
});

app.use(express.json());
app.use(cors());


app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDoc))
app.use('/itsa',  userRouter)


app.listen(PORT, () => {
  console.log(`server starded at port : ${PORT}`);
});
