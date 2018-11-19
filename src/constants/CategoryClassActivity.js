import React, {Component} from 'react';
import {View,StyleSheet,Image,Text,TouchableHighlight,TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from 'react-native-swiper';

export default class CategoryClassActivity extends Component {
    render() {
      return( 
        <View style={styles.container}>
             <View style={styles.box}>
                 <View style={styles.SectionStyle}>
                 <TextInput 
                        underlineColorAndroid = "transparent"
                        placeholder = "Search Cattle"
                        placeholderTextColor = "gray"
                        autoCapitalize = "none"
                       />
                   <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
                   <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
                 </View>
                  <View style={{marginLeft:20,flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                        <View>
                              <Image source = {require('../asserts/4.png')} style={styles.images}/>
                                <Text>Record AI</Text>  
                        </View>  
                        <View>
                              <Image source = {require('../asserts/5.png')} style={styles.images}/>
                                <Text>AI Summary</Text>  
                        </View>      
                   </View>  

                    <View style={{marginLeft:20,flexDirection:'row',justifyContent:'space-around',marginTop:25}}>
                        <View>
                              <Image source = {require('../asserts/6.png')} style={styles.images}/>
                                <Text>Record PD</Text>  
                        </View>  
                        <View>
                              <Image source = {require('../asserts/7.png')} style={styles.images}/>
                                <Text>PD Summary</Text>  
                        </View>      
                   </View>

                  <View style={{  borderWidth: .5,
                                  borderColor: 'gray',
                                  height: 60,
                                  margin: 20,
                                  flexDirection: 'row',
                                   justifyContent: 'center',
                                  alignItems: 'center'}}>

                  <Swiper style={{marginBottom:40}}>
                          <View style={styles.slide1}>
                            <Text style={styles.text}>Promotion/Notiofecation Banner</Text>
                          </View>
                          <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                          </View>
                          <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                          </View>
                      </Swiper>

                  </View>
             </View>

             <View style={styles.box2}>
                 <Image source = {require('../asserts/8.png')} style={styles.footer}/>
             </View>
        </View>
      ); 
  
    }
  }

  const styles = StyleSheet.create({
    box:{
      marginTop:30,
      backgroundColor:'white',
      height:'72%'
   },
   box2:{
     justifyContent:'center',
     alignItems:'center',
     marginTop:20,
     backgroundColor:'white',
     height:100
   },
   images:{
     width:50,
     height:50
   },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  text: {
    color: 'gray',
    fontSize: 15
  },
  footer:{
    alignItems:'center',
    justifyContent:'center',
  },
  searchIcon: {
    flex:1,
     padding: 10,
     alignItems: 'flex-end',
},
SectionStyle: {
  flexDirection: 'row',
  alignItems: 'center',
   borderWidth: .5,
  borderColor: 'gray',
  height: 40,
  margin: 20
},
 });