import React, {Component} from 'react';
import {Logo} from '../components/header';
import {Text, View,TouchableOpacity,Image} from 'react-native';
import Tabhelp from "../tab_help/HelpStack";


class Help extends Component {
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
            <Tabhelp/>
            // <View><Text>dfgb</Text></View>
        );
    }
}

export default Help;
