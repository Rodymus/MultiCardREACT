import React, { useState } from 'react';

const DataComponent = ({ data, onCardClick }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="card" onClick={() => onCardClick(item.id)}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <img src={item.img} alt="Logo" />
        </div>
        
      ))}
    </div>
  );
};

export default DataComponent;