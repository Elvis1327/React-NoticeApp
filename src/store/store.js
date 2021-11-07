import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from '../reducers/root-reducer';


export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
);



