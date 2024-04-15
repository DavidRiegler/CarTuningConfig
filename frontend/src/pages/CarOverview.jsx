import Header from '../components/Header'
import { getCars } from '../BackEndConnection'

export default function CarOverview() {

  const cars = getCars();

  function renderCarCards() {
    return cars?.map((car, index) => {

      return (
        <div key={index} className="bg-lightBg rounded-lg overflow-hidden shadow-md mx-8 my-8 block">
          <img
            className="w-full max-h-48 object-contain" 
            src={`./src/assets/cars/${car.manufacturer.replace(/\s+/g, '')}${car.model.replace(/\s+/g, '')}.png`}
            alt={`${car.manufacturer} ${car.model} image`}
          />
          <div className="p-4">
            <h3 className="text-lg font-medium text-white">{`${car.manufacturer} ${car.model}`}</h3>
            <p className="text-gray-400 text-sm mb-2">{`${car.year}`}</p>
            <div className="flex justify-between items-center">
              <span className="text-white font-bold">{`$ ${car.price}`}</span>
              <button className='bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 self-end'>Select</button>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <Header pageName="Cars"/>
      {renderCarCards()}
    </>
  )
}
