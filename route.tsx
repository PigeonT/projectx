// App.js

import React, { Component } from 'react';
import HomeScreen from './Home';
import ProfileScreen from './Profile';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
const MainNavigatorStack = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
});
const MainNavigator = createAppContainer(MainNavigatorStack)

export class RootApp extends Component {
  constructor(props : any) {
    super(props);
  }

  render() {
    return (
      <MainNavigator />
    );
  }
}

const mapStateToProps = (state : any) => ({
  
})

const mapDispatchToProps = (dispatch: any) => (
  {

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RootApp)