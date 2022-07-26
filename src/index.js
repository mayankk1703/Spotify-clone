
import ReactDOM from 'react-dom/client';

import App from './App';
import reducer, {initialState} from './Components/reducer';
import React,{createContext} from 'react'

const val={
    initialState:initialState,
    reducer:reducer
}
 export const StateContext=createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <StateContext.Provider value={val}>
        <App/>
    </StateContext.Provider>


);
