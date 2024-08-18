
function List(props) {
    const fruits = props.fruits;
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>)

    return (
    <>
        <h2>{props.category}</h2>
        <ul>{listItems}</ul>
    </>
    );
}

export default List