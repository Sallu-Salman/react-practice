import {useState} from 'react';

function TodoList() {

    const [listItems, setListItems] = useState([]);

    const [userInput, setUserInput] = useState("");

    function handleUserInputChange(event) {
        setUserInput(event.target.value);
    }

    function handleAddTask() {
        if(userInput.trim() !== "") {
            setListItems((f) => [...f, userInput]);
            setUserInput("");
        }
    }

    function handleItemDelte(index) {
        setListItems(f => f.filter((_, i) => i !== index));
    }

    function handleItemUpshift(index) {

        if(index > 0) {
            [listItems[index-1], listItems[index]] = [listItems[index], listItems[index-1]]
        }
        setListItems(() => [...listItems]);
    }

    function handleItemDownshift(index) {
        if(index < listItems.length - 1) {
            const arr = [...listItems];
            [arr[index+1], arr[index]] = [arr[index], arr[index+1]]
            setListItems(arr);
        }
    }

    return (
        <div className='todo-container'>
            <h2>To-Do-List</h2>
            <input type='text' value={userInput} onChange={handleUserInputChange}/>
            <button onClick={() => handleAddTask()}>Add</button>
            <hr />

            <ul>
                {listItems.map((item, index) => <li key={index}><div className='itemName'>{item}</div>
                    <button onClick={() => handleItemDelte(index)}>delete</button>
                    <button onClick={() => handleItemUpshift(index)}>☝️</button>
                    <button onClick={() => handleItemDownshift(index)}>👇</button>
                </li>)}
            </ul>
            
        </div>
    )
}

export default TodoList