import React, {Component} from 'react';
import {Text,View,StyleSheet,StatusBar,Image} from 'react-native';
import Form from './Form';
export default class Logo extends Component{
      
      render(){
      
        return(<View style={styles.container}>
              <Image style={{height:70, width:200}} source={require('./logo.png')}  />
              <Text style={styles.logoText}>Barcode Scanner</Text> 
          </View>);
      }


}

const styles= StyleSheet.create({
  container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  },
  logoText:{
    color:'rgba(255,255,255,0.7)',
    fontSize:25
  }
});