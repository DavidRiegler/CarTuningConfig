import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { getMods } from '../BackEndConnection'

export default function ModsOverview() {
  const [selectedCategory, setSelectedCategory] = useState("aerodynamics");
  const [selectedMods, setSelectedMods] = useState({});

  function handleSelectMod(category, mod) {
    const newSelectedMods = { ...selectedMods };
    if (newSelectedMods[category]) {
      newSelectedMods[category] = null; 
    }
    newSelectedMods[category] = mod;
    setSelectedMods(newSelectedMods);
    localStorage.setItem('selectedMods', JSON.stringify(newSelectedMods));
  }

  function renderMods() {
    const mods = getMods()?.[selectedCategory];

    return (
      mods &&
      mods.map((mod) => (
        <div key={mod.name} className='bg-lightBg w-72 h-72 p-4 text-center flex flex-col justify-evenly'>
          <h2 className='text-xl font-bold mb-3'>{mod.name}</h2>
          <h3 className=''>{mod.description}</h3>
          <button
            className='bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 self-center'
            disabled={selectedMods[selectedCategory] && selectedMods[selectedCategory].name !== mod.name}
            onClick={() => {
              handleSelectMod(selectedCategory, mod)
              alert("Selected " + mod.name + " successfully!")
            }
            }>
            Select
          </button>
        </div>
      ))
    );
  }

  useEffect(() => {
    const storedMods = localStorage.getItem('selectedMods');
    if (storedMods) {
      try {
        setSelectedMods(JSON.parse(storedMods));
      } catch (error) {
        console.error('Error retrieving selected mods from local storage:', error);
      }
    }
  }, []);

  return (
    <>
      <Header pageName="Mods" />
      <div>
        <ul className='text-font text-3xl font-bold w-full px-8 flex justify-between'>
          <li
            className='cursor-pointer'
            onClick={() => setSelectedCategory('aerodynamics')}
          >
            Aerodynamics
          </li>
          <li
            className='cursor-pointer'
            onClick={() => setSelectedCategory('engine')}
          >
            Engine
          </li>
          <li
            className='cursor-pointer'
            onClick={() => setSelectedCategory('exhaust')}
          >
            Exhaust
          </li>
          <li
            className='cursor-pointer'
            onClick={() => setSelectedCategory('handling')}
          >
            Handling
          </li>
          <li
            className='cursor-pointer'
            onClick={() => setSelectedCategory('wheels')}
          >
            Wheels
          </li>
        </ul>
      </div>

      <div className='text-font grid grid-flow-col gap-10 place-items-center mt-10'>
        {renderMods()}
      </div>
    </>
  );
}
