import React, {Component} from 'react';
import {Logo} from '../components/header';
import {Text, View,TouchableOpacity,Image} from 'react-native';

class NameNotification extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <TouchableOpacity  onPress={() => navigation.goBack(null)} >
                <Image
                    source={require('../../asset/images/back.png')}
                    style={{width:40,height:40,marginLeft:10}}
                />
            </TouchableOpacity>,
            headerTitle: <Logo />,
            headerBackTitle: "Settings",
            headerLayoutPreset: "center"
        };
    };
    render() {
        return (
            <View><Text>this is Name</Text></View>
        );
    }
}

export default NameNotification;
