import React, {Component} from 'react';
import {Text,View,StyleSheet,TextInput, TouchableOpacity,KeyboardAvoidingView,Alert} from 'react-native';
import Logo from './Logo';
import {Actions} from 'react-native-router-flux';
export default class Form extends Component{
       constructor(props){
           super(props);
           this.state={
               Email:'',
               Password:''
           }
       }
       user_Login_Function=()=>{
           const {Email}=this.state;
           const {Password}=this.state;
       
       fetch('http:/192.168.43.37/user_login.php', {
                method: 'POST',
                headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    Email: Email,
 
    Password: Password
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        Alert.alert(responseJson);
        if(responseJson=='Invalid Credentials!!! Please Try Again'){
       // Actions.barcode();
        }
        else{
            Actions.barcode();
        }
      }).catch((error) => {
        console.error(error);
      });

    }
    signup(){
        Actions.signup()
    }
      render(){
      
        return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
             <Logo />
             <TextInput style={styles.inputText} underlineColorAndroid='transparent' 
             placeholder="Email" placeholderTextColor='white'selectionColor='white'
              keyboardType="email-address" returnKeyType="next"
              onChangeText={Email=>this.setState({Email})}/>
             <TextInput style={styles.inputText} underlineColorAndroid='transparent' 
             placeholder="Password" placeholderTextColor='white' returnKeyType="go"
             onChangeText={Password=>this.setState({Password})} secureTextEntry />

             <TouchableOpacity style={styles.button} onPress={this.user_Login_Function}>
             <Text style={styles.buttontext}>Login
             </Text>

            </TouchableOpacity>
            <View style={styles.sgTextContainer}>
            <Text style ={styles.sgText}> Don't have an account yet? </Text>
            <TouchableOpacity onPress={this.signup}>          
            <Text style={styles.sgTextSignup}>Signup</Text></TouchableOpacity>
            </View>
          </KeyboardAvoidingView>);
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