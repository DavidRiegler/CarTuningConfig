import Header from '../components/Header';
import { getCars } from '../BackEndConnection';

export default function CarOverview() {
  const cars = getCars();

  function renderProgressBars(car) {
    const baseValues = {
      weight: car.stats.weight || 0,
      horsepower: car.stats.horsepower || 0,
      acceleration: car.stats.acceleration || 0,
      topSpeed: car.stats.topSpeed || 0,
      handling: car.stats.handling || 0,
    };

    const actualValues = { ...baseValues };

    return (
      <div className='grid grid-cols-1'>
        {Object.keys(baseValues).map((key, index) => {
          const baseValue = baseValues[key];
          const actualValue = actualValues[key];
          const percentage = (actualValue / baseValue) * 100;

          return (
            <div key={index} className='grid grid-cols-2 grid-rows-1 w-full items-center place-items-center'>
              <h2 className='text-lg font-semibold text-white'>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
              <div className='relative w-full'>
                <div className={`bg-black h-2 absolute rounded-full z-20 flex justify-start`} style={{ width: '100%' }}>
                  <div className={`bg-yellow-500 h-2 absolute rounded-full z-20 flex justify-end`} style={{ width: baseValue + '%' }}>
                    <div className={`h-2 absolute rounded-full z-30`} style={{ width: percentage + '%', display: percentage < 100 ? 'block' : 'none' }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function renderCarCards() {
    return cars?.map((car, index) => (
      <div key={index} className="grid grid-cols-2 gap-4 bg-lightBg rounded-lg overflow-hidden shadow-md mx-8 my-8 block">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img
            className="w-full max-h-48 object-contain"
            src={`./src/assets/cars/${car.manufacturer.replace(/\s+/g, '')}${car.model.replace(/\s+/g, '')}.png`}
            alt={`${car.manufacturer} ${car.model} image`}
          />
          <h3 className="text-lg font-medium text-white mt-4">{`${car.manufacturer} ${car.model}`}</h3>
          <p className="text-white text-sm mb-2">{`${car.year}`}</p>
        </div>

        <div className="col-span-1 p-4 flex flex-col justify-between">
          {renderProgressBars(car)}
          <div className="flex justify-between items-center">
            <span className="text-white font-bold bottom-0 mx-28">{`$ ${car.price}`}</span>
            <button className='bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600'>Select</button>
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
      </div>
    ));
  }

  return (
    <>
      <Header pageName="Cars" />
      <div className="grid grid-cols-1 gap-8">
        {renderCarCards()}
      </div>
    </>
  );
}
