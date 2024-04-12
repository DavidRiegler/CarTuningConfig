// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function CarDetails() {
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/api/cars');
      const data = await response.json();
      console.log(data)
      setCarData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2>Hello</h2>
      {carData && (
        <ul>
          {carData.map((car) => (
            <li key={car._id}>
              <h2>{car.manufacturer} {car.model}</h2>
              <p>Acceleration: {car.stats.acceleration}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CarDetails;
