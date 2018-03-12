import React, {Component} from 'react';
import {Text,View,StyleSheet,TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Actions} from 'react-native-router-flux';
import Logo from './Logo';
export default class Signup extends Component{
     
      signin(){
          Actions.signin()
      }
      render(){
      
        return(<View style={styles.container}>
             <Logo />
             <TextInput style={styles.inputText} underlineColorAndroid='transparent' 
             placeholder="Email" placeholderTextColor='white' 
             returnKeyType="next"/>
             <TextInput style={styles.inputText} underlineColorAndroid='transparent' 
             placeholder="Password" placeholderTextColor='white'/>
             <TextInput style={styles.inputText} underlineColorAndroid='transparent' 
             placeholder="Re-Enter Password" placeholderTextColor='white'/>
             <TouchableOpacity style={styles.button}>
             <Text style={styles.buttontext}> Signup
             </Text>

            </TouchableOpacity>
            <View style={styles.sgTextContainer}>
            <Text style ={styles.sgText}> Already have account? </Text>
            <TouchableOpacity onPress={this.signin}>       
            <Text style={styles.sgTextSignup}>Signin</Text></TouchableOpacity>
            </View>
          </View>);
      }


}

const styles= StyleSheet.create({
  container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#455a64'

  },
  inputText:{
      width:300,
      backgroundColor:'rgba(255, 255, 255, 0.3)',
      height:50,
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'white',
      marginVertical:10

  },
  button:{
    width:150,
    backgroundColor:'#1c313a',
    height:50,
    marginVertical:15,
    paddingVertical:13,
    borderRadius:15

  },
  buttontext:{
      fontSize:16,
     fontWeight:'500',
     color:'#ffffff',
     textAlign:'center'

  },
  sgTextContainer:{
      flexDirection:'row',
      alignItems:'flex-end',
      marginVertical:16
  },
  sgText:{
      textAlign:'center',
      color:'white',
      

  },
  sgTextSignup:{
      color:'white',
      fontWeight:'500'


  }

});