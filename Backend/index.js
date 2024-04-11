const express = require('express')
const mongoose = require('mongoose')
const carData = require('./Data/CarData');
const handlingData = require('./Data/HandlingData');
const aerodynamicsData = require('./Data/AerodynamicsData');
const exhaustData = require('./Data/ExhaustData');
const wheelsData = require('./Data/WheelsData');
const engineData = require('./Data/EngineData');
const CarModel = require('./Models/CarModel');
const HandlingModel = require('./Models/HandlingModel');
const AerodynamicsModel = require('./Models/AerodynamicsModel');
const ExhaustModel = require('./Models/ExhaustModel');
const WheelsModel = require('./Models/WheelsModel');
const EngineModel = require('./Models/EngineModel');

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

app.get("/api", async (req, res) => {
  const cars = await CarModel.find();
  const handling = await HandlingModel.find();
  const aerodynamics = await AerodynamicsModel.find();
  const exhaust = await ExhaustModel.find();
  const wheel = await WheelsModel.find();
  const engine = await EngineModel.find();
  res.json({ cars, handling, aerodynamics, exhaust, wheel, engine });
})

app.listen(3001, () => {
  console.log("Server is Running")
})
