import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from 'Components/Loader/Loader';

//console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader size={200} />} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
