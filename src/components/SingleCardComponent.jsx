import React from 'react';

const SingleCardComponent = ({ selectedCard, onReturnClick }) => {
  if (!selectedCard) {
    return null; // Render nothing if no card is selected
  }

  return (
    <div className="card">
      <h3>{selectedCard.name}</h3>
      <p>{selectedCard.description}</p>
      <img src={selectedCard.img} />

      <button onClick={onReturnClick}>Regresar al menú</button>
    </div>
  );
};

export default SingleCardComponent;
