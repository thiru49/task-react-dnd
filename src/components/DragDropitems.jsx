import React from 'react';
import { useDrag } from 'react-dnd';

const DragDropItem = ({ id, name }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM',
    item: { id, name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {name}
    </div>
  );
};

export default DragDropItem;
