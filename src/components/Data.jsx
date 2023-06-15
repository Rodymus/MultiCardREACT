import React, { useState } from 'react';
import DataComponent from './DataComponent';
import SingleCardComponent from './SingleCardComponent';

const App = () => {
  const [selectedKey, setSelectedKey] = useState(null);
  const data = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ];

  const handleCardClick = (key) => {
    setSelectedKey(key);
  };

  const handleReturnClick = () => {
    setSelectedKey(null);
  };

  const selectedCard = data.find((item) => item.id === selectedKey);

  return (
    <div>
      <h1>Data Archive</h1>
      {selectedCard ? (
        <SingleCardComponent selectedCard={selectedCard} onReturnClick={handleReturnClick} />
      ) : (
        <DataComponent data={data} onCardClick={handleCardClick} />
      )}
    </div>
  );
};

export default App;
