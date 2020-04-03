import React from 'react';
import './App.scss';
import { MainLayout } from './layout/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <div>React App</div>
      </MainLayout>
    </div>
  );
}

export default App;
