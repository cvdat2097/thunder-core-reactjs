import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import AppRoute from './utils/AppRoute/AppRoute';
import routes from './config/routes';
import { store } from './model';
import './locales';
import FallbackUI from './components/FallbackUI';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<FallbackUI />}>
            <MainLayout>
              <AppRoute routes={routes} />
            </MainLayout>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
