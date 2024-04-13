import React, { useState, useEffect } from 'react';

async function fetchDataByCategory(category) {
    const response = await fetch(`http://localhost:3001/api/${category}`);
    const data = await response.json();
    return data;
}

function getData() {
    const [carData, setCarData] = useState(null);

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
            exhaust: fetchedData[5], // Add exhaust property
        };

        setCarData(combinedData);
        };

        fetchData();
    }, []);

    return carData
}


// gibt momentan nur das Auto mit Index 0 zurück
export const getCurrentCar = () => {
    return getData()?.cars[0]
}

export const getCurrentModStats = () => {
    var statChanges = {
        weight: 0,
        horsepower: 0,
        acceleration: 0,
        topSpeed: 0,
        handling: 0
    }

    // Data of Handling Mods
    statChanges.weight += getData()?.handling[0].weightChange
    statChanges.handling += getData()?.handling[0].handlingImprovement

    // Data of Aerodynamics Mods
    statChanges.topSpeed += getData()?.aerodynamics[0].topSpeedIncrease
    statChanges.handling += getData()?.aerodynamics[0].handlingImprovement
    statChanges.weight += getData()?.aerodynamics[0].weightChange

    // Data of Engine Mods
    statChanges.horsepower += getData()?.engine[0].horsepowerGain
    statChanges.acceleration += getData()?.engine[0].accelerationImprovement
    statChanges.topSpeed += getData()?.engine[0].topSpeedIncrease
    statChanges.weight += getData()?.engine[0].weightChange

    // Data of Exhaust Mods
    statChanges.horsepower += getData()?.exhaust[0].horsepowerGain
    statChanges.weight += getData()?.exhaust[0].weightChange

    // Data of Wheels Mods
    statChanges.weight += getData()?.wheels[0].weightChange
    statChanges.handling += getData()?.wheels[0].handlingImpact
    statChanges.acceleration += getData()?.wheels[0].accelerationImpact

    return statChanges
}