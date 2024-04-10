const express = require('express')
const mongoose = require('mongoose')

const suspensionHandlingSchema = new mongoose.Schema({
    name: String, 
    description: String, //Detailed description of the modification's effects
    handlingImprovement: Number, //Estimated improvement in handling (lower is better)
    weightChange: Number, //Estimated change in car weight (can be positive or negative)
    cost: Number //Estimated cost of the modification
});
  
module.exports = mongoose.model('Handling', suspensionHandlingSchema);
