import React from 'react';
import * as ReactDOMClient from 'react-dom/client'
import App from './App';
import {Provider} from 'react-redux'
import apiStore from './ProjectOfApi/storeApi';



// const root = ReactDOMClient.createRoot(document.getElementById('root'));
// root.render(
// <>
// <App />


// </>

// );

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <Provider store={apiStore}>
    <App />
    </Provider>


)

