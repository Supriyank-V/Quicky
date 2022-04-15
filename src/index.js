import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App/>
    </StateProvider>
)
