const express = require('express')
const cors = require('cors')
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

var corsOptions = {
  "origin": "*",
  "Access-Control-Allow-Origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

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

app.get("/api", cors(corsOptions), async (req, res) => {
  const cars = await CarModel.find();
  const handling = await HandlingModel.find();
  const aerodynamics = await AerodynamicsModel.find();
  const exhaust = await ExhaustModel.find();
  const wheel = await WheelsModel.find();
  const engine = await EngineModel.find();
  res.json({ cars, handling, aerodynamics, exhaust, wheel, engine });
})

app.get("/api/cars", cors(corsOptions), async (req, res) => {
  const cars = await CarModel.find();
  res.json(cars);
});

app.get("/api/handling", cors(corsOptions), async (req, res) => {
  const handling = await HandlingModel.find();
  res.json(handling);
});

app.get("/api/aerodynamics", cors(corsOptions), async (req, res) => {
  const aerodynamics = await AerodynamicsModel.find();
  res.json(aerodynamics);
});

app.get("/api/exhaust", cors(corsOptions), async (req, res) => {
  const exhaust = await ExhaustModel.find();
  res.json(exhaust);
});

app.get("/api/wheel", cors(corsOptions), async (req, res) => {
  const wheel = await WheelsModel.find();
  res.json(wheel);
});

app.get("/api/engine", cors(corsOptions), async (req, res) => {
  const engine = await EngineModel.find();
  res.json(engine);
});

app.listen(3001, () => {
  console.log("Server is Running")
})
