import React, {Component} from 'React';
import {Stack,Scene,Router} from 'react-native-router-flux';
import Form from './Form';
import Signup from './Signup';
import Barcode from './Barcode';
export default class Routes extends Component{
    render(){
    return(
        <Router>
       <Stack key="root" hideNavBar={true}>
        <Scene key="signin" component={Form} />
        <Scene key="signup" component={Signup} />
        <Scene key="barcode" component={Barcode} />
        </Stack>
        </Router>
    );
}}