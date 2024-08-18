import React, {useState} from "react"

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div className="color-picker-comp">
            <h2>Color Picker</h2>
            <div className="color-display" style={{backgroundColor: color}}>
                
            </div>
            <p>selected Color: {color}</p>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker