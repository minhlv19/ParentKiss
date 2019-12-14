import React, {Component} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';

class Notification extends Component {
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
