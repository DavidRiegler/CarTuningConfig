// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

async function fetchDataByCategory(category) {
  const response = await fetch(`http://localhost:3001/api/${category}`);
  const data = await response.json();
  return data;
}

function App() {
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await Promise.all([
        fetchDataByCategory('cars'),
        fetchDataByCategory('handling'),
        fetchDataByCategory('aerodynamics'),
        fetchDataByCategory('engine'),
        fetchDataByCategory('wheel'),
        fetchDataByCategory('exhaust'), 
      ]);

      // Combine fetched data into a single object
      const combinedData = {
        cars: fetchedData[0],
        handling: fetchedData[1],
        aerodynamics: fetchedData[2],
        engine: fetchedData[3],
        wheels: fetchedData[4],
        exhaust: fetchedData[5], // Add exhaust property
      };

      setCarData(combinedData);
    };

    fetchData();
  }, []);

  console.log(fetchDataByCategory('cars'))


  return (
    <div className="App text-white">
      <h1>Car Data</h1>
      {carData ? (
        <div>
          
          <h2>Car</h2>
          
          {carData.cars.find((car) => car.manufacturer === 'Ford' || car.model === 'MustangGT')?.stats?.topSpeed}

          <h2>Handling</h2>

          {carData.handling.find((handling) => handling.name === 'Coilover Suspension Kit')?.handlingImprovement}

          <h2>Aerodynamics</h2>

          {carData.aerodynamics.find((aerodynamics) => aerodynamics.name === 'Universal Racing Spoiler')?.topSpeedIncrease}

          <h2>Engine</h2>

          {carData.engine.find((engine) => engine.name === 'Performance Air Intake System')?.weightChange}

          <h2>Wheels</h2>

          {carData.wheels.find((wheels) => wheels.name === 'Lightweight Wheels')?.weightChange}

          <h2>Exhaust</h2>

          {carData.exhaust.find((exhaust) => exhaust.name === 'Cat-Back Exhaust System')?.description}

        </div>
      ) : (
        <p>Loading car data...</p>
      )}
    </div>
  );
}

export default App;
