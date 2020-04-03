import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import AppRoute from './utils/AppRoute/AppRoute';
import routes from './config/routes';
import { store } from './model';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <MainLayout>
            <AppRoute routes={routes} />
          </MainLayout>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
