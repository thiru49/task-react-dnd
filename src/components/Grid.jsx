import React from 'react';
import { useDrop } from 'react-dnd';

const Grid = ({ id, name, onDrop, children }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'ITEM',
    drop: (item) => onDrop(id, item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
   console.log(`child${children}`)
   console.log(`candrop${canDrop}`)
  return (
    <div
      ref={drop}
      style={{
        border: isOver ? '2px dashed green' : '2px dashed gray',
        backgroundColor: canDrop ? 'lightgreen' : 'lightgray',
        padding: '10px',
        margin: '10px',
      }}
    >
      <h3>{name}</h3>
      {children}
    </div>
  );
};

export default Grid;
