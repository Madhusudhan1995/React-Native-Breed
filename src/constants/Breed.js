import React, {Component} from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity,TextInput} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from 'react-native-swiper';
import { withNavigation } from 'react-navigation';

class Breed extends Component {
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
                  <View style={{marginLeft:20,flexDirection:'row',justifyContent:'space-around',marginTop:2}}>
                        <View>
                          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home1') }>
                              <Image source = {require('../asserts/4.png')} style={styles.images}/>
                                <Text>Record AI</Text>  
                          </TouchableOpacity>
                        </View>  
                        <View>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home2') }>
                              <Image source = {require('../asserts/5.png')} style={styles.images}/>
                                <Text>AI Summary</Text> 
                        </TouchableOpacity>         
                        </View>      
                   </View>  

                    <View style={{marginLeft:20,flexDirection:'row',justifyContent:'space-around',marginTop:25}}>
                        <View>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home3') }>
                              <Image source = {require('../asserts/6.png')} style={styles.images}/>
                                <Text>Record PD</Text>  
                        </TouchableOpacity>
                        </View>  
                        <View>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home4') }>
                              <Image source = {require('../asserts/7.png')} style={styles.images}/>
                                <Text>PD Summary</Text>  
                        </TouchableOpacity>
                        </View>      
                   </View>

                    <View style={{marginLeft:20,flexDirection:'row',justifyContent:'space-around',marginTop:25}}>
                        <View>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('BodyCondition') }>
                              <Image source = {require('../asserts/9.png')} style={styles.images1}/>
                                <Text>Body Condition Score</Text>  
                        </TouchableOpacity>
                        </View>  
                        <View>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('BodyWeight') }>
                              <Image source = {require('../asserts/10.png')} style={styles.images1}/>
                                <Text>Body Weight Management</Text>  
                        </TouchableOpacity>
                        </View>      
                   </View>

                  <View style={{  borderWidth:1,
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
               <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home1') }>
                     <Image source = {require('../asserts/8.png')} style={styles.footer}/>
               </TouchableOpacity>
             </View>
        </View>
      ); 
  
    }
  }

  const styles = StyleSheet.create({
    box:{
      marginTop:8,
      backgroundColor:'white',
      height:'88%'
   },
   box2:{
     justifyContent:'center',
     alignItems:'center',
     marginTop:10,
     backgroundColor:'white',
     height:40
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
     position:'absolute',
     right: 24 ,
     padding:5
},
SectionStyle: {
  flexDirection: 'row',
  alignItems: 'center',
   borderWidth: .5,
  borderColor: 'gray',
  height: 40,
  margin: 20,
  marginTop:10,
  position:'relative'
},
images1:{
  width:50,
  height:50,
 marginLeft:40
}
 });

 export default withNavigation(Breed);