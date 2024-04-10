import Header from '../components/Header'

export default function Home() {
    return (
        <>
            <Header pageName="Home"/>
            <div className='grid grid-rows-1 grid-cols-2 mx-10 mt-5'>
                <img src='./src/assets/car.png' alt="Current Car" />
                <div className='w-full h-full bg-lightBg rounded-3xl border-t-2 border-r-2 border-primary'></div>
            </div>
        </>
    )
}