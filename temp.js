import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class Barcode extends React.Component {
  constructor(props){
    super(props);
    this.state={
      hasCameraPermission: null,
      
    }
}
user_Login_Function=()=>{
    const {Email}=this.state;
    const {Password}=this.state;

fetch('http:/192.168.2.3/user_login.php', {
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
 Actions.barcode()

}).catch((error) => {
 console.error(error);
});




  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.Barcode}>
          <View style={{height:300,width:250}}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
          </View>
        </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    alert(`${data}`);
  }
}

const styles=StyleSheet.create({
  Barcode:{
    flex:1,
    marginTop:100,
    alignItems:'center'
  }
});