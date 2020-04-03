import React from 'react';
import './App.scss';
import { MainLayout } from './layout/MainLayout';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <h1>React App</h1>
        <Button variant="contained" color="primary">
          Click here
        </Button>
      </MainLayout>
    </div>
  );
}

export default App;
