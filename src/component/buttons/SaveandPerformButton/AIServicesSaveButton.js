import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Button,Image,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import BasicSection from '../../../sectionlist/RecordSectionList/BesicSection';

export default class AIServicesSaveButton extends Component{
    static navigationOptions = {
        title: 'AI Service Type',
      };
    render(){
        return(
            <View>
                <View style={styles.SectionStyle}>
                        <TextInput 
                                underlineColorAndroid = "transparent"
                                placeholder = "Search AI Service Type"
                                placeholderTextColor = "gray"
                                autoCapitalize = "none"
                                
                            />
                        <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                        <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                </View>
                
                <View style={{backgroundColor:'white',height:'100%'}}>
                  <Text style={styles.text}>Home/Farm Admin/Breed/AI Service Type</Text>
                    <Icon style={styles.searchIcon} name="ellipsis-v" size={25} color="gray" />

                        <View style={{flexDirection:'row',paddingBottom:15,backgroundColor:'white',flexWrap:'wrap', borderBottomWidth: 2,marginLeft:20,marginRight:10, borderBottomColor: '#DCD8D8',marginTop:20}}>
                            <BasicSection />
                        </View>

                        <View style={{marginTop:20,paddingBottom:20, marginLeft:10,borderBottomWidth: 2,  borderBottomColor: '#DCD8D8'}}>
                        <View>
                            <TextInput
                            placeholder='Select Service Type'
                            autoCapitalize='none'
                            />
                            <Icon style={styles.searchIcon} name="caret-down" size={20}/>
                        </View>
                        </View>

                        <View style={{alignItems:'center',justifyContent:'center',marginTop:250}}>
                        <Text style={styles.footer}>Copyright &copy; 2018 Stellapps</Text>
                        </View>
                </View>
                    
            </View>
        )
    }
}

const styles= StyleSheet.create({
    list:{
    marginTop:10
    },
    text:{
    marginLeft:20,
    marginTop:15
    },
    textinput:
    {
        borderBottomWidth: 2,
        borderBottomColor: '#DCD8D8',
        color: '#000'
    },
    searchIcon: {
        position:'absolute',
        right: 24 ,
        padding:5,
        marginTop:20
   },
   SectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
     borderWidth: .5,
    borderColor: 'gray',
    height: 40,
    margin: 20,
    position:'relative',
    backgroundColor:'white'
  },
  
})
