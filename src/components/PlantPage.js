import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [allPlants, setAllPlants] = useState([]); // Set all plants (this state shall not change)
  const [displayPlants, setDisplayPlants] = useState([]); // Set plants to display

  const API = "http://localhost:6001/plants";

  useEffect(() => {
    fetch(API).then(res => res.json())
      .then(data => {
        setAllPlants(data)
        setDisplayPlants(data)
      })
  }, [])

  function addNewPlant(newPlant) {
    //console.log(newPlant)
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...newPlant, price: parseInt(newPlant.price)
      })
    })
      .then(res => res.json())
      .then(addedPlant => {
        setDisplayPlants([...allPlants, addedPlant]);
      })
  }

  function searchPlants(search) {
    setDisplayPlants([...allPlants].filter(plant => plant.name.toLowerCase().includes(search)))
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search searchPlants={searchPlants} />
      <PlantList
        displayPlants={displayPlants}
      />
    </main>
  );
}

export default PlantPage;
