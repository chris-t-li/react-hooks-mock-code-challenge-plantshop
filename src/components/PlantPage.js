import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import EditPlantForm from "./EditPlantForm";

function PlantPage() {
  const [allPlants, setAllPlants] = useState([]); // Set all plants (this state shall not change)
  const [displayPlants, setDisplayPlants] = useState([]); // Set plants to display
  const [selectEditPlant, setSelectEditPlant] = useState("");
  const [savedEdits, setSavedEdits] = useState(false);
  const [reRender, setReRender] = useState(false);

  const API = "http://localhost:6001/plants";

  useEffect(() => {
    fetch(API).then(res => res.json())
      .then(data => {
        setAllPlants(data)
        setDisplayPlants(data)
      })
  }, [savedEdits, reRender])

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

  function editPlant(plant) {
    //setShowEditForm(!showEditForm);
    console.log("In Plant Page: ", plant)
    setSelectEditPlant(plant);
  }

  function saveEdits(edits) {
    fetch(`${API}/${selectEditPlant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(edits)
    })
      .then(res => res.json())
      .then(data => setSavedEdits(!savedEdits))
  }

  function deletePlant(plant) {
    fetch(`${API}/${plant.id}`, {
      method: "DELETE",
    })
      .then(setReRender(!reRender))
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      {!!selectEditPlant ?
        <EditPlantForm
          selectEditPlant={selectEditPlant}
          saveEdits={saveEdits}
          setSelectEditPlant={setSelectEditPlant}
        /> : null}
      <Search searchPlants={searchPlants} />
      <PlantList
        displayPlants={displayPlants}
        editPlant={editPlant}
        selectEditPlant={selectEditPlant}
        deletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
