const HandlingModel = require('../Models/HandlingModel') 

const coiloverSuspension = {
  name: "Coilover Suspension Kit",
  description: "Offers adjustable ride height and damping for a more customizable handling experience. May require professional installation.",
  handlingImprovement: 2, 
  weightChange: 5, 
  cost: 1200
};

const swayBars = {
  name: "Sway Bars",
  description: "Reduces body roll during cornering, improving overall handling responsiveness.",
  handlingImprovement: 1,
  weightChange: 2, 
  cost: 400
};

const strutBraces = {
  name: "Strut Braces",
  description: "Stiffens the chassis to improve handling precision and reduce body flex.",
  handlingImprovement: 1, 
  weightChange: 1, 
  cost: 200
};

const insertHandlingProducts = async () => {
  try {
    const products = [coiloverSuspension, swayBars, strutBraces];
    for (const product of products) {
      const existingProduct = await HandlingModel.findOne({ name: product.name });
      if (!existingProduct) {
        const newProduct = new HandlingModel(product);
        await newProduct.save();
        console.log(`${product.name} inserted successfully!`);
      } else {
        console.log(`${product.name} already exists in the database.`);
      }
    }
  } catch (err) {
    console.error('Error connecting or inserting handling products:', err);
  }
};

(async () => {
  await insertHandlingProducts();
})();
