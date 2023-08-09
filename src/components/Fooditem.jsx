import React from 'react';
import { useDrag } from 'react-dnd';
import Grid from '@mui/material/Grid'; // Don't forget to import the Grid component


const FoodItem = ({ name, category }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'FOOD_ITEM',
    item: { name, category },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Grid
      item
      xs={3}
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border:'2px dashed black',
        backgroundColor:'white'
        
       
      }}
    >
      <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', overflow: 'hidden' }}>
            <img
              src={name}
              alt={` ${name}`}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
       </div>          
    </Grid>
  );
};

export default FoodItem;
