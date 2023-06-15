import React, { useState } from 'react';

const DataComponent = ({ data, onCardClick }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="card" onClick={() => onCardClick(item.id)}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DataComponent;