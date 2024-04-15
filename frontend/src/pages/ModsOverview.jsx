import { useState } from 'react'
import Header from '../components/Header'
import {getMods} from '../BackEndConnection'

export default function ModsOverview() {

    const [selectedMod, selectMod] = useState("aerodynamics")


    function renderMods() {
        const mods = getMods()?.[selectedMod]


        return (
            mods && mods.map(mod =>  
                <div key={mod.name} className='bg-lightBg w-72 h-72 p-7 text-center flex flex-col justify-evenly'>
                    <h2 className='text-xl font-bold mb-3'>{mod.name}</h2>
                    <h3 className=''>{mod.description}</h3>
                </div>
            )
        )
    }

    return (
        <>
            <Header pageName="Mods"/>
            <div>
                <ul className='text-font text-3xl font-bold w-full px-8 flex justify-between'>
                    <li className='cursor-pointer' onClick={() => selectMod("aerodynamics")}>Aerodynamics</li>
                    <li className='cursor-pointer' onClick={() => selectMod("engine")}>Engine</li>
                    <li className='cursor-pointer' onClick={() => selectMod("exhaust")}>Exhaust</li>
                    <li className='cursor-pointer' onClick={() => selectMod("handling")}>Handling</li>
                    <li className='cursor-pointer' onClick={() => selectMod("wheels")}>Wheel</li>
                </ul>
            </div>


            <div className='text-font grid grid-flow-col gap-10 place-items-center mt-10'>
                {renderMods()}
            </div>
        </>
    )
}