import React from 'react';

const SingleCardComponent = ({ selectedCard, onReturnClick }) => {
  if (!selectedCard) {
    return null; // Render nothing if no card is selected
  }

  return (
    <div className="card">
      <h3>{selectedCard.name}</h3>
      <p>{selectedCard.description}</p>
      <button onClick={onReturnClick}>Return to All Cards</button>
    </div>
  );
};

export default SingleCardComponent;
