import List from "./List";

function App() {
  const fruits = [
    // {id: 1,name: "apple", cal: 23},
    // {id: 2,name: "banana", cal: 43},
    // {id: 3,name: "jam", cal: 100},
  ]

  const vegies = [
      {id: 2,name: "banana", cal: 43},
      {id: 3,name: "jam", cal: 100},
  ]

  return (
    <>
      {fruits.length > 0 && <List category="Fruits" fruits={fruits}/>}
      
      {vegies.length > 0 ? <List category="Veggies" fruits = {vegies}/>: null}
    </>
  );
}

export default App