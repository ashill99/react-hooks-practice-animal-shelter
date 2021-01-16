import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onAdoptPet(id) {
    console.log(id)
    const updatedPets = pets.map((pet) => {
      return pet.id === id ? {...pet, isAdopted: true} : pet  
      })
      setPets(updatedPets)
  }

  function onChangeType(e) {
    console.log('type changed')
    setFilters(e.target.value)
  }

  function onFindPetsClick() {
    console.log(filters)
    if (filters === "all") {
      fetch("http://localhost:3001/pets")
      .then(r => r.json())
      .then((petsArray) => {
        setPets(petsArray)
      })
    } else if 
      (filters === "cat") {
        fetch("http://localhost:3001/pets?type=cat")
        .then(r => r.json())
        .then((petsArray) => {
          setPets(petsArray)
        })
      } else if 
      (filters ==="dog") {
      fetch("http://localhost:3001/pets?type=dog")
      .then(r => r.json())
      .then((petsArray) => {
        setPets(petsArray)
      })
    } else if 
    (filters ==="micropig") {
      fetch("http://localhost:3001/pets?type=micropig")
    .then(r => r.json())
    .then((petsArray) => {
      setPets(petsArray)
    })
    }
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={onAdoptPet} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
