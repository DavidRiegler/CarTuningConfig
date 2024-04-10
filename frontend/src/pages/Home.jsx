import Header from '../components/Header'

export default function Home() {

    const baseWeight = 50
    const baseHorsepower = 70
    const baseAcceleration = 30
    const baseTopSpeed = 85
    const baseHandling = 23
    
    const actualWeight = 30
    const actualHorsepower = 75
    const actualAcceleration = 50
    const actualTopSpeed = 10
    const actualHandling = 43

    return (
        <>
            <Header pageName="Home"/>
            <div className='grid grid-rows-1 grid-cols-2 mx-10 mt-5'>
                <img src='./src/assets/car.png' alt="Current Car" />
                <div className='relative'>
                    <div className='w-full h-full bg-primary absolute blur-md'></div>
                    <div className='w-full h-full bg-lightBg rounded-3xl relative grid grid-cols-2 grid-rows-5 items-center place-items-center px-10'>
                        <h2>Weight</h2>
                        <div className='relative w-full'>
                            <div className='bg-darkBg w-full h-2 absolute rounded-full'></div>
                            <div className={`bg-primary w-[${50}%] h-2 relative rounded-full`}></div>
                        </div>

                        <h2>Horsepower</h2>
                        <div className='relative w-full'>
                            <div className='bg-darkBg w-full h-2 absolute rounded-full'></div>
                            <div className={`bg-primary w-[${50}%] h-2 relative rounded-full`}></div>
                        </div>

                        <h2>Acceleration</h2>
                        <div className='relative w-full'>
                            <div className='bg-darkBg w-full h-2 absolute rounded-full'></div>
                            <div className={`bg-primary w-[${50}%] h-2 relative rounded-full`}></div>
                        </div>

                        <h2>Top Speed</h2>
                        <div className='relative w-full'>
                            <div className='bg-darkBg w-full h-2 absolute rounded-full'></div>
                            <div className={`bg-primary w-[${50}%] h-2 relative rounded-full`}></div>
                        </div>

                        <h2>Handling</h2>
                        <div className='relative w-full'>
                            <div className='bg-darkBg w-full h-2 absolute rounded-full'></div>
                            <div className={`bg-primary w-[${50}%] h-2 relative rounded-full`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}