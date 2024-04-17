const WheelsModel = require('../Models/WheelsModel')

const lightweightWheels = {
  name: "Lightweight Wheels",
  description: "These lightweight wheels reduce unsprung weight, improving handling and acceleration.",
  weightChange: 8, 
  handlingImpact: 1, 
  accelerationImpact: 1, 
  cost: 1500
};

const performanceTires = {
  name: "Performance Tires",
  description: "These tires offer increased grip for better handling and cornering performance. May wear out faster than standard tires.",
  weightChange: 2, 
  handlingImpact: 2,  
  accelerationImpact: 0, 
  cost: 800
};

const largerDiameterWheels = {
  name: "Larger Diameter Wheels",
  description: "Larger diameter wheels can improve appearance but may increase weight and reduce acceleration.",
  weightChange: -5, 
  handlingImpact: -1, 
  accelerationImpact: -1, 
  cost: 1200
};

const insertWheelsProducts = async () => {
  try {
    const products = [lightweightWheels, performanceTires, largerDiameterWheels];
    for (const product of products) {
      const existingProduct = await WheelsModel.findOne({ name: product.name });
      if (!existingProduct) {
        const newProduct = new WheelsModel(product);
        await newProduct.save();
        console.log(`${product.name} inserted successfully!`);
      } else {
        console.log(`${product.name} already exists in the database.`);
      }
    }
  } catch (err) {
    console.error('Error connecting or inserting wheels products:', err);
  }
};

(async () => {
  await insertWheelsProducts();
})();
