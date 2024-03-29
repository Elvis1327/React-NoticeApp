import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import App from './App';
import './styles/styles.scss'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)




