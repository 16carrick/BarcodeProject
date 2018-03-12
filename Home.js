import React, {Component} from 'react';
import {Text,View,StyleSheet,TextInput, TouchableOpacity,KeyboardAvoidingView,Alert,Picker} from 'react-native';
//import {Actions} from 'react-native-router-flux';
let PickerItem = Picker.Item;
 
let LOCATIONS = {
    pune: {
        name: 'Pune',
        gates: ['gate1', 'gate2', 'gate4'],
    },
    jamshedpur: {
        name: 'Jamshedpur',
        gates: ['gate16', 'gate13'],
    },
    mumbai: {
        name: 'Mumbai',
        gates: ['gate134', 'gate146', 'gate157'],
    }
  
};

 export default class Home extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            location: 'pune',
            locationIndex: 0,
            Device_id:'',

        }
    }
    device_save_function=()=>{
        alert('haaa');
       // const {Device_id}=this.state;
       const {location}=this.state;
       const {locationIndex}=this.state;
        fetch('http:/192.168.43.37/device.php', {
            method: 'POST',
            headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
            },
            body: JSON.stringify({

          //  Device_id:Device_id,
            location:location,
            locationIndex:locationIndex

            })

            }).then((response) => response.json())
            .then((responseJson) => {

                Alert.alert(responseJson);
              
            }).catch((error) => {
                console.error(error);
            });

}
    
     
       render(){ 
           let location=LOCATIONS[this.state.location];
        

           return(
            
            <View style={styles.container}>
            <TextInput style={styles.inputText} underlineColorAndroid='transparent' 
             placeholder="Device Id" placeholderTextColor='white'selectionColor='white'
             returnKeyType="next"
              onChangeText={Device_id=>this.setState({Device_id})}/>        
             <Text> Select the location </Text>
            <Picker
                    selectedValue={this.state.location}
                    onValueChange={(location) => this.setState({location, locationIndex: 0})}>
                    {Object.keys(LOCATIONS).map((location) => (
                        <PickerItem
                            key={location}
                            value={location}
                            label={LOCATIONS[location].name}
                        />

                    ))}
            
                </Picker>
                <Text>Please Choose gate number of {location.name}</Text>
                <Picker
                    selectedValue={this.state.locationIndex}
                    key={this.state.location}
                    onValueChange={(locationIndex) => this.setState({locationIndex})}>
                    {LOCATIONS[this.state.location].gates.map((gateName, locationIndex) => (
                        <PickerItem
                            key={this.state.location + '_' + locationIndex}
                            value={locationIndex}
                            label={gateName}
                        />
                    ))}
                </Picker>
                <TouchableOpacity style={styles.button} onPress={this.device_save_function}>
             <Text style={styles.buttontext}>Save
             </Text>
             </TouchableOpacity>
               
            </View>
           );
       }



}
const styles= StyleSheet.create({
    container:{
    flex:1,
   // alignItems:'center',
   // backgroundColor:'#455a64',
  //  justifyContent:'center'
    

  
    },
    dropdown:{
        
    }
  
  
});