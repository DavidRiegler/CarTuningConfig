// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

async function fetchDataByCategory(category) {
    const response = await fetch(`http://localhost:3001/api/${category}`);
    const data = await response.json();
    return data;
}

function getData() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [carData, setCarData] = useState(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchData = async () => {
        const fetchedData = await Promise.all([
            fetchDataByCategory('cars'),
            fetchDataByCategory('handling'),
            fetchDataByCategory('aerodynamics'),
            fetchDataByCategory('engine'),
            fetchDataByCategory('wheel'),
            fetchDataByCategory('exhaust'), 
        ]);

        // Combine fetched data into a single object
        const combinedData = {
            cars: fetchedData[0],
            handling: fetchedData[1],
            aerodynamics: fetchedData[2],
            engine: fetchedData[3],
            wheels: fetchedData[4],
            exhaust: fetchedData[5], 
        };

        setCarData(combinedData);
        };

        fetchData();
    }, []);

    return carData
}


// gibt momentan nur das Auto mit Index 0 zurück
export const getCurrentCar = () => {
    var [storedCarData, setStoredCar] = useState()
    
    useEffect (() => {
        setStoredCar(JSON.parse(localStorage.getItem('selectedCar')))
    })

    
    return storedCarData
}

export const getCurrentModStats = () => {

    let mods = JSON.parse(localStorage.getItem("selectedMods"))

    var statChanges = {
        weight: 0,
        horsepower: 0,
        acceleration: 0,
        topSpeed: 0,
        handling: 0
    }

    // Data of Handling Mods
    statChanges.weight += mods?.handling?.weightChange || 0
    statChanges.handling += mods?.handling?.handlingImprovement || 0

    // Data of Aerodynamics Mods
    statChanges.topSpeed += mods?.aerodynamics?.topSpeedIncrease || 0
    statChanges.handling += mods?.aerodynamics?.handlingImprovement || 0
    statChanges.weight += mods?.aerodynamics?.weightChange || 0

    // Data of Engine Mods
    statChanges.horsepower += mods?.engine?.horsepowerGain || 0
    statChanges.acceleration += mods?.engine?.accelerationImprovement || 0
    statChanges.topSpeed += mods?.engine?.topSpeedIncrease || 0
    statChanges.weight += mods?.engine?.weightChange || 0

    // Data of Exhaust Mods
    statChanges.horsepower += mods?.exhaust?.horsepowerGain || 0
    statChanges.weight += mods?.exhaust?.weightChange || 0

    // Data of Wheels Mods
    statChanges.weight += mods?.wheels?.weightChange || 0
    statChanges.handling += mods?.wheels?.handlingImpact || 0
    statChanges.acceleration += mods?.wheels?.accelerationImpact || 0


    return statChanges
}

export const getCars = () => {
    return getData()?.cars
}

export const getMods = () => {
    var mods = {
        handling: getData()?.handling,
        aerodynamics: getData()?.aerodynamics,
        engine: getData()?.engine,
        wheels: getData()?.wheels,
        exhaust: getData()?.exhaust
    }

    return mods
}
