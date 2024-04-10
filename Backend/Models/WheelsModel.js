const mongoose = require('mongoose')

const wheelsTiresSchema = new mongoose.Schema({
    name: String,
    description: String, //Detailed description of the modification's effects
    weightChange: Number, //Estimated change in wheel and tire weight (negative for lighter options)
    handlingImpact: Number, //Estimated change in handling (can be positive or negative)
    accelerationImpact: Number, //Estimated change in acceleration (can be positive or negative due to weight)
    cost: Number //Estimated cost of the wheel and tire set
});
  
module.exports = mongoose.model('Wheels', wheelsTiresSchema);
