import React, {useState} from "react";

function MyCommp() {
    const [foods, setFoods] = useState(['apple', 'mango', 'banana', 'orange', 'carrot']);

    function handleAddFood() {
        const newItem = document.getElementById("add").value;
        
        setFoods((f) => {
            // f.push(newItem);
            // return f;

            return [...f, newItem]; // this is the standard way to do, not modifying the same object
        })

        document.getElementById("add").value = "";
    }

    function handleRemoveFood(index) {
        setFoods((f) => {
            return f.filter((_, i) => i !== index);
        })
    }

    return (
        <>
            <h2>Food List</h2>
            <ul>
                {foods.map((f, i) => <li key={i} onClick={() => handleRemoveFood(i)}>{f}</li>)}
            </ul>
            <hr/>

            <input id="add" type="text"></input>
            <button onClick={handleAddFood}>Add Food</button>
        </>
    )
}

export default MyCommp