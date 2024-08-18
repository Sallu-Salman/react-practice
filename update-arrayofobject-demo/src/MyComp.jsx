import React, {useState} from "react"

function MyComp() {

    const[cars, setCars] = useState([]);
    const[carsYear, setCarsYear] = useState(new Date().getFullYear());
    const[carMake, setCarMake] = useState("");
    const[carModel, setCarModel] = useState("");

    function handleAddCar() {
        setCars((f) => [...f, {year: carsYear, make: carMake, model: carModel}]);
        setCarsYear(new Date().getFullYear());
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index) {
        setCars((f) => f.filter((_, ind) => ind !== index));
    }

    function handleYearChange(event) {
        setCarsYear(() => event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(() => event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(() => event.target.value);
    }

    return (
        <div>
            <h2>List of car objects:</h2>

            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} - {car.make} - {car.model}</li>)}
            </ul>

            <input id="year" type="number" value={carsYear} onChange={handleYearChange}></input><br/>
            <input type="text" id="carMake" placeholder="make" value={carMake} onChange={handleMakeChange}/> <br/>
            <input type="text" id="carModel" placeholder="model" value={carModel} onChange={handleModelChange}/> <br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}

export default MyComp