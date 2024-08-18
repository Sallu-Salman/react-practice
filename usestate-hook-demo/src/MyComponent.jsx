import React, {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    

    const updateName = () => {
        setName("Salman")
    }

    const updateAge = () => {
        setAge(age+1);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>
            <p>Count: {age}</p>
            <button onClick={updateAge}>Increment</button>
        </div>
    )

}

export default MyComponent