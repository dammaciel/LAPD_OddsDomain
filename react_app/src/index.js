import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import reducer from './reducers';

const store = createStore(
    reducer, 
    {},
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();