// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getCars } from '../BackEndConnection';

export default function Car() {
  const { manufacturer, model } = useParams();
  const cars = getCars();
  const selectedCar = cars.find(car => `${car.manufacturer}-${car.model}` === `${manufacturer}-${model}`);

  if (!selectedCar) {
    return <div>Car not found!</div>;
  }

  return (
    <>
      <Header pageName={`${selectedCar.manufacturer} ${selectedCar.model}`} />
      <div className="bg-lightBg rounded-lg overflow-hidden shadow-md p-8">
        <img
          className="w-full max-h-48 object-contain"
          src={`./src/assets/cars/${selectedCar.manufacturer.replace(/\s+/g, '')}${selectedCar.model.replace(/\s+/g, '')}.png`}
          alt={`${selectedCar.manufacturer} ${selectedCar.model} image`}
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-white">{`${selectedCar.manufacturer} ${selectedCar.model}`}</h3>
          <p className="text-gray-400 text-sm mb-2">{`${selectedCar.year}`}</p>
          <div className="flex justify-between items-center">
            <span className="text-white font-bold">{`$ ${selectedCar.price}`}</span>
          </div>
        </div>
      </div>
    </>
  );
}
