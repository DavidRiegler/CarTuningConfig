const CarModel = require('../Models/CarModel')

const nissan370z = {
    manufacturer: "Nissan",
    model: "370Z",
    year: 2023,
    stats: {
      weight: 67,
      horsepower: 50,
      acceleration: 45, 
      topSpeed: 55, 
      handling: 60   
    },
    price: 35000
};
  
const subaruWrxSti = {
    manufacturer: "Subaru",
    model: "WRX STI",
    year: 2024,
    stats: {
      weight: 69, 
      horsepower: 55,
      acceleration: 55,  
      topSpeed: 50,
      handling: 65 
    },
    price: 40000
};
  
const fordMustangGt = {
    manufacturer: "Ford",
    model: "Mustang GT",
    year: 2022,
    stats: {
      weight: 79,
      horsepower: 60, 
      acceleration: 50,
      topSpeed: 60,
      handling: 50  
    },
    price: 42000
};
  
const hondaCivicSi = {
    manufacturer: "Honda",
    model: "Civic Si",
    year: 2021,
    stats: {
      weight: 56,
      horsepower: 40,
      acceleration: 40,
      topSpeed: 45,
      handling: 55 
    },
    price: 28000
};
  
const toyotaSupra = {
    manufacturer: "Toyota",
    model: "Supra",
    year: 2020,
    stats: {
      weight: 65,
      horsepower: 55,
      acceleration: 50,
      topSpeed: 60, 
      handling: 55 
    },
    price: 48000
};

async function carExists(car) {
    try {
      const existingCar = await CarModel.findOne(car);
      return existingCar !== null;
    } catch (err) {
      console.error('Error checking for existing car:', err);
      return false;
    }
}

(async () => {
    try {
        const cars = [nissan370z, subaruWrxSti, fordMustangGt, hondaCivicSi, toyotaSupra];
        for (const car of cars) {
            const carAlreadyExists = await carExists(car);
            if (!carAlreadyExists) {
                const newCar = new CarModel(car);
                await newCar.save();
                console.log(`${car.manufacturer} ${car.model} inserted successfully!`);
            } else {
                console.log(`${car.manufacturer} ${car.model} already exists in the database.`);
            }
        }
    } catch (err) {
        console.error('Error connecting or inserting cars:', err);
    }
})();
