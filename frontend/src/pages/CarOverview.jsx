import Header from '../components/Header'
import { getCars } from '../BackEndConnection'
import { Link } from 'react-router-dom' 

export default function CarOverview() {

  const cars = getCars();

  console.log(cars)

  function renderCarCards() {
    return cars?.map((car, index) => {
      const carLink = `/cars/${car.manufacturer}-${car.model}`; 

      return (
        <Link key={index} to={carLink} className='mx-8 my-8 block'>
          <div className="bg-lightBg rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full max-h-48 object-contain" 
              src={`./src/assets/cars/${car.manufacturer.replace(/\s+/g, '')}${car.model.replace(/\s+/g, '')}.png`}
              alt={`${car.manufacturer} ${car.model} image`}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-white">{`${car.manufacturer} ${car.model}`}</h3>
              <p className="text-gray-400 text-sm mb-2">{`${car.year}, 4km`}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">{`${car.price}$`}</p>
                <span className="text-white font-bold">{`$ ${car.price}`}</span>
              </div>
            </div>
          </div>
        </Link>
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
