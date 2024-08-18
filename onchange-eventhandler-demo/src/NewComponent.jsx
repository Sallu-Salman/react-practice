import React, {useState} from "react";

function NewComponent() {
    const [name, setName] = useState("<placeholder>");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("s");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }

    return (
        <>
            <p>You have entered: {name}</p>
            <input onChange={handleNameChange} type="password"></input>
            <hr/>

            <p>You have choosen: {payment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
            </select>
            <hr/>

            <p>You have choosen: {shipping}</p>
            <label>
                <input type="radio" value="PickUp" checked={shipping === "PickUp"} onChange={handleShippingChange}/>
                PickUp
            </label>
            <br/>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
        </>
    )
}

export default NewComponent