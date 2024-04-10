const mongoose = require('mongoose')

const AerodynamicsSchema = new mongoose.Schema({
    name: String, 
    description: String, //Detailed description of the modification's effects
    topSpeedIncrease: Number, //Estimated increase in top speed (due to reduced drag)
    handlingImprovement: Number, //Estimated improvement in handling (downforce effects)
    weightChange: Number, //Estimated change in car weight (can be positive or negative)
    cost: Number //Estimated cost of the aerodynamic modification
});
  
module.exports = mongoose.model('Aerodynamics', AerodynamicsSchema);
