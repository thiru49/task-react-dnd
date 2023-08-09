import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Grid } from '@mui/material'; // Import the Grid component from Material-UI
import FoodItem from './components/Fooditem';
import FoodGrid from './components/FoodGrid';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
} from './assets';

const App = () => {
  const foods = [
    { name: image1, category: 'healthy' },
    { name: image2, category: 'healthy' },
    { name: image3, category: 'healthy' },
    { name: image4, category: 'healthy' },
    { name: image5, category: 'healthy' },
    { name: image6, category: 'healthy' },
  
    { name: image7, category: 'unhealthy' },
    { name: image8, category: 'unhealthy' },
    { name: image9, category: 'unhealthy' },
    { name: image10, category: 'unhealthy' },
    { name: image11, category: 'unhealthy' },
    { name: image12, category: 'unhealthy' },
   
    
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ border: '3px solid black',  padding: '0.2rem', position: 'relative',height:'100vh',width:'80%' }}>
        <div style={{ border: '3px dotted black', backgroundColor: 'lightgreen' }}>
          <h3
            style={{
              borderTop: '3px solid black',
              borderBottom: '3px solid black',
              textAlign: 'center',
              backgroundColor: 'yellow',
              position: 'absolute',
              width: '100%',
              letterSpacing:'0.1rem'
            }}
          >
            HEALTHY AND UNHEALTHY FOOD
          </h3>
          <p style={{marginTop:'4rem',letterSpacing:'0.1rem'}}>Group the food into Healthy or Unhealthy food</p>
          
          <Grid container spacing={0}  style={{ marginTop:'1rem' }}>
            {foods.map((food) => (
              <FoodItem key={food.name} name={food.name} category={food.category} />
            ))}
          </Grid>
         
          <div style={{ display: 'flex' }}>
            <FoodGrid title="Healthy Foods" category="healthy" />
            <FoodGrid title="Unhealthy Foods" category="unhealthy" />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
