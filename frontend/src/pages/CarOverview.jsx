import Header from '../components/Header'
import { getCars } from '../BackEndConnection'

export default function CarOverview() {

  const cars = getCars();

  function renderCarCards() {
    return cars?.map((car, index) => {

      return (
        <div key={index} className="bg-lightBg rounded-lg overflow-hidden shadow-md mx-8 my-8 block">
          <img
            className="w-full max-h-48 object-contain mt-10" 
            src={`./src/assets/cars/${car.manufacturer.replace(/\s+/g, '')}${car.model.replace(/\s+/g, '')}.png`}
            alt={`${car.manufacturer} ${car.model} image`}
          />
          <div className="p-4">
            <h2 className="text-lg font-medium text-font">{`${car.manufacturer} ${car.model}`}</h2>
            <p className="text-font text-sm mb-2">{`${car.year}`}</p>
            <span className="text-font font-bold">{`$ ${car.price}`}</span>
            <div className="flex justify-between items-center">
              <div className='w-1/2 grid grid-rows-5 grid-cols-[1fr_3fr] items-center'>

                <h3 className='text-font'>Weight</h3>
                <div className='relative w-full'>
                  <div className={`bg-primary h-2 absolute rounded-full z-20 flex justify-end`} style={{ width: car.stats.weight + '%' }}>
                  </div>
                  <div className='bg-darkBg w-full h-2 relative rounded-full z-0'></div>
                </div>

                <h3 className='text-font'>Horsepower</h3>
                <div className='relative w-full'>
                  <div className={`bg-primary h-2 absolute rounded-full z-20 flex justify-end`} style={{ width: car.stats.horsepower + '%' }}>
                  </div>
                  <div className='bg-darkBg w-full h-2 relative rounded-full z-0'></div>
                </div>

                <h3 className='text-font'>Acceleration</h3>
                <div className='relative w-full'>
                  <div className={`bg-primary h-2 absolute rounded-full z-20 flex justify-end`} style={{ width: car.stats.acceleration + '%' }}>
                  </div>
                  <div className='bg-darkBg w-full h-2 relative rounded-full z-0'></div>
                </div>

                <h3 className='text-font'>Top Speed</h3>
                {console.log(car)}
                <div className='relative w-full'>
                  <div className={`bg-primary h-2 absolute rounded-full z-20 flex justify-end`} style={{ width: car.stats.topSpeed + '%' }}>
                  </div>
                  <div className='bg-darkBg w-full h-2 relative rounded-full z-0'></div>
                </div>

                <h3 className='text-font'>Handling</h3>
                {console.log(car)}
                <div className='relative w-full'>
                  <div className={`bg-primary h-2 absolute rounded-full z-20 flex justify-end`} style={{ width: car.stats.handling + '%' }}>
                  </div>
                  <div className='bg-darkBg w-full h-2 relative rounded-full z-0'></div>
                </div>

              </div>

              <button className='bg-primary text-darkBg px-6 py-3 rounded-md hover:bg-primaryHover transition-colors self-end'>Select</button>
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
