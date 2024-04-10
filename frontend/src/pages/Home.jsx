import Header from '../components/Header'

export default function Home() {
    return (
        <>
            <Header pageName="Home"/>
            <div className='grid grid-rows-1 grid-cols-2'>
                <img src='./src/assets/car.png' alt="Current Car" />
                <div className='w-full h-full bg-red-600'></div>
            </div>
        </>
    )
}