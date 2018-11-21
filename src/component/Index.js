import * as React from 'react';
import { View,Text,StyleSheet, Dimensions,Image } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Registation from '../constants/Registation';
import Helth from '../constants/Helth';
import Breed from '../constants/Breed';
 
export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Registation',icon: require('../asserts/registation.png')},
      { key: 'second', title: 'Health' ,icon: require('../asserts/1.png')},
      { key: 'thord', title: 'Breed',icon: require('../asserts/2.png') },
      { key: 'forth', title: 'Netrition',icon: require('../asserts/3.png') },
    ],
  };
  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => 
  <TabBar
    {...props}
     style={styles.header}
    indicatorStyle={{ backgroundColor: 'black' }}
    labelStyle={{color:'grey', fontSize: 11}}
    renderIcon={this._renderIcon}
    />;

  _renderScene = SceneMap({
    first: Registation ,
    second: Helth,
    thord: Breed,
    forth: Helth,
  });
  _renderIcon = ({ route } ) => {
    return <Image source={route.icon} />;
  };
 
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Home/mooON Dashboard</Text>
          <TabView
              navigationState={this.state}
              renderScene={this._renderScene}
              renderTabBar={this._renderTabBar}
              onIndexChange={this._handleIndexChange}
              initialLayout={{
                width: Dimensions.get('window').width,
              }}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container :{
   flex:1,
   },
   text:{
     marginLeft:10,
    backgroundColor:'white',
   },
   scene: {
    flex: 1,
  },
  header: {
    backgroundColor:'white'
  },
 });

 