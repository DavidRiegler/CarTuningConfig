import Header from '../components/Header';
import { getCurrentCar, getCurrentModStats } from '../BackEndConnection';
import { useState, useEffect } from 'react';

export default function Home() {
  const [selectedCarData, setSelectedCarData] = useState(null); 


  useEffect(() => {
    const storedCarData = localStorage.getItem('selectedCar');
    if (storedCarData) {
      setSelectedCarData(JSON.parse(storedCarData));
    }
  }, []);

  useEffect(() => {
    if (selectedCarData) {
      localStorage.setItem('selectedCar', JSON.stringify(selectedCarData));
    } else {
      localStorage.removeItem('selectedCar');
    }
  }, [selectedCarData]);

  const stats = getCurrentCar()?.stats || {}; 
  const ModImpact = getCurrentModStats();

  const baseValues = {
    weight: stats.weight || 0,
    horsepower: stats.horsepower || 0,
    acceleration: stats.acceleration || 0,
    topSpeed: stats.topSpeed || 0,
    handling: stats.handling || 0,
  };

  const actualValues = {
    weight: (baseValues.weight || 0) + (ModImpact.weight || 0),
    horsepower: (baseValues.horsepower || 0) + (ModImpact.horsepower || 0),
    acceleration: (baseValues.acceleration || 0) + (ModImpact.acceleration || 0),
    topSpeed: (baseValues.topSpeed || 0) + (ModImpact.topSpeed || 0),
    handling: (baseValues.handling || 0) + (ModImpact.handling || 0),
  };

  const renderProgressBars = () => {
    return Object.keys(baseValues).map((key, index) => {
      const baseValue = baseValues[key];
      const actualValue = actualValues[key];
      const percentage = (actualValue / baseValue) * 100;

      return (
        <div key={index} className='grid grid-cols-2 grid-rows-1 w-full items-center place-items-center'>
          <h2 className='text-xl font-semibold text-font'>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
          <div className='relative w-full'>
            <div className={`bg-primary h-2 absolute rounded-full z-20 flex justify-end`} style={{ width: baseValue + '%' }}>
              <div className={`bg-red-600 h-2 absolute rounded-full z-30`} style={{
                width: 100 - percentage + '%',
                display: percentage < 100 ? 'block' : 'none'
              }} />
            </div>
            <div className={`bg-green-600 h-2 absolute rounded-full z-10 flex justify-end`} style={{ width: actualValue + '%' }} />
            <div className='bg-darkBg w-full h-2 relative rounded-full z-0'></div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Header pageName="Home" />
      <div className='grid grid-rows-1 grid-cols-2 mx-10 mt-5 gap-10'>
        {selectedCarData ? (
          <img
          src={`./src/assets/cars/${selectedCarData.manufacturer.replace(/\s+/g, '')}${selectedCarData.model.replace(/\s+/g, '')}.png`}            
          alt={`${selectedCarData.manufacturer} ${selectedCarData.model} image`}
          />
        ) : (
          <img src='./src/assets/car.png' alt="Current Car" />
        )}
        <div className='relative'>
          <div className='w-full h-full bg-primary absolute blur-md'></div>
          <div className='w-full h-full bg-lightBg rounded-3xl relative grid grid-cols-1 grid-rows-5 items-center place-items-center px-10'>
            {renderProgressBars()}
          </div>
        </div>
      </div>
    </>
  );
}
