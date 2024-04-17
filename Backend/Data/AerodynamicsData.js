const AerodynamicsModel = require('../Models/AerodynamicsModel')

const spoiler = {
    name: "Universal Racing Spoiler",
    description: "This high-performance spoiler increases downforce for improved handling and stability at high speeds. Made from lightweight yet durable ABS plastic.",
    topSpeedIncrease: 2, 
    handlingImprovement: 5,
    weightChange: -1, 
    cost: 250
};
  
const frontSplitter = {
    name: "Adjustable Front Splitter",
    description: "This adjustable front splitter helps to reduce front-end lift and improve downforce for better turn-in and cornering performance.",
    topSpeedIncrease: 1, 
    handlingImprovement: 3,
    weightChange: -2,
    cost: 300
};
  
const sideSkirts = {
    name: "Aerodynamic Side Skirts",
    description: "These sleek side skirts channel airflow to improve side stability and reduce drag for slightly better top speed.",
    topSpeedIncrease: 1,
    handlingImprovement: 2,
    weightChange: -5, 
    cost: 180
};

const insertAerodynamicsProducts = async () => {
    try {
        const products = [spoiler, frontSplitter, sideSkirts];
        for (const product of products) {
            const existingProduct = await AerodynamicsModel.findOne({ name: product.name });
            if (!existingProduct) {
                const newProduct = new AerodynamicsModel(product);
                await newProduct.save();
                console.log(`${product.name} inserted successfully!`);
            } else {
                console.log(`${product.name} already exists in the database.`);
            }
        }
    } catch (err) {
        console.error('Error connecting or inserting aerodynamics products:', err);
    }
}

(async () => {
    await insertAerodynamicsProducts();
})();
