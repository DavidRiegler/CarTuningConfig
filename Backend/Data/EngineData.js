const EngineModel = require('../Models/EngineModel')

const airIntake = {
  name: "Performance Air Intake System",
  description: "This high-flow air intake system allows for increased airflow to the engine, resulting in potential horsepower gains. Made from durable aluminum with a washable filter.",
  horsepowerGain: 10,
  accelerationImprovement: 1, 
  topSpeedIncrease: 2,
  weightChange: 2,
  cost: 450
};

const performanceExhaust = {
  name: "Performance Exhaust System",
  description: "This free-flowing exhaust system reduces back pressure and improves engine efficiency, leading to potential horsepower gains. Made from high-quality stainless steel.",
  horsepowerGain: 5,
  accelerationImprovement: 1,
  topSpeedIncrease: 1,
  weightChange: 5,
  cost: 600
};

const lightweightFlywheel = {
  name: "Lightweight Flywheel",
  description: "A lightweight flywheel reduces rotational mass, allowing for quicker engine revs and improved acceleration response. May cause slightly increased idle vibration.",
  horsepowerGain: 2,
  accelerationImprovement: 1,
  topSpeedIncrease: 0,
  weightChange: 8,
  cost: 380
};

const insertEngineProducts = async () => {
  try {
    const products = [airIntake, performanceExhaust, lightweightFlywheel];
    for (const product of products) {
      const existingProduct = await EngineModel.findOne({ name: product.name });
      if (!existingProduct) {
        const newProduct = new EngineModel(product);
        await newProduct.save();
        console.log(`${product.name} inserted successfully!`);
      } else {
        console.log(`${product.name} already exists in the database.`);
      }
    }
  } catch (err) {
    console.error('Error connecting or inserting engine products:', err);
  }
};

(async () => {
  await insertEngineProducts();
})();
