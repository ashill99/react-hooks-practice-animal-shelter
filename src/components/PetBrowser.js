import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {

  const eachPet = pets.map((pet) => (
  // id: pet.id, 
  // type: pet.type, 
  // gender: pet.gender,
  // age: pet.age,
  // weight: pet.weight, 
  // name: pet.name,
  // isAdopted: pet.isAdopted,
  <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
  ))


  return (
  <div className="ui cards">
    {eachPet}  
    </div>
  )
}

export default PetBrowser;
