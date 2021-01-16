import React from "react";

function Pet({pet, onAdoptPet}) {

  function handleAdoptClick() {
    onAdoptPet(pet.id)
  }

  return (
    <div className="card" key={pet.key}>
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>{pet.age}</p>
          <p>{pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {
          pet.isAdopted === true ? <button className="ui disabled button"> Already adopted </button> :
        <button className="ui primary button" onClick={handleAdoptClick}>Adopt pet</button>
}
      </div>
    </div>
  );
}

export default Pet;
