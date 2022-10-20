import { useState } from "react";

function EditPlantForm({ selectEditPlant, saveEdits, setSelectEditPlant }) {
    const [editFormData, setEditFormData] = useState({
        name: selectEditPlant.name,
        image: selectEditPlant.image,
        price: selectEditPlant.price
    })

    function handleOnChange(e) {
        setEditFormData({ ...editFormData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        saveEdits(editFormData);
        setSelectEditPlant("")
    }

    return (<div className="new-plant-form">
        <h2>Edit Plant</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder={selectEditPlant.name} value={editFormData.name} onChange={handleOnChange} />
            <input type="text" name="image" placeholder={selectEditPlant.image} value={editFormData.image} onChange={handleOnChange} />
            <input type="number" name="price" step="0.01" placeholder={selectEditPlant.price} value={editFormData.price} onChange={handleOnChange} />
            <button type="submit">Save Edits</button>
        </form>
    </div>)
}

export default EditPlantForm;