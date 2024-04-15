const mongoose = require('mongoose');

const ConfigSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    data: {
        type: Object,
        required: true,
    },
});
  
module.exports = mongoose.model('Config', ConfigSchema);
