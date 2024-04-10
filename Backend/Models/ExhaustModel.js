const express = require('express')
const mongoose = require('mongoose')

const exhaustSystemSchema = new mongoose.Schema({
    name: String,
    description: String, //Detailed description of the modification's effects
    horsepowerGain: Number, //Estimated increase in horsepower (due to improved flow)
    weightChange: Number, //Estimated change in car weight (can be positive or negative)
    cost: Number //Estimated cost of the exhaust system modification
});
  
module.exports = mongoose.model('Exhaust', exhaustSystemSchema);
