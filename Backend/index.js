const express = require('express')
const mongoose = require('mongoose')
const carData = require('./Data/CarData');
//const handlingData = require('');
const aerodynamicsData = require('./Data/AerodynamicsData');
//const exhaustData = require('');
//const wheelsData = require('');
//const engineData = require('');

const app = express()

mongoose.connect('mongodb://localhost:27017/CarConfigDB')
.then(async () => {
  console.log('Connected to MongoDB');
  await carData();
  await handlingData();
  await aerodynamicsData();
  await exhaustData();
  await wheelsData();
  await engineData();
})
.catch(err => console.error('Error connecting to MongoDB:', err));

app.listen(3001, () => {
  console.log("Server is Running")
})
