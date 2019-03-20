/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import Route from './route';
import HomeScreen from './Home';
import ProfileScreen from './Profile';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import reducer from './reducers/reducer';
import { createStackNavigator, createAppContainer } from 'react-navigation';
const MainNavigatorStack = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
});
const MainNavigator = createAppContainer(MainNavigatorStack)
const AppContainer = () => {
    
    return <Provider store={createStore(combineReducers(reducer))}>
        <MainNavigator />
    </Provider >
};

AppRegistry.registerComponent(appName, () => AppContainer);
