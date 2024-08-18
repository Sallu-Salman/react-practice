import React, {useState} from "react";

function MyComp() {

    const[car, setCar] = useState({
        year: 2023,
        make: "Ford",
        model: "Mustang"
    });

    function handleYearChange(event) {
        setCar((c) => ({...c, year: event.target.value}))
    }

    function handleMakeChange(event) {
        setCar((c) => ({...c, make: event.target.value}))
    }

    return (
        <div>
            <p>Your car: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
        </div>
    )
}

export default MyComp