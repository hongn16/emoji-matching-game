import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import App component.
import App from './App.js';

// Import store.
import { store } from './app/store.js';

ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);