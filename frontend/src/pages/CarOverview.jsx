import Header from '../components/Header'

export default function CarOverview() {
    return (
        <>
            <Header pageName="Cars"/>
            <div className='mx-8 my-8'>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                    <img
                        className="w-full h-full object-cover"
                        src="./src/assets/cars/FordMustangGT.png"
                        alt="Ford Mustang GT image"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-white">Ford Mustang GT</h3>
                        <p className="text-gray-400 text-sm mb-2">2022, 4km</p>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400 text-sm">42000$</p>
                            <span className="text-white font-bold">$  42000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-8 my-8'>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                    <img
                        className="w-full h-full object-cover"
                        src="./src/assets/cars/HondaCivicSi.png"
                        alt="Honda Civic Si image"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-white">Honda Civic Si</h3>
                        <p className="text-gray-400 text-sm mb-2">2021, 12km</p>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400 text-sm">28000$</p>
                            <span className="text-white font-bold">$  28000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-8 my-8'>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                    <img
                        className="w-full h-full object-cover"
                        src="./src/assets/cars/Nissan370z.png"
                        alt="Nissan 370z image"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-white">Nissan 370z</h3>
                        <p className="text-gray-400 text-sm mb-2">2023, 87km</p>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400 text-sm">35000$</p>
                            <span className="text-white font-bold">$  35000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-8 my-8'>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                    <img
                        className="w-full h-full object-cover"
                        src="./src/assets/cars/SubaruWrxSti.png"
                        alt="Subaru Wrx Sti image"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-white">Subaru Wrx Sti</h3>
                        <p className="text-gray-400 text-sm mb-2">2024, 8km</p>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400 text-sm">40000$</p>
                            <span className="text-white font-bold">$  40000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-8 my-8'>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                    <img
                        className="w-full h-full object-cover"
                        src="./src/assets/cars/ToyotaSupra.png"
                        alt="Toyota Supra image"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-white">Toyota Supra</h3>
                        <p className="text-gray-400 text-sm mb-2">2020, 18km</p>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400 text-sm">48000$</p>
                            <span className="text-white font-bold">$  48000</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
