import React from 'react';

function FlowerComponent({ flower, onFocus, onDelete, onDuplicate }) {
  return (
    <div className="flower-card">
      <img src={flower.image} alt={flower.name} />
      <h2>{flower.name}</h2>
      <div className="button-group">
        <button onClick={() => onFocus(flower.name)}>Focus</button>
        <button onClick={() => onDelete(flower.name)}>Delete</button>
        <button onClick={() => onDuplicate(flower)}>Duplicate</button>
      </div>
    </div>
  );
}

export default FlowerComponent;