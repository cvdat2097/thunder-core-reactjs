import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import AppRoute from './utils/AppRoute/AppRoute';
import routes from './config/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <AppRoute routes={routes} />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
