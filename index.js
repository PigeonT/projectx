/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers/reducer';


const AppContainer = () => {
    
    return <Provider store={createStore(reducer)}>
        <App />
    </Provider >
};

AppRegistry.registerComponent(appName, () => AppContainer);
