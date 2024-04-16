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

  const renderSelectedMods = () => {
    var selectedMods = JSON.parse(localStorage.getItem('selectedMods'))

    if(!selectedMods) {
      selectedMods = {
        aerodynamics: null,
        engine: null,
        exhaust: null,
        handling: null,
        wheels: null
      }
    }

    return (
      <div className='mt-20 flex'>
        <div className='w-1/5 '>
          {selectedMods != null && selectedMods.aerodynamics != null && selectedMods.aerodynamics.name != null && selectedMods.aerodynamics.description ? (
            <div className='bg-lightBg h-full mx-10 p-5 text-center rounded-xl border-b-primary border-r-primary border-b-2 border-r-2' style={{display: selectedMods.aerodynamics == null ? 'none' : 'block'}}>
              <h1 className='text-font font-extrabold text-xl'>Aerodynamics</h1>
              <h2 className='text-font font-bold text-lg'>{selectedMods.aerodynamics.name}</h2>
              <p className='text-font'>{selectedMods.aerodynamics.description}</p>
            </div>
          ) : (
            <div className='bg-lightBg h-full mx-10 p-5 text-center rounded-xl border-b-primary border-r-primary border-b-2 border-r-2' style={{display: selectedMods.aerodynamics == null ? 'none' : 'block'}}>
              <h1 className='text-font font-extrabold text-xl'>Aerodynamics</h1>
              <h2 className='text-font font-bold text-lg'>Not selected</h2>
              <p className='text-font'>Not selected</p>
            </div> 
          )}
        </div>

        <div className='w-1/5 '>
          {selectedMods != null && selectedMods.engine != null && selectedMods.engine.name != null && selectedMods.engine.description ? (
            <div className='bg-lightBg h-full mx-10 p-5 text-center rounded-xl border-b-primary border-r-primary border-b-2 border-r-2' style={{display: selectedMods.engine == null ? 'none' : 'block'}}>
              <h1 className='text-font font-extrabold text-xl'>Engine</h1>
              <h2 className='text-font font-bold text-lg'>{selectedMods.engine.name}</h2>
              <p className='text-font'>{selectedMods.engine.description}</p>
            </div>
          ) : (
            <div className='bg-lightBg h-full mx-10 p-5 text-center rounded-xl border-b-primary border-r-primary border-b-2 border-r-2' style={{display: selectedMods.engine == null ? 'none' : 'block'}}>
              <h1 className='text-font font-extrabold text-xl'>Engine</h1>
              <h2 className='text-font font-bold text-lg'>Not selected</h2>
              <p className='text-font'>Not selected</p>
            </div> 
          )}
        </div>

        <div className='w-1/5 '>
          {selectedMods != null && selectedMods.exhaust != null && selectedMods.exhaust.name != null && selectedMods.exhaust.description ? (
            <div className='bg-lightBg h-full mx-10 p-5 text-center rounded-xl border-b-primary border-r-primary border-b-2 border-r-2' style={{display: selectedMods.exhaust == null ? 'none' : 'block'}}>
              <h1 className='text-font font-extrabold text-xl'>Exhaust</h1>
              <h2 className='text-font font-bold text-lg'>{selectedMods.exhaust.name}</h2>
              <p className='text-font'>{selectedMods.exhaust.description}</p>
            </div>
          ) : (
            <div className='bg-lightBg h-full mx-10 p-5 text-center rounded-xl border-b-primary border-r-primary border-b-2 border-r-2' style={{display: selectedMods.exhaust == null ? 'none' : 'block'}}>
              <h1 className='text-font font-extrabold text-xl'>Exhaust</h1>
              <h2 className='text-font font-bold text-lg'>Not selected</h2>
              <p className='text-font'>Not selected</p>
            </div> 
          )}
        </div>

        <div className='w-1/5 '>
          {selectedMods != null && selectedMods.handling != null && selectedMods.handling.name != null && selectedMods.handling.description ? (
            <div className='bg-lightBg h-full mx-10 p-5 text-center rounded-xl border-b-primary border-r-primary border-b-2 border-r-2' style={{display: selectedMods.handling == null ? 'none' : 'block'}}>
              <h1 className='text-font font-extrabold text-xl'>Handling</h1>
              <h2 className='text-font font-bold text-lg'>{selectedMods.handling.name}</h2>
              <p className='text-font'>{selectedMods.handling.description}</p>
            </div>
          ) : (
            <div className='bg-lightBg h-full mx-10 p-5 text-center rounded-xl border-b-primary border-r-primary border-b-2 border-r-2' style={{display: selectedMods.handling == null ? 'none' : 'block'}}>
              <h1 className='text-font font-extrabold text-xl'>Handling</h1>
              <h2 className='text-font font-bold text-lg'>Not selected</h2>
              <p className='text-font'>Not selected</p>
            </div> 
          )}
        </div>

        <div className='w-1/5 '>
          {selectedMods != null && selectedMods.wheels != null && selectedMods.wheels.name != null && selectedMods.wheels.description ? (
            <div className='bg-lightBg h-full mx-10 p-5 text-center rounded-xl border-b-primary border-r-primary border-b-2 border-r-2' style={{display: selectedMods.wheels == null ? 'none' : 'block'}}>
              <h1 className='text-font font-extrabold text-xl'>Wheels</h1>
              <h2 className='text-font font-bold text-lg'>{selectedMods.wheels.name}</h2>
              <p className='text-font'>{selectedMods.wheels.description}</p>
            </div>
          ) : (
            <div className='bg-lightBg h-full mx-10 p-5 text-center rounded-xl border-b-primary border-r-primary border-b-2 border-r-2' style={{display: selectedMods.wheels == null ? 'none' : 'block'}}>
              <h1 className='text-font font-extrabold text-xl'>Wheels</h1>
              <h2 className='text-font font-bold text-lg'>Not selected</h2>
              <p className='text-font'>Not selected</p>
            </div> 
          )}
        </div>

      </div>
    );
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
      {renderSelectedMods()}
    </>
  );
}
