const mongoose = require('mongoose')

const engineDrivetrainSchema = new mongoose.Schema({
    name: String, 
    description: String, //Detailed description of the modification's effects
    horsepowerGain: Number, //Estimated increase in horsepower (can be negative for efficiency mods)
    accelerationImprovement: Number, //Estimated change in 0-100 km/h time (can be negative for heavier components)
    topSpeedIncrease: Number, //Estimated increase in top speed (can be negative for some mods)
    weightChange: Number, //Estimated change in car weight (can be positive or negative)
    cost: Number //Estimated cost of the modification
});
  
module.exports = mongoose.model('Engine', engineDrivetrainSchema);
