/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfileScreen from './components/ProfileScreen';



// export default createAppContainer(AppNavigator);

//Profile
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {}
export class HomeScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button onPress={this.props.signUp} title='SignupR'/>
        <Button onPress={() => this.props.navigation.navigate('Profile') } title='Sign In'/>
        <Text>{this.props.count}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state: State) => (
  {
    count: state.count
  }
)

const mapDispatchToProps = (dispatch: any) => (
  {
    signUp: (_count: number) => {
      dispatch({ type: 'ADD_COUNT', count: _count })
    }
  }
);
const AppNavigator = createStackNavigator({
  Home: {
    screen: connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
  },
  Profile:{
    screen: ProfileScreen
  }
});
export default createAppContainer(AppNavigator);



