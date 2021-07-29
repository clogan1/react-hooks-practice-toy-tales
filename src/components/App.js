import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

useEffect(() => {
  fetch(`http://localhost:3001/toys`)
  .then(res => res.json())
  .then(setToys)
}, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

function deleteToy(id){
  const updatedToys = toys.filter(toy => toy.id !== id)
  setToys(updatedToys)
}

function addToy(newToy){
  setToys([...toys, newToy])
}

function updateToy(updatedToy){
  const revisedToys = toys.map(toy => {
    if(toy.id !== updatedToy.id) return toy;
    else return updatedToy
  })
  setToys(revisedToys)
}

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} updateToy={updateToy}/>
    </>
  );
}

export default App;
