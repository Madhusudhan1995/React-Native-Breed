import React, { Component } from 'react';
import {View,Text,StatusBar } from 'react-native'
import { createStackNavigator} from "react-navigation";

import TabViewExample from './src/component/Index'; 

const RootStack = createStackNavigator(
  {
    Home: TabViewExample
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      title: "Welcome",
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center"
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
 

 