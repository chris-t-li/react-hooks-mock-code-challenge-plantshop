import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ displayPlants, editPlant, selectEditPlant, deletePlant }) {

  return (
    <ul className="cards">
      {displayPlants.map(plant => <PlantCard
        key={plant.id}
        plant={plant}
        editPlant={editPlant}
        selectEditPlant={selectEditPlant}
        deletePlant={deletePlant}
      />)}
    </ul>
  );
}

export default PlantList;
