const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    manufacturer: String,
    model: String,
    year: Number,
    stats: {
        weight: Number, //Number from 1-100 (like levels)
        horsepower: Number, //Number from 1-100
        acceleration: Number, //Number from 1-100
        topSpeed: Number, //Number from 1-100
        handling: Number //Number from 1-100
    },
    price: Number //Real Price of the new Car (stock)
})

module.exports = mongoose.model('Car', CarSchema);
