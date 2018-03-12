import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class Barcode extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasCameraPermission: null,
      data:''
    }
   
  }
  user_Login_Function=(data)=>{
    
fetch('http:/192.168.0.4/barcode_data.php', {
         method: 'POST',
         headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
},
body: JSON.stringify({

data: data

})

}).then((response) => response.json())
.then((responseJson) => {
alert(responseJson);


}).catch((error) => {
 console.error(error);
});

  }




  _handleBarCodeRead = ({ type, data }) => {
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.user_Login_Function(data);
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

 
}

const styles=StyleSheet.create({
  Barcode:{
    flex:1,
    marginTop:100,
    alignItems:'center'
  }
});