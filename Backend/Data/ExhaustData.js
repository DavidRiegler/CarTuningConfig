const ExhaustModel = require('../Models/ExhaustModel') 

const catBackExhaust = {
  name: "Cat-Back Exhaust System",
  description: "This performance exhaust system replaces the catalytic converter and muffler with a high-flow design, improving exhaust flow and potentially increasing horsepower.",
  horsepowerGain: 7,
  weightChange: 3,
  cost: 550
};

const axleBackExhaust = {
  name: "Axle-Back Exhaust System",
  description: "This exhaust system replaces the muffler with a performance alternative, offering a sportier sound and potentially slight horsepower gains.",
  horsepowerGain: 3,
  weightChange: 2,
  cost: 300
};

const headers = {
  name: "Performance Exhaust Headers",
  description: "These high-flow headers improve exhaust flow from the engine, leading to potential horsepower gains throughout the RPM range. May require additional tuning for optimal performance.",
  horsepowerGain: 10,
  weightChange: 1,
  cost: 700
};

const insertExhaustProducts = async () => {
  try {
    const products = [catBackExhaust, axleBackExhaust, headers];
    for (const product of products) {
      const existingProduct = await ExhaustModel.findOne({ name: product.name });
      if (!existingProduct) {
        const newProduct = new ExhaustModel(product);
        await newProduct.save();
        console.log(`${product.name} inserted successfully!`);
      } else {
        console.log(`${product.name} already exists in the database.`);
      }
    }
  } catch (err) {
    console.error('Error connecting or inserting exhaust products:', err);
  }
};

(async () => {
  await insertExhaustProducts();
})();
