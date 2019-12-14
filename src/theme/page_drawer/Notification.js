import React, {Component} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Logo} from '../components/header';

class Notification extends Component {
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
           <View>
               <View contentContainerStyle={{
                  flex:1,
                  alignItems:'center',
                  justifyContent:'center'
               }}>
                   <Text>this is notification</Text>
               </View>
           </View>
        );
    }
}

export default Notification;
