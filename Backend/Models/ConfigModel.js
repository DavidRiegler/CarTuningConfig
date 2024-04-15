const ConfigurationSchema = new mongoose.Schema({
  configName: String,
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  },
  aerodynamics: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Aerodynamics'
  },
  engine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Engine'
  },
  exhaust: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exhaust'
  },
  handling: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Handling'
  },
  wheel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Wheel'
  }
});

module.exports = mongoose.model('Configuration', ConfigurationSchema);
