import React, {Component} from 'react';
import {Logo} from '../components/header';
import {Text, View,TouchableOpacity,Image} from 'react-native';

class RefreshAccount extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <TouchableOpacity  onPress={() => navigation.goBack(null)} >
                <Image
                    source={require('../../asset/images/back.png')}
                    style={{width:20,height:20,marginLeft:10}}
                />
            </TouchableOpacity>,
            headerTitle: <Logo />,
            headerBackTitle: "Settings",
            headerLayoutPreset: "center"
        };
    };
    render() {
        return (
            <View><Text>this is Feedback</Text></View>
        );
    }
}

export default RefreshAccount;
