import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ displayPlants }) {

  return (
    <ul className="cards">
      {displayPlants.map(plant => <PlantCard key={plant.id} plant={plant} />)}
    </ul>
  );
}

export default PlantList;
