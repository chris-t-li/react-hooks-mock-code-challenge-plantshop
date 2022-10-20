import React, { useState } from "react";

function PlantCard({ plant, editPlant, selectEditPlant, deletePlant }) {
  const [isInStock, setIsInStock] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  function handleClick() {
    setIsInStock(!isInStock);
  }
  function handleEditClick() {
    //console.log(plant)
    editPlant(plant);
    setIsEditMode(!isEditMode);
  }

  function handleDelete() {
    deletePlant(plant);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}

      {selectEditPlant.id === plant.id ?
        <button onClick={handleEditClick}>{isEditMode ? "Cancel" : "Edit"}</button>
        : <button onClick={handleEditClick}>Edit</button>
      }
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
