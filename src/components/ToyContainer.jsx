import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {


  let arrayOfComponents = props.toys.map ((toyObj) => {
    return <ToyCard key={toyObj.id} toy={toyObj} updateToy={props.updateToy} />
  })

  return(
    <div id="toy-collection">
      {arrayOfComponents}
    </div>
  );
}

export default ToyContainer;
