const ConfigModel = require('../Models/ConfigModel')

const saveConfig = {
    configName: configName,
    car: selectedCar,
    aerodynamics: selectedAerodynamics,
    engine: selectedEngine,
    exhaust: selectedExhaust,
    handling: selectedHandling,
    wheel: selectedWheel
}

async function configExists(config) {
    try {
      const existingConfig = await ConfigModel.findOne(config);
      return existingConfig !== null;
    } catch (err) {
      console.error('Error checking for existing car:', err);
      return false;
    }
}

(async () => {
    try {
        const configs = [saveConfig];
        for (const config of configs) {
            const configAlreadyExists = await configExists(config);
            if (!configAlreadyExists) {
                const newConfig = new ConfigModel(config);
                await newConfig.save();
                console.log(`${config.configName} Configuration inserted successfully!`);
            } else {
                console.log(`${config.configName} Configuration already exists in the database.`);
            }
        }
    } catch (err) {
        console.error('Error connecting or inserting configurations:', err);
    }
})();