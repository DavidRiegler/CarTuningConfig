const CarModel = require('../Models/CarModel')

const nissan370z = {
    manufacturer: "Nissan",
    model: "370Z",
    year: 2023,
    stats: {
      weight: 77,
      horsepower: 80,
      acceleration: 75, 
      topSpeed: 85, 
      handling: 90   
    },
    price: 35000
};
  
const subaruWrxSti = {
    manufacturer: "Subaru",
    model: "WRX STI",
    year: 2024,
    stats: {
      weight: 79, 
      horsepower: 85,
      acceleration: 85,  
      topSpeed: 80,
      handling: 95 
    },
    price: 40000
};
  
const fordMustangGt = {
    manufacturer: "Ford",
    model: "Mustang GT",
    year: 2022,
    stats: {
      weight: 89,
      horsepower: 90, 
      acceleration: 80,
      topSpeed: 90,
      handling: 80  
    },
    price: 42000
};
  
const hondaCivicSi = {
    manufacturer: "Honda",
    model: "Civic Si",
    year: 2021,
    stats: {
      weight: 66,
      horsepower: 70,
      acceleration: 70,
      topSpeed: 75,
      handling: 85 
    },
    price: 28000
};
  
const toyotaSupra = {
    manufacturer: "Toyota",
    model: "Supra",
    year: 2020,
    stats: {
      weight: 75,
      horsepower: 85,
      acceleration: 80,
      topSpeed: 90, 
      handling: 85 
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
