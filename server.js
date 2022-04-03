import express from 'express';
import helloController
    from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";

// const express = require('express');
const app = express();
app.use(express.json());
helloController(app);
userController(app);



app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
//app.get('/hello', (req, res) => {res.send('Hello World!')})
app.listen(4000);