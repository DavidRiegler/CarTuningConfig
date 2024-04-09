const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/CarConfigDB')

const CarSchema = new mongoose.Schema({
  manufacturer: String,
  model: String,
  year: Number
})

const CarModel = mongoose.model("cars", CarSchema)

app.get("/Cars", (req, res) => {
  CarModel.find({}).then(function(cars) {
    res.json(cars)
  }).catch(function(err) {
    console.log(err)
  })
})

app.listen(3001, () => {
  console.log("Server is Running")
})
