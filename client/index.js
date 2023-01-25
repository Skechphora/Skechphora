import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import './styles.scss';
import App from './App.jsx';
import store from './Reducers/store.js';

// Grabbing the element on 'index.html' with the ID of 'root' to render our 'App' component on
const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

// Refactored index.js to just render the 'App' component, keeping the <Provider> wrapper to
// allow access to the store for all child components
root.render(
  <Provider store={store}>
    <App />
    {/* <RouterProvider router={router} /> */}
  </Provider>
);
