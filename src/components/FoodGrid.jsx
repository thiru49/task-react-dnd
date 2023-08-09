import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import Grid from '@mui/material/Grid';

const FoodGrid = ({ title, category }) => {
  const [items, setItems] = useState([]);
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    if (item.category === category && !droppedItems.includes(item.name)) {
      setItems((prevItems) => [...prevItems, item]);
      setDroppedItems((prevDroppedItems) => [...prevDroppedItems, item.name]);
    }
  };

  useEffect(() => {
    setDroppedItems([]);
    return () => {
      setDroppedItems([]);
    };
  }, [items]);

  const [{ isOver }, drop] = useDrop({
    accept: 'FOOD_ITEM',
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const renderGridItems = (items, borderColor) => {
    return items.map((item, index) => (
      <Grid
        item
        xs={6}
        sm={6}
        key={`item-${index}`}
        style={{ border: `2px solid ${borderColor}` }}
      >
        <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', overflow: 'hidden' }}>
          <img
            src={item.name}
            alt={` ${item.name}`}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </Grid>
    ));
  };

  const healthyItems = items.filter((item) => item.category === 'healthy');
  const unhealthyItems = items.filter((item) => item.category === 'unhealthy');

  return (
    <div
      ref={drop}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        margin: '10px',
        width: '100%',
      }}
    >
      <Grid container spacing={2} style={{ background: 'white' }}>
        <Grid item xs={12} style={{ border: '2px solid black', textAlign: 'center' }}>
          {title}
        </Grid>
        {/* Display Healthy Items */}
        {renderGridItems(healthyItems, 'green')}
        {/* Display Unhealthy Items */}
        {renderGridItems(unhealthyItems, 'red')}
      </Grid>
    </div>
  );
};

export default FoodGrid;
