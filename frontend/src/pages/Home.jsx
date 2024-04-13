import Header from '../components/Header'

export default function Home() {

    const baseValues = {
        weight: 20,
        horsepower: 70,
        acceleration: 30,
        topSpeed: 85,
        handling: 23
    };
    
    const actualValues = {
        weight: 10,
        horsepower: 75,
        acceleration: 50,
        topSpeed: 10,
        handling: 43
    };
    
    // Erstelle eine Funktion, um die JSX-Elemente für alle Variablen zu generieren
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
            <Header pageName="Home"/>
            <div className='grid grid-rows-1 grid-cols-2 mx-10 mt-5'>
                <img src='./src/assets/car.png' alt="Current Car" />
                <div className='relative'>
                    <div className='w-full h-full bg-primary absolute blur-md'></div>
                    <div className='w-full h-full bg-lightBg rounded-3xl relative grid grid-cols-1 grid-rows-5 items-center place-items-center px-10'>
                        {renderProgressBars()}
                    </div>
                </div>
            </div>
        </>
    )
}